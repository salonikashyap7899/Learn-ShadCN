"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
import { Switch } from "@/components/ui/Switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function SettingsPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [theme, setTheme] = useState("light");

  const handleProfileSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    console.log("Profile updated");
  };

  const handlePasswordChange = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    console.log("Password changed");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleProfileSubmit} className="space-y-4 cursor-pointer">
            <div> 
              <Label htmlFor="name"  className="pb-3"> Name</Label>
              <Input id="name" placeholder="Enter your name" required />
            </div>
            <div>
              <Label htmlFor="email"  className="pb-3">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <Button type="submit" className="cursor-pointer">Update Profile</Button>
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
              <Label htmlFor="current-password" className="pb-3">Current Password</Label>
              <Input id="current-password" type="password" required />
            </div>
            <div>
              <Label htmlFor="new-password" className="pb-3">New Password</Label>
              <Input id="new-password" type="password" required />
            </div>
            <Button type="submit" className="cursor-pointer">Change Password</Button>
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
              onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
