import NewsCard from "./NewsCard";

const newsData = [
  {
    title: "Inteligência Artificial revoluciona setor de saúde no Brasil",
    excerpt: "Hospitais implementam sistemas de IA para diagnósticos mais precisos e rápidos, melhorando atendimento aos pacientes.",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    time: "há 3 horas",
    views: "1.2k"
  },
  {
    title: "Mercado financeiro reage positivamente a novas medidas econômicas",
    excerpt: "Bolsa de valores registra alta após anúncio de pacote de estímulo do governo federal.",
    category: "Economia",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    time: "há 5 horas",
    views: "2.8k"
  },
  {
    title: "Time nacional conquista título em campeonato internacional",
    excerpt: "Equipe brasileira supera adversários e traz troféu inédito para o país.",
    category: "Esportes",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&q=80",
    time: "há 6 horas",
    views: "3.5k"
  },
  {
    title: "Nova política ambiental promete reduzir emissões em 40%",
    excerpt: "Governo anuncia programa ambicioso de combate às mudanças climáticas com metas até 2030.",
    category: "Política",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&q=80",
    time: "há 8 horas",
    views: "1.9k"
  },
  {
    title: "Festival de cinema nacional bate recorde de público",
    excerpt: "Evento cultural atrai milhares de visitantes e destaca produções independentes brasileiras.",
    category: "Cultura",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80",
    time: "há 10 horas",
    views: "890"
  },
  {
    title: "Avanços em energia renovável prometem futuro sustentável",
    excerpt: "Investimentos em solar e eólica crescem exponencialmente no último trimestre.",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    time: "há 12 horas",
    views: "1.5k"
  }
];

const NewsGrid = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-black mb-2">
          Últimas <span className="text-accent">Notícias</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-accent to-secondary rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </section>
  );
};

export default NewsGrid;
