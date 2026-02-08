import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, link = "/contact" }: ServiceCardProps) => (
  <div className="glass-card-hover p-6 flex flex-col h-full group">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{description}</p>
    <Link
      to={link}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
    >
      Book this service <ArrowRight className="w-4 h-4" />
    </Link>
  </div>
);

export default ServiceCard;
