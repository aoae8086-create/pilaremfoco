import { Clock, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  time: string;
  views: string;
}

const NewsCard = ({ title, excerpt, category, image, time, views }: NewsCardProps) => {
  const handleClick = () => {
    console.log("Abrindo notícia:", title);
  };

  return (
    <article className="group cursor-pointer" onClick={handleClick}>
      <div className="bg-news-card rounded-xl overflow-hidden border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-3 left-3 bg-accent/90 text-accent-foreground border-0">
            {category}
          </Badge>
        </div>
        
        <div className="p-5 space-y-3">
          <h3 className="font-bold text-lg leading-tight line-clamp-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{views}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
