import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Loader2 } from "lucide-react";

interface Councilor {
  id: string;
  name: string;
  party: string;
  photo_url: string | null;
  phone: string | null;
  email: string | null;
  bio: string | null;
}

const CouncilorsSection = () => {
  const { data: councilors, isLoading } = useQuery({
    queryKey: ['councilors'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('councilors')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data as Councilor[];
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
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Vereadores
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça os representantes da nossa cidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {councilors?.map((councilor) => (
            <Card key={councilor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-muted">
                    {councilor.photo_url ? (
                      <img 
                        src={councilor.photo_url} 
                        alt={councilor.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-muted-foreground">
                        {councilor.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {councilor.name}
                  </h3>
                  
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                    {councilor.party}
                  </span>
                  
                  {councilor.bio && (
                    <p className="text-muted-foreground text-sm mb-4">
                      {councilor.bio}
                    </p>
                  )}
                  
                  <div className="space-y-2 w-full">
                    {councilor.phone && (
                      <a 
                        href={`tel:${councilor.phone}`}
                        className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {councilor.phone}
                      </a>
                    )}
                    {councilor.email && (
                      <a 
                        href={`mailto:${councilor.email}`}
                        className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {councilor.email}
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!councilors || councilors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum vereador cadastrado ainda.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CouncilorsSection;
