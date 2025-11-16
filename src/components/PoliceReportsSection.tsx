import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PoliceReport {
  id: string;
  title: string;
  description: string;
  location: string | null;
  report_date: string;
}

const PoliceReportsSection = () => {
  const { data: reports, isLoading } = useQuery({
    queryKey: ['police_reports'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('police_reports')
        .select('*')
        .order('report_date', { ascending: false })
        .limit(10);
      
      if (error) throw error;
      return data as PoliceReport[];
    },
  });

  if (isLoading) {
    return (
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ocorrências Policiais
          </h2>
          <p className="text-muted-foreground text-lg">
            Acompanhe as últimas ocorrências registradas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reports?.map((report) => (
            <Card key={report.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {report.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {report.description}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  {report.location && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {report.location}
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {format(new Date(report.report_date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!reports || reports.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhuma ocorrência registrada recentemente.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PoliceReportsSection;
