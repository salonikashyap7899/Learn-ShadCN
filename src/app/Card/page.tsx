"use client";

import { useState } from "react";
import {
  Input
} from "@/components/ui/input";
import {
  Label
} from "@/components/ui/label";
import {
  Switch
} from "@/components/ui/switch";
import {
  Button
} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export default function SettingsPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [theme, setTheme] = useState("light");
  const [selectedModule, setSelectedModule] = useState("jobs");

  const handleProfileSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Profile updated");
  };

  const handlePasswordChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Password changed");
  };

  // UI for jobs module
  const renderJobFields = () => (
    <>
      <div>
        <Label htmlFor="device-type">Device Type</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Device Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Laptop">Laptop</SelectItem>
            <SelectItem value="Phone">Phone</SelectItem>
            <SelectItem value="Tablet">Tablet</SelectItem>
            <SelectItem value="Desktop">Desktop</SelectItem>
            <SelectItem value="Monitor">Monitor</SelectItem>
            <SelectItem value="CCTV">CCTV</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="device-brand">Device Brand</Label>
        <Input id="device-brand" placeholder="Enter device brand" />
      </div>
      <div>
        <Label htmlFor="device-password">Device Password</Label>
        <Input id="device-password" placeholder="Enter device password" />
      </div>
      <div>
        <Label htmlFor="serial-number">Serial Number</Label>
        <Input id="serial-number" placeholder="Enter serial number" />
      </div>
      <div>
        <Label htmlFor="repair-status">Repair Status</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Repair Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="Done">Done</SelectItem>
            <SelectItem value="Hold">Hold</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="warranty">Warranty Period</Label>
        <Input id="warranty" placeholder="Enter warranty period" />
      </div>
    </>
  );

  // UI for inventory module
  const renderInventoryFields = () => (
    <div>
      <Label htmlFor="compatible-brands">Compatible Brands</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select Brand" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="HD">HD</SelectItem>
          <SelectItem value="Dell">Dell</SelectItem>
          <SelectItem value="HCL">HCL</SelectItem>
          <SelectItem value="Asus">Asus</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );

  // UI for customer module
  const renderCustomerFields = () => (
    <>
      <div>
        <Label htmlFor="customer-name">Customer Name</Label>
        <Input id="customer-name" placeholder="Enter customer name" />
      </div>
      <div>
        <Label htmlFor="company-name">Company Name</Label>
        <Input id="company-name" placeholder="Enter company name" />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" placeholder="Enter phone number" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="Enter email" />
      </div>
      <div>
        <Label htmlFor="address">Address</Label>
        <Input id="address" placeholder="Enter address" />
      </div>
    </>
  );

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleProfileSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>

            {/* Module Dropdown */}
            <div>
              <Label htmlFor="module">Select Module</Label>
              <Select
                onValueChange={(val) => setSelectedModule(val)}
                defaultValue="jobs"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select module" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jobs">Jobs</SelectItem>
                  <SelectItem value="inventory">Inventory</SelectItem>
                  <SelectItem value="customer">Customer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Render fields conditionally */}
            {selectedModule === "jobs" && renderJobFields()}
            {selectedModule === "inventory" && renderInventoryFields()}
            {selectedModule === "customer" && renderCustomerFields()}

            <Button type="submit">Update Profile</Button>
          </form>
        </CardContent>
      </Card>

      {/* Password Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" required />
            </div>
            <div>
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" required />
            </div>
            <Button type="submit">Change Password</Button>
          </form>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">Email Notifications</Label>
            <Switch
              id="notifications"
              checked={notificationsEnabled}
              onCheckedChange={setNotificationsEnabled}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="theme">Dark Mode</Label>
            <Switch
              id="theme"
              checked={theme === "dark"}
              onCheckedChange={() =>
                setTheme(theme === "light" ? "dark" : "light")
              }
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
