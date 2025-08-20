import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit3, Settings, Users, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const waterRidesData = [
  {
    id: "WR001",
    name: "Tsunami Wave Pool",
    status: "open",
    capacity: 150,
    currentGuests: 89,
    waitTime: "5 mins",
    description: "Giant wave pool with artificial tsunami waves",
    maintenanceNext: "2024-01-20",
    image: "/api/placeholder/300/200"
  },
  {
    id: "WR002", 
    name: "Aqua Tornado Slide",
    status: "open",
    capacity: 20,
    currentGuests: 12,
    waitTime: "8 mins",
    description: "High-speed spiral water slide",
    maintenanceNext: "2024-01-18",
    image: "/api/placeholder/300/200"
  },
  {
    id: "WR003",
    name: "Lazy River Paradise",
    status: "maintenance",
    capacity: 100,
    currentGuests: 0,
    waitTime: "Closed",
    description: "Relaxing circular river with gentle current",
    maintenanceNext: "2024-01-16",
    image: "/api/placeholder/300/200"
  },
  {
    id: "WR004",
    name: "Kids Splash Zone",
    status: "open",
    capacity: 80,
    currentGuests: 45,
    waitTime: "No wait",
    description: "Interactive water playground for children",
    maintenanceNext: "2024-01-22",
    image: "/api/placeholder/300/200"
  },
  {
    id: "WR005",
    name: "Extreme Drop Slide",
    status: "open",
    capacity: 15,
    currentGuests: 8,
    waitTime: "12 mins",
    description: "Thrilling vertical drop water slide",
    maintenanceNext: "2024-01-19",
    image: "/api/placeholder/300/200"
  },
  {
    id: "WR006",
    name: "Family Raft Adventure",
    status: "maintenance",
    capacity: 30,
    currentGuests: 0,
    waitTime: "Closed",
    description: "Multi-person raft slide through winding course",
    maintenanceNext: "2024-01-17",
    image: "/api/placeholder/300/200"
  }
];

export default function WaterRides() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRides = waterRidesData.filter(ride =>
    ride.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    if (status === "open") {
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Open</Badge>;
    }
    return <Badge variant="destructive"><AlertCircle className="w-3 h-3 mr-1" />Maintenance</Badge>;
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
          <h1 className="text-3xl font-bold text-foreground">Water Rides</h1>
          <p className="text-muted-foreground">Manage water attractions and monitor status</p>
        </div>
        <Button className="gap-2 bg-gradient-to-r from-water-blue to-primary">
          <Plus className="w-4 h-4" />
          Add New Ride
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
            placeholder="Search water rides..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-water-blue">
                {waterRidesData.filter(r => r.status === "open").length}/{waterRidesData.length}
              </p>
              <p className="text-sm text-muted-foreground">Rides Open</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Rides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRides.map((ride, index) => (
          <motion.div
            key={ride.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <Card className="h-full shadow-card hover:shadow-card-hover transition-all duration-300 group">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-water-light to-water-blue/20 rounded-t-xl flex items-center justify-center">
                  <div className="text-6xl opacity-20">🌊</div>
                </div>
                <div className="absolute top-4 right-4">
                  {getStatusBadge(ride.status)}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{ride.name}</CardTitle>
                <CardDescription className="text-sm">{ride.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Capacity */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Capacity</span>
                  </div>
                  <span className={`text-sm font-medium ${getCapacityColor(ride.currentGuests, ride.capacity)}`}>
                    {ride.currentGuests}/{ride.capacity}
                  </span>
                </div>

                {/* Wait Time */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Wait Time</span>
                  </div>
                  <span className="text-sm font-medium">{ride.waitTime}</span>
                </div>

                {/* Next Maintenance */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Next Service</span>
                  </div>
                  <span className="text-sm font-medium">{ride.maintenanceNext}</span>
                </div>

                {/* Capacity Bar */}
                <div className="space-y-2">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-water-blue to-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(ride.currentGuests / ride.capacity) * 100}%` }}
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
                    disabled={ride.status === "maintenance"}
                  >
                    <Settings className="w-4 h-4" />
                    {ride.status === "maintenance" ? "In Service" : "Service"}
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