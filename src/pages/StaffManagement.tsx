import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search, Filter, Edit3, Trash2, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const staffData = [
  {
    id: "ST001",
    name: "John Miller",
    role: "Tractor Tour Guide",
    department: "Agro Activities",
    phone: "+1 (555) 123-4567",
    email: "john.miller@aquaagro.com",
    shift: "Morning (8AM - 4PM)",
    status: "active",
    joinDate: "2023-03-15",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: "ST002", 
    name: "Sarah Johnson",
    role: "Pottery Instructor",
    department: "Agro Activities",
    phone: "+1 (555) 234-5678",
    email: "sarah.johnson@aquaagro.com",
    shift: "Afternoon (12PM - 8PM)",
    status: "active",
    joinDate: "2022-08-20",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: "ST003",
    name: "Mike Chen",
    role: "Water Safety Lifeguard",
    department: "Water Rides",
    phone: "+1 (555) 345-6789",
    email: "mike.chen@aquaagro.com",
    shift: "Morning (8AM - 4PM)",
    status: "on-leave",
    joinDate: "2023-01-10",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: "ST004",
    name: "Lisa Anderson",
    role: "Garden Tour Guide",
    department: "Agro Activities",
    phone: "+1 (555) 456-7890",
    email: "lisa.anderson@aquaagro.com",
    shift: "Full Day (9AM - 6PM)",
    status: "active",
    joinDate: "2021-11-05",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: "ST005",
    name: "Robert Wilson",
    role: "Maintenance Technician",
    department: "Maintenance",
    phone: "+1 (555) 567-8901",
    email: "robert.wilson@aquaagro.com",
    shift: "Night (10PM - 6AM)",
    status: "active",
    joinDate: "2022-06-12",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: "ST006",
    name: "Emma Davis",
    role: "Riding Instructor",
    department: "Agro Activities",
    phone: "+1 (555) 678-9012",
    email: "emma.davis@aquaagro.com",
    shift: "Morning (8AM - 4PM)",
    status: "active",
    joinDate: "2023-09-18",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: "ST007",
    name: "David Miller",
    role: "Slide Operator",
    department: "Water Rides",
    phone: "+1 (555) 789-0123",
    email: "david.miller@aquaagro.com",
    shift: "Afternoon (12PM - 8PM)",
    status: "inactive",
    joinDate: "2022-04-25",
    avatar: "/api/placeholder/40/40"
  }
];

export default function StaffManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredStaff = staffData.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         staff.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter === "all" || staff.department === departmentFilter;
    const matchesStatus = statusFilter === "all" || staff.status === statusFilter;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { label: "Active", className: "bg-green-100 text-green-800 hover:bg-green-100" },
      "on-leave": { label: "On Leave", className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" },
      inactive: { label: "Inactive", className: "bg-red-100 text-red-800 hover:bg-red-100" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const getDepartmentColor = (department: string) => {
    const colors = {
      "Agro Activities": "text-agro-green",
      "Water Rides": "text-water-blue",
      "Maintenance": "text-orange-600",
      "Administration": "text-purple-600"
    };
    return colors[department as keyof typeof colors] || "text-muted-foreground";
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
          <h1 className="text-3xl font-bold text-foreground">Staff Management</h1>
          <p className="text-muted-foreground">Manage team members and their assignments</p>
        </div>
        <Button className="gap-2 bg-gradient-to-r from-primary to-secondary">
          <Plus className="w-4 h-4" />
          Add Staff Member
        </Button>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <Card className="shadow-card">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-foreground">{staffData.length}</p>
            <p className="text-sm text-muted-foreground">Total Staff</p>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600">
              {staffData.filter(s => s.status === "active").length}
            </p>
            <p className="text-sm text-muted-foreground">Active</p>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">
              {staffData.filter(s => s.status === "on-leave").length}
            </p>
            <p className="text-sm text-muted-foreground">On Leave</p>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-agro-green">
              {staffData.filter(s => s.department === "Agro Activities").length}
            </p>
            <p className="text-sm text-muted-foreground">Agro Team</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by name or role..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="Agro Activities">Agro Activities</SelectItem>
                  <SelectItem value="Water Rides">Water Rides</SelectItem>
                  <SelectItem value="Maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="on-leave">On Leave</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Staff Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>
              Showing {filteredStaff.length} of {staffData.length} staff members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Staff Member</TableHead>
                    <TableHead>Role & Department</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Shift</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStaff.map((staff, index) => (
                    <motion.tr
                      key={staff.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={staff.avatar} alt={staff.name} />
                            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-medium">
                              {staff.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{staff.name}</p>
                            <p className="text-sm text-muted-foreground">ID: {staff.id}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{staff.role}</p>
                          <p className={`text-sm font-medium ${getDepartmentColor(staff.department)}`}>
                            {staff.department}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="w-3 h-3" />
                            {staff.phone}
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="w-3 h-3" />
                            {staff.email}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{staff.shift}</span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(staff.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="gap-2">
                            <Edit3 className="w-4 h-4" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="gap-2 text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4" />
                            Remove
                          </Button>
                        </div>
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}