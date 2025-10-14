import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Droplet } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  latinName: string;
  description: string;
  benefits: string[];
  color: string;
}

const ProductCard = ({ image, name, latinName, description, benefits, color }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-card">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Color Indicator */}
        <div className="absolute top-4 right-4 flex items-center space-x-2 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-full">
          <Droplet className="h-4 w-4" style={{ color }} />
          <span className="text-xs font-medium">{color === '#F5DEB3' ? 'Light' : color === '#FFD700' ? 'Golden' : 'Dark'}</span>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
          {name}
        </CardTitle>
        <CardDescription className="italic text-sm">{latinName}</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{description}</p>
        
        {/* Benefits */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-foreground">Beneficii Cheie:</p>
          <ul className="space-y-1">
            {benefits.slice(0, 2).map((benefit, index) => (
              <li key={index} className="text-xs text-muted-foreground flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
          <Link to="/contact">Solicitați Ofertă</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
