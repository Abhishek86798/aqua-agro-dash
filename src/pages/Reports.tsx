import { motion } from "framer-motion";
import { Download, TrendingUp, Users, DollarSign, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const revenueData = [
  { month: "Jan", revenue: 85000, visitors: 2400 },
  { month: "Feb", revenue: 92000, visitors: 2650 },
  { month: "Mar", revenue: 78000, visitors: 2200 },
  { month: "Apr", revenue: 108000, visitors: 3100 },
  { month: "May", revenue: 125000, visitors: 3600 },
  { month: "Jun", revenue: 142000, visitors: 4100 },
  { month: "Jul", revenue: 158000, visitors: 4500 },
  { month: "Aug", revenue: 155000, visitors: 4400 },
  { month: "Sep", revenue: 135000, visitors: 3800 },
  { month: "Oct", revenue: 118000, visitors: 3300 },
  { month: "Nov", revenue: 98000, visitors: 2800 },
  { month: "Dec", revenue: 112000, visitors: 3200 }
];

const demographicsData = [
  { name: "Families (25-45)", value: 45, color: "#0ea5e9" },
  { name: "Young Adults (18-30)", value: 30, color: "#22c55e" },
  { name: "Seniors (60+)", value: 15, color: "#8b5cf6" },
  { name: "Teenagers (13-17)", value: 10, color: "#f59e0b" }
];

const topActivitiesData = [
  { name: "Tsunami Wave Pool", visitors: 1250, revenue: 18750 },
  { name: "Tractor Safari", visitors: 980, revenue: 14700 },
  { name: "Aqua Tornado Slide", visitors: 850, revenue: 12750 },
  { name: "Pottery Workshop", visitors: 720, revenue: 10800 },
  { name: "Organic Garden Tour", visitors: 650, revenue: 9750 },
  { name: "Kids Splash Zone", visitors: 580, revenue: 8700 }
];

export default function Reports() {
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
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground">Comprehensive insights into park performance</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="yearly">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Last Week</SelectItem>
              <SelectItem value="monthly">Last Month</SelectItem>
              <SelectItem value="yearly">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button className="gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <p className="text-3xl font-bold text-foreground">$1.4M</p>
                <p className="text-sm text-green-600 font-medium">+12% vs last year</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Visitors</p>
                <p className="text-3xl font-bold text-foreground">41.2K</p>
                <p className="text-sm text-green-600 font-medium">+8% vs last year</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-water-blue to-water-blue/80 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Visit Duration</p>
                <p className="text-3xl font-bold text-foreground">4.2h</p>
                <p className="text-sm text-green-600 font-medium">+15min vs last year</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-agro-green to-agro-green/80 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Customer Satisfaction</p>
                <p className="text-3xl font-bold text-foreground">4.8/5</p>
                <p className="text-sm text-green-600 font-medium">+0.2 vs last year</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Revenue & Visitors Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
          <CardHeader>
            <CardTitle>Revenue & Visitor Trends</CardTitle>
            <CardDescription>Monthly revenue and visitor count for the past year</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 6 }}
                  name="Revenue ($)"
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="visitors" 
                  stroke="hsl(var(--agro-green))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--agro-green))', strokeWidth: 2, r: 6 }}
                  name="Visitors"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Demographics & Top Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visitor Demographics */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardHeader>
              <CardTitle>Visitor Demographics</CardTitle>
              <CardDescription>Age group distribution of park visitors</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={demographicsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {demographicsData.map((entry, index) => (
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

        {/* Top Activities */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardHeader>
              <CardTitle>Top Performing Activities</CardTitle>
              <CardDescription>Most popular attractions by visitor count</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topActivitiesData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" width={120} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar 
                    dataKey="visitors" 
                    fill="hsl(var(--primary))"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Performance Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
          <CardHeader>
            <CardTitle>Performance Summary</CardTitle>
            <CardDescription>Key insights and trends for strategic planning</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-agro-green">🌟 Top Insights</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Summer months show 35% higher visitor rates</li>
                  <li>• Combo packages have 89% customer satisfaction</li>
                  <li>• Weekend visits average 2.3x weekday attendance</li>
                  <li>• Family groups spend 65% more than individuals</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-water-blue">📈 Growth Opportunities</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Expand pottery workshop capacity (+40% demand)</li>
                  <li>• Add evening hours for water attractions</li>
                  <li>• Introduce seasonal agro activities</li>
                  <li>• Develop corporate team-building packages</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">⚠️ Areas for Improvement</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Reduce average wait times by 15%</li>
                  <li>• Improve mobile app booking experience</li>
                  <li>• Enhance food service quality ratings</li>
                  <li>• Optimize staff scheduling during peak hours</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}