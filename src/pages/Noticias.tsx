import NewsGrid from "@/components/NewsGrid";

const Noticias = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Central de Notícias</h1>
      <NewsGrid />
    </div>
  );
};

export default Noticias;
