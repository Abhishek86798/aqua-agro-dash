import { motion } from "framer-motion";
import { Users, Ticket, DollarSign, Activity } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts";

const statsData = [
  {
    title: "Total Visitors Today",
    value: "1,247",
    change: "+12% from yesterday",
    icon: Users,
    trend: "up" as const,
    color: "primary" as const
  },
  {
    title: "Tickets Sold",
    value: "892",
    change: "+8% from yesterday", 
    icon: Ticket,
    trend: "up" as const,
    color: "water" as const
  },
  {
    title: "Revenue Today",
    value: "$15,420",
    change: "+15% from yesterday",
    icon: DollarSign,
    trend: "up" as const,
    color: "agro" as const
  },
  {
    title: "Active Rides",
    value: "24/28",
    change: "4 under maintenance",
    icon: Activity,
    trend: "neutral" as const,
    color: "secondary" as const
  }
];

const visitorData = [
  { name: "Mon", visitors: 850 },
  { name: "Tue", visitors: 920 },
  { name: "Wed", visitors: 780 },
  { name: "Thu", visitors: 1100 },
  { name: "Fri", visitors: 1350 },
  { name: "Sat", visitors: 1500 },
  { name: "Sun", visitors: 1247 }
];

const activityData = [
  { name: "Water Rides", value: 45, color: "#0ea5e9" },
  { name: "Agro Tours", value: 30, color: "#22c55e" },
  { name: "Combo Packages", value: 25, color: "#8b5cf6" }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening at AquaAgro Park today.</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={stat.title} {...stat} index={index} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Visitors Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardHeader>
              <CardTitle>Daily Visitors</CardTitle>
              <CardDescription>Visitor count for the last 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={visitorData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="visitors" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Activity Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardHeader>
              <CardTitle>Popular Activities</CardTitle>
              <CardDescription>Distribution of visitor preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={activityData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {activityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      >
        <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from around the park</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: "2 mins ago", event: "New combo package booking for family of 4", type: "booking" },
                { time: "15 mins ago", event: "Water slide #3 maintenance completed", type: "maintenance" },
                { time: "32 mins ago", event: "Agro tour guide Sarah started morning shift", type: "staff" },
                { time: "1 hour ago", event: "Peak visitor capacity reached - 1,500 guests", type: "milestone" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{activity.event}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}