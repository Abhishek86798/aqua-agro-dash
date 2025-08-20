import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CalendarIcon, Plus, Minus, Waves, Tractor, Star, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-booking.jpg";

// Mock ticket prices
const ticketPrices = {
  "water-park": { adult: 25, child: 15 },
  "agro-tour": { adult: 20, child: 12 },
  "combo": { adult: 40, child: 25 }
};

const ticketTypes = [
  {
    id: "water-park",
    name: "Water Park Only",
    description: "Access to all water rides and pools",
    icon: Waves,
    color: "water-blue"
  },
  {
    id: "agro-tour",
    name: "Agro Tour Only", 
    description: "Farm activities and animal feeding",
    icon: Tractor,
    color: "agro-green"
  },
  {
    id: "combo",
    name: "Combo Package",
    description: "Full access to water park + agro activities",
    icon: Star,
    color: "primary"
  }
];

export default function TicketBookings() {
  const [ticketType, setTicketType] = useState("");
  const [date, setDate] = useState<Date>();
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const totalPrice = ticketType && ticketPrices[ticketType as keyof typeof ticketPrices]
    ? (adults * ticketPrices[ticketType as keyof typeof ticketPrices].adult) + 
      (children * ticketPrices[ticketType as keyof typeof ticketPrices].child)
    : 0;

  const handleBookNow = () => {
    setShowBookingDialog(true);
    setTimeout(() => {
      setBookingSuccess(true);
    }, 1000);
  };

  const resetForm = () => {
    setTicketType("");
    setDate(undefined);
    setAdults(1);
    setChildren(0);
    setShowBookingDialog(false);
    setBookingSuccess(false);
  };

  const Counter = ({ label, value, onChange, min = 0 }: { 
    label: string; 
    value: number; 
    onChange: (value: number) => void;
    min?: number;
  }) => (
    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
      <Label className="font-medium">{label}</Label>
      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-8 w-8 p-0 rounded-full"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center font-semibold">{value}</span>
        <Button
          type="button"
          variant="outline" 
          size="sm"
          className="h-8 w-8 p-0 rounded-full"
          onClick={() => onChange(value + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[400px] rounded-2xl overflow-hidden mb-8"
      >
        <img 
          src={heroImage} 
          alt="Water & Agro Park" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-water-blue/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-white space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold"
            >
              Book Your Adventure
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl md:text-2xl text-white/90"
            >
              Experience the perfect blend of water fun and farm life
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Booking Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="shadow-xl border-0 rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-water-blue/5 pb-8">
            <CardTitle className="text-2xl text-center">Book Your Tickets</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            {/* Ticket Type Selection */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Choose Your Experience</Label>
              <div className="grid gap-4">
                {ticketTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <motion.div
                      key={type.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Card 
                        className={cn(
                          "cursor-pointer transition-all duration-200 hover:shadow-lg rounded-xl",
                          ticketType === type.id 
                            ? "ring-2 ring-primary bg-primary/5" 
                            : "hover:bg-muted/30"
                        )}
                        onClick={() => setTicketType(type.id)}
                      >
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className={cn(
                            "p-3 rounded-xl",
                            type.id === "water-park" && "bg-water-light text-water-blue",
                            type.id === "agro-tour" && "bg-agro-light text-agro-green", 
                            type.id === "combo" && "bg-primary/10 text-primary"
                          )}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{type.name}</h3>
                            <p className="text-sm text-muted-foreground">{type.description}</p>
                          </div>
                          {ticketType === type.id && ticketPrices[type.id as keyof typeof ticketPrices] && (
                            <div className="text-right">
                              <div className="text-sm text-muted-foreground">Adult: ${ticketPrices[type.id as keyof typeof ticketPrices].adult}</div>
                              <div className="text-sm text-muted-foreground">Child: ${ticketPrices[type.id as keyof typeof ticketPrices].child}</div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Select Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-12 rounded-xl",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Guest Count */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Number of Guests</Label>
              <div className="space-y-3">
                <Counter
                  label="Adults (13+ years)"
                  value={adults}
                  onChange={setAdults}
                  min={1}
                />
                <Counter
                  label="Children (3-12 years)"
                  value={children}
                  onChange={setChildren}
                />
              </div>
            </div>

            {/* Price Summary */}
            {ticketType && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-primary/5 to-water-blue/5 p-6 rounded-xl"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total Price</span>
                  <span className="text-3xl font-bold text-primary">${totalPrice}</span>
                </div>
                {ticketPrices[ticketType as keyof typeof ticketPrices] && (
                  <div className="text-sm text-muted-foreground space-y-1">
                    {adults > 0 && (
                      <div className="flex justify-between">
                        <span>{adults} Adult{adults > 1 ? 's' : ''} × ${ticketPrices[ticketType as keyof typeof ticketPrices].adult}</span>
                        <span>${adults * ticketPrices[ticketType as keyof typeof ticketPrices].adult}</span>
                      </div>
                    )}
                    {children > 0 && (
                      <div className="flex justify-between">
                        <span>{children} Child{children > 1 ? 'ren' : ''} × ${ticketPrices[ticketType as keyof typeof ticketPrices].child}</span>
                        <span>${children * ticketPrices[ticketType as keyof typeof ticketPrices].child}</span>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )}

            {/* Book Now Button */}
            <Button
              onClick={handleBookNow}
              disabled={!ticketType || !date || totalPrice === 0}
              className="w-full h-12 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary to-water-blue hover:from-primary/90 hover:to-water-blue/90 transition-all duration-300"
            >
              Book Now - ${totalPrice}
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Booking Success Dialog */}
      <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
        <DialogContent className="max-w-md rounded-2xl">
          <DialogHeader className="text-center space-y-4">
            {!bookingSuccess ? (
              <>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
                  />
                </div>
                <DialogTitle>Processing Your Booking...</DialogTitle>
                <DialogDescription>
                  Please wait while we confirm your reservation.
                </DialogDescription>
              </>
            ) : (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
                >
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <DialogTitle className="text-green-700">Booking Confirmed!</DialogTitle>
                  <DialogDescription className="space-y-4">
                    <p>Your tickets have been successfully booked.</p>
                    <div className="bg-muted/50 p-4 rounded-xl text-left space-y-2">
                      <div className="flex justify-between">
                        <span>Booking ID:</span>
                        <span className="font-mono">BK{Math.random().toString().substr(2, 6)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span>{date && format(date, "PPP")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Guests:</span>
                        <span>{adults + children} ({adults} adults, {children} children)</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>${totalPrice}</span>
                      </div>
                    </div>
                    <p className="text-sm">A confirmation email has been sent to your address.</p>
                  </DialogDescription>
                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" onClick={resetForm} className="flex-1">
                      Book Another
                    </Button>
                    <Button onClick={() => setShowBookingDialog(false)} className="flex-1">
                      Done
                    </Button>
                  </div>
                </motion.div>
              </>
            )}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}