import { Bug, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Zoonoses = () => {
  const zoonosesNumber = "5515981556703";
  const whatsappMessage = encodeURIComponent("Olá, gostaria de informações sobre Zoonoses.");

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${zoonosesNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-16 px-4 bg-gradient-to-br from-accent/5 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Zoonoses
            </h2>
            <p className="text-muted-foreground text-lg">
              Centro de Controle de Zoonoses - Atendimento e informações
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-lg border border-border p-8 space-y-6">
            <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <Bug className="w-12 h-12 text-primary flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Centro de Zoonoses
                </h3>
                <p className="text-muted-foreground mb-4">
                  Entre em contato para denúncias de animais abandonados, vacinação, castração e controle de pragas urbanas.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <span className="font-semibold text-foreground">(15) 98155-6703</span>
                </div>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contato via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Zoonoses;
