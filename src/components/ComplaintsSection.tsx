import { MessageCircle, Phone, Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComplaintsSection = () => {
  const contacts = [
    {
      title: "GCM - Guarda Civil Municipal",
      number: "5515997328154",
      displayNumber: "(15) 99732-8154",
      message: "Olá, gostaria de fazer uma denúncia à GCM.",
      icon: Shield,
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      iconColor: "text-blue-500",
    },
    {
      title: "Polícia Militar",
      number: "55181",
      displayNumber: "181",
      message: "Olá, gostaria de fazer uma denúncia à Polícia Militar.",
      icon: Shield,
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
      iconColor: "text-red-500",
    },
    {
      title: "Denúncia Anônima",
      number: "5515981678810",
      displayNumber: "(15) 98167-8810",
      message: "Olá, gostaria de fazer uma denúncia anônima.",
      icon: AlertTriangle,
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20",
      iconColor: "text-primary",
    },
  ];

  const handleWhatsAppClick = (number: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${number}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-6 sm:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-4">
            Central de Denúncias
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg">
            Denuncie de forma segura via WhatsApp
          </p>
        </div>

        <div className="bg-card rounded-lg sm:rounded-xl shadow-lg border border-border p-4 sm:p-8 space-y-4 sm:space-y-6">
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className={`flex flex-col gap-3 p-4 sm:p-6 ${contact.bgColor} rounded-lg border ${contact.borderColor}`}
            >
              <div className="flex items-center gap-3">
                <contact.icon className={`w-8 h-8 sm:w-12 sm:h-12 ${contact.iconColor} flex-shrink-0`} />
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-foreground">
                    {contact.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold text-foreground text-sm sm:text-base">{contact.displayNumber}</span>
                  </div>
                </div>
              </div>
              <Button 
                onClick={() => handleWhatsAppClick(contact.number, contact.message)}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] active:bg-[#1DA851] text-white h-12"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enviar via WhatsApp
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplaintsSection;
