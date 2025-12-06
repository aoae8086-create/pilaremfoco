import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import NewsCard from "./NewsCard";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

interface News {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  category: string;
  created_at: string;
}

const NewsGrid = () => {
  const queryClient = useQueryClient();

  const { data: news, isLoading } = useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from('news')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(12);
      
      if (error) throw error;
      return data as News[];
    },
  });

  // Real-time subscription for news updates
  useEffect(() => {
    const channel = supabase
      .channel('news-realtime')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'news'
        },
        () => {
          queryClient.invalidateQueries({ queryKey: ['news'] });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [queryClient]);

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-black mb-2">
          Últimas <span className="text-accent">Notícias</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-accent to-secondary rounded-full" />
      </div>
      
      {news && news.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsCard 
              key={item.id}
              title={item.title}
              excerpt={item.content.substring(0, 150) + '...'}
              category={item.category}
              image={item.image_url || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80"}
              time="Recente"
              views="--"
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Nenhuma notícia publicada ainda.
          </p>
        </div>
      )}
    </section>
  );
};

export default NewsGrid;
