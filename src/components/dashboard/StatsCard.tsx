import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down" | "neutral";
  color: "primary" | "secondary" | "water" | "agro";
  index?: number;
}

export function StatsCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  trend, 
  color,
  index = 0 
}: StatsCardProps) {
  const colorClasses = {
    primary: "from-primary to-primary/80",
    secondary: "from-secondary to-secondary/80", 
    water: "from-water-blue to-water-blue/80",
    agro: "from-agro-green to-agro-green/80"
  };

  const trendColor = {
    up: "text-green-600",
    down: "text-red-600", 
    neutral: "text-muted-foreground"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
    >
      <Card className="relative overflow-hidden group hover:shadow-card-hover transition-all duration-300 border-0 shadow-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">{title}</p>
              <p className="text-3xl font-bold text-foreground">{value}</p>
              <p className={`text-sm font-medium ${trendColor[trend]}`}>
                {change}
              </p>
            </div>
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}