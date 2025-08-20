import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Clock, DollarSign, Phone, Mail, MapPin, Settings as SettingsIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    parkName: "AquaAgro Water & Agro Park",
    contactEmail: "info@aquaagro.com",
    contactPhone: "+1 (555) 123-PARK",
    address: "123 Paradise Way, Sunshine Valley, CA 94542",
    openingHours: "9:00 AM - 6:00 PM",
    closingHours: "8:00 PM (Summer)",
    waterParkPrice: "45",
    agroTourPrice: "30",
    comboPackagePrice: "65",
    maxCapacity: "2000",
    description: "Experience the perfect blend of thrilling water adventures and peaceful agro tourism at AquaAgro Park.",
    
    // Feature toggles
    onlineBooking: true,
    mobileNotifications: true,
    weatherUpdates: true,
    maintenanceMode: false,
    dynamicPricing: false,
    groupDiscounts: true
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    toast({
      title: "Settings Updated",
      description: "Your park settings have been saved successfully.",
    });
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage park information and system preferences</p>
      </motion.div>

      {/* Park Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Park Information
            </CardTitle>
            <CardDescription>
              Basic information about your park that appears on bookings and communications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="parkName">Park Name</Label>
                <Input
                  id="parkName"
                  value={settings.parkName}
                  onChange={(e) => handleInputChange("parkName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxCapacity">Maximum Daily Capacity</Label>
                <Input
                  id="maxCapacity"
                  type="number"
                  value={settings.maxCapacity}
                  onChange={(e) => handleInputChange("maxCapacity", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Park Description</Label>
              <Textarea
                id="description"
                value={settings.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                value={settings.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                rows={2}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-agro-green" />
              Contact Information
            </CardTitle>
            <CardDescription>
              Contact details for customer inquiries and support
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contactEmail" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={settings.contactEmail}
                  onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPhone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number
                </Label>
                <Input
                  id="contactPhone"
                  value={settings.contactPhone}
                  onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Operating Hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-water-blue" />
              Operating Hours
            </CardTitle>
            <CardDescription>
              Set the park's daily operating schedule
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="openingHours">Regular Hours</Label>
                <Input
                  id="openingHours"
                  value={settings.openingHours}
                  onChange={(e) => handleInputChange("openingHours", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="closingHours">Extended Hours (Seasonal)</Label>
                <Input
                  id="closingHours"
                  value={settings.closingHours}
                  onChange={(e) => handleInputChange("closingHours", e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Pricing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-secondary" />
              Ticket Pricing
            </CardTitle>
            <CardDescription>
              Set base prices for different ticket types
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="waterParkPrice">Water Park Entry</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="waterParkPrice"
                    type="number"
                    value={settings.waterParkPrice}
                    onChange={(e) => handleInputChange("waterParkPrice", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="agroTourPrice">Agro Tour</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="agroTourPrice"
                    type="number"
                    value={settings.agroTourPrice}
                    onChange={(e) => handleInputChange("agroTourPrice", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="comboPackagePrice">Combo Package</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="comboPackagePrice"
                    type="number"
                    value={settings.comboPackagePrice}
                    onChange={(e) => handleInputChange("comboPackagePrice", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* System Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SettingsIcon className="w-5 h-5 text-primary" />
              System Preferences
            </CardTitle>
            <CardDescription>
              Configure system features and notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {[
                { key: "onlineBooking", label: "Online Booking System", description: "Allow customers to book tickets online" },
                { key: "mobileNotifications", label: "Mobile Notifications", description: "Send push notifications to mobile app users" },
                { key: "weatherUpdates", label: "Weather-based Updates", description: "Automatically update operating status based on weather" },
                { key: "groupDiscounts", label: "Group Discounts", description: "Enable automatic discounts for group bookings" },
                { key: "dynamicPricing", label: "Dynamic Pricing", description: "Adjust prices based on demand and occupancy" },
                { key: "maintenanceMode", label: "Maintenance Mode", description: "Temporarily disable new bookings for maintenance" },
              ].map((setting) => (
                <div key={setting.key} className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                  <div className="flex-1">
                    <h4 className="font-medium">{setting.label}</h4>
                    <p className="text-sm text-muted-foreground">{setting.description}</p>
                  </div>
                  <Switch
                    checked={settings[setting.key as keyof typeof settings] as boolean}
                    onCheckedChange={(checked) => handleInputChange(setting.key, checked)}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Save Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="flex justify-end"
      >
        <Button onClick={handleSave} className="gap-2 bg-gradient-to-r from-primary to-secondary">
          <Save className="w-4 h-4" />
          Save All Changes
        </Button>
      </motion.div>
    </div>
  );
}