import { Bug, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Zoonoses = () => {
  const zoonosesNumber = "5515981556703";
  const whatsappMessage = encodeURIComponent("Olá, gostaria de informações sobre Zoonoses.");

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${zoonosesNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="px-3 sm:px-4 py-6 sm:py-8">
      <section className="py-6 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-4">
              Zoonoses
            </h2>
            <p className="text-muted-foreground text-sm sm:text-lg">
              Centro de Controle de Zoonoses - Atendimento e informações
            </p>
          </div>

          <div className="bg-card rounded-lg sm:rounded-xl shadow-lg border border-border p-4 sm:p-8">
            <div className="flex flex-col gap-4 p-4 sm:p-6 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center gap-3">
                <Bug className="w-10 h-10 sm:w-12 sm:h-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    Centro de Zoonoses
                  </h3>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold text-foreground text-sm sm:text-base">(15) 98155-6703</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                Entre em contato para denúncias de animais abandonados, vacinação, castração e controle de pragas urbanas.
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] active:bg-[#1DA851] text-white h-12"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contato via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Zoonoses;
