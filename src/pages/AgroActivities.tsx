import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit3, Settings, Users, Clock, Leaf } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const agroActivitiesData = [
  {
    id: "AG001",
    name: "Tractor Safari Adventure",
    status: "open",
    capacity: 25,
    currentGuests: 18,
    duration: "45 mins",
    description: "Guided tractor ride through organic farms",
    nextTour: "2:30 PM",
    guide: "John Miller",
    image: "/api/placeholder/300/200"
  },
  {
    id: "AG002",
    name: "Pottery Workshop",
    status: "open", 
    capacity: 15,
    currentGuests: 8,
    duration: "60 mins",
    description: "Hands-on clay pottery making experience",
    nextTour: "3:00 PM",
    guide: "Sarah Johnson",
    image: "/api/placeholder/300/200"
  },
  {
    id: "AG003",
    name: "Animal Feeding Experience",
    status: "maintenance",
    capacity: 20,
    currentGuests: 0,
    duration: "30 mins",
    description: "Interactive feeding session with farm animals",
    nextTour: "Closed",
    guide: "Mike Chen",
    image: "/api/placeholder/300/200"
  },
  {
    id: "AG004",
    name: "Organic Garden Tour",
    status: "open",
    capacity: 30,
    currentGuests: 22,
    duration: "40 mins",
    description: "Educational walk through sustainable gardens",
    nextTour: "2:15 PM",
    guide: "Lisa Anderson",
    image: "/api/placeholder/300/200"
  },
  {
    id: "AG005",
    name: "Cheese Making Workshop",
    status: "open",
    capacity: 12,
    currentGuests: 5,
    duration: "90 mins",
    description: "Learn traditional cheese making techniques",
    nextTour: "4:00 PM", 
    guide: "Robert Wilson",
    image: "/api/placeholder/300/200"
  },
  {
    id: "AG006",
    name: "Horseback Riding",
    status: "open",
    capacity: 10,
    currentGuests: 6,
    duration: "50 mins",
    description: "Gentle horseback rides for all skill levels",
    nextTour: "2:45 PM",
    guide: "Emma Davis",
    image: "/api/placeholder/300/200"
  }
];

export default function AgroActivities() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredActivities = agroActivitiesData.filter(activity =>
    activity.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    if (status === "open") {
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100"><Leaf className="w-3 h-3 mr-1" />Active</Badge>;
    }
    return <Badge variant="destructive">Closed</Badge>;
  };

  const getCapacityColor = (current: number, max: number) => {
    const percentage = (current / max) * 100;
    if (percentage >= 80) return "text-red-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-green-600";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-between items-start"
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground">Agro Activities</h1>
          <p className="text-muted-foreground">Manage farm experiences and educational tours</p>
        </div>
        <Button className="gap-2 bg-gradient-to-r from-agro-green to-secondary">
          <Plus className="w-4 h-4" />
          Add New Activity
        </Button>
      </motion.div>

      {/* Search and Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-4 gap-6"
      >
        <div className="lg:col-span-3">
          <Input
            placeholder="Search agro activities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-agro-green">
                {agroActivitiesData.filter(a => a.status === "open").length}/{agroActivitiesData.length}
              </p>
              <p className="text-sm text-muted-foreground">Activities Open</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActivities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <Card className="h-full shadow-card hover:shadow-card-hover transition-all duration-300 group">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-agro-light to-agro-green/20 rounded-t-xl flex items-center justify-center">
                  <div className="text-6xl opacity-20">🌾</div>
                </div>
                <div className="absolute top-4 right-4">
                  {getStatusBadge(activity.status)}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{activity.name}</CardTitle>
                <CardDescription className="text-sm">{activity.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Participants */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Participants</span>
                  </div>
                  <span className={`text-sm font-medium ${getCapacityColor(activity.currentGuests, activity.capacity)}`}>
                    {activity.currentGuests}/{activity.capacity}
                  </span>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Duration</span>
                  </div>
                  <span className="text-sm font-medium">{activity.duration}</span>
                </div>

                {/* Next Tour */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Next Tour</span>
                  </div>
                  <span className="text-sm font-medium">{activity.nextTour}</span>
                </div>

                {/* Guide */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Guide</span>
                  </div>
                  <span className="text-sm font-medium">{activity.guide}</span>
                </div>

                {/* Capacity Bar */}
                <div className="space-y-2">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-agro-green to-secondary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(activity.currentGuests / activity.capacity) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-2">
                    <Edit3 className="w-4 h-4" />
                    Edit
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 gap-2"
                    disabled={activity.status === "maintenance"}
                  >
                    <Settings className="w-4 h-4" />
                    {activity.status === "maintenance" ? "Closed" : "Manage"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}