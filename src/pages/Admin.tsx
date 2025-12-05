import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Newspaper, Users, Shield, Handshake } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import NewsManagement from "@/components/admin/NewsManagement";
import CouncilorsManagement from "@/components/admin/CouncilorsManagement";
import PoliceReportsManagement from "@/components/admin/PoliceReportsManagement";
import PartnershipsManagement from "@/components/admin/PartnershipsManagement";

const Admin = () => {
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkUser();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      setUser(session.user);

      // Check if user is admin
      const { data: roles } = await (supabase as any)
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin')
        .single();

      if (!roles) {
        toast({
          title: "Acesso negado",
          description: "Você não tem permissão de administrador.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      setIsAdmin(true);
    } catch (error: any) {
      console.error("Error checking user:", error);
      navigate("/auth");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Painel Administrativo</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="news" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="news">
              <Newspaper className="w-4 h-4 mr-2" />
              Notícias
            </TabsTrigger>
            <TabsTrigger value="councilors">
              <Users className="w-4 h-4 mr-2" />
              Vereadores
            </TabsTrigger>
            <TabsTrigger value="police">
              <Shield className="w-4 h-4 mr-2" />
              Ocorrências
            </TabsTrigger>
            <TabsTrigger value="partnerships">
              <Handshake className="w-4 h-4 mr-2" />
              Parcerias
            </TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            <NewsManagement />
          </TabsContent>

          <TabsContent value="councilors">
            <CouncilorsManagement />
          </TabsContent>

          <TabsContent value="police">
            <PoliceReportsManagement />
          </TabsContent>

          <TabsContent value="partnerships">
            <PartnershipsManagement />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
