import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Download, Eye, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

const bookingsData = [
  { id: "TK001", name: "Sarah Johnson", type: "Water Park", date: "2024-01-15", amount: "$45", status: "confirmed", email: "sarah@email.com", guests: 2 },
  { id: "TK002", name: "Mike Chen", type: "Combo Package", date: "2024-01-15", amount: "$120", status: "confirmed", email: "mike@email.com", guests: 4 },
  { id: "TK003", name: "Emma Davis", type: "Agro Tour", date: "2024-01-14", amount: "$30", status: "cancelled", email: "emma@email.com", guests: 1 },
  { id: "TK004", name: "Robert Wilson", type: "Water Park", date: "2024-01-14", amount: "$90", status: "confirmed", email: "robert@email.com", guests: 3 },
  { id: "TK005", name: "Lisa Anderson", type: "Combo Package", date: "2024-01-13", amount: "$160", status: "confirmed", email: "lisa@email.com", guests: 5 },
  { id: "TK006", name: "James Brown", type: "Agro Tour", date: "2024-01-13", amount: "$60", status: "confirmed", email: "james@email.com", guests: 2 },
  { id: "TK007", name: "Maria Garcia", type: "Water Park", date: "2024-01-12", amount: "$45", status: "cancelled", email: "maria@email.com", guests: 1 },
  { id: "TK008", name: "David Miller", type: "Combo Package", date: "2024-01-12", amount: "$200", status: "confirmed", email: "david@email.com", guests: 6 }
];

export default function TicketBookings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredBookings = bookingsData.filter(booking => {
    const matchesSearch = booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter;
    const matchesType = typeFilter === "all" || booking.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusBadge = (status: string) => {
    if (status === "confirmed") {
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100"><CheckCircle className="w-3 h-3 mr-1" />Confirmed</Badge>;
    }
    return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" />Cancelled</Badge>;
  };

  const getTypeBadge = (type: string) => {
    const colors = {
      "Water Park": "bg-water-light text-water-blue border-water-blue/20",
      "Agro Tour": "bg-agro-light text-agro-green border-agro-green/20",
      "Combo Package": "bg-purple-100 text-purple-800 border-purple-200"
    };
    return <Badge className={colors[type as keyof typeof colors] || ""}>{type}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold text-foreground">Ticket Bookings</h1>
        <p className="text-muted-foreground">Manage and track all visitor bookings</p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by name or booking ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Water Park">Water Park</SelectItem>
                  <SelectItem value="Agro Tour">Agro Tour</SelectItem>
                  <SelectItem value="Combo Package">Combo Package</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Bookings Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>
              Showing {filteredBookings.length} of {bookingsData.length} bookings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Booking ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Guests</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBookings.map((booking, index) => (
                    <motion.tr
                      key={booking.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <TableCell className="font-medium">{booking.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{booking.name}</p>
                          <p className="text-sm text-muted-foreground">{booking.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>{getTypeBadge(booking.type)}</TableCell>
                      <TableCell>{booking.date}</TableCell>
                      <TableCell>{booking.guests}</TableCell>
                      <TableCell className="font-medium">{booking.amount}</TableCell>
                      <TableCell>{getStatusBadge(booking.status)}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Eye className="w-4 h-4" />
                          View
                        </Button>
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