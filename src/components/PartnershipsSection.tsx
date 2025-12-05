import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Loader2 } from "lucide-react";

interface Partnership {
  id: string;
  name: string;
  logo_url: string | null;
  website: string | null;
  description: string | null;
}

const PartnershipsSection = () => {
  const { data: partnerships, isLoading } = useQuery({
    queryKey: ['partnerships'],
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from('partnerships')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data as Partnership[];
    },
  });

  if (isLoading) {
    return (
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-background border-t border-border">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-muted-foreground text-lg">
            Empresas e instituições que apoiam o Pilar em Foco
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partnerships?.map((partnership) => (
            <Card 
              key={partnership.id} 
              className="hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-full aspect-square mb-4 flex items-center justify-center bg-muted rounded-lg overflow-hidden">
                  {partnership.logo_url ? (
                    <img 
                      src={partnership.logo_url} 
                      alt={partnership.name}
                      className="w-full h-full object-contain p-4"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-muted-foreground">
                      {partnership.name.substring(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {partnership.name}
                </h3>
                
                {partnership.description && (
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {partnership.description}
                  </p>
                )}
                
                {partnership.website && (
                  <a 
                    href={partnership.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visitar site
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {!partnerships || partnerships.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum parceiro cadastrado ainda.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PartnershipsSection;
