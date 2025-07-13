import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  Upload, 
  Save,
  Eye,
  EyeOff,
  Trash2
} from "lucide-react";

const UserSettings = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-2">
            Manage your account settings, preferences, and billing information.
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 max-w-2xl">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Picture */}
            <Card className="shadow-soft">
              <div className="p-6 border-b border-border">
                <h2 className="text-lg font-semibold text-foreground">Profile Picture</h2>
                <p className="text-muted-foreground text-sm">Update your profile photo</p>
              </div>
              <div className="p-6 text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload New Photo
                  </Button>
                  <Button variant="ghost" className="w-full text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Remove Photo
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  JPG, PNG or GIF. Max size 2MB.
                </p>
              </div>
            </Card>

            {/* Personal Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-soft">
                <div className="p-6 border-b border-border">
                  <h2 className="text-lg font-semibold text-foreground">Personal Information</h2>
                  <p className="text-muted-foreground text-sm">Update your personal details</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <Input defaultValue="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <Input defaultValue="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <Input type="email" defaultValue="john@company.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Job Title</label>
                    <Input placeholder="Marketing Manager" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                    <Input placeholder="Company Name" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
                    <Textarea 
                      placeholder="Tell us about yourself..."
                      className="min-h-24"
                    />
                  </div>
                </div>
              </Card>

              <Card className="shadow-soft">
                <div className="p-6 border-b border-border">
                  <h2 className="text-lg font-semibold text-foreground">Location & Timezone</h2>
                  <p className="text-muted-foreground text-sm">Set your location preferences</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Country</label>
                      <Select defaultValue="us">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Timezone</label>
                      <Select defaultValue="est">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                          <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                          <SelectItem value="cst">Central Time (CST)</SelectItem>
                          <SelectItem value="est">Eastern Time (EST)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Notification Preferences</h2>
              <p className="text-muted-foreground text-sm">Choose what notifications you want to receive</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium text-foreground">Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Content Generation Complete</p>
                      <p className="text-sm text-muted-foreground">Get notified when your AI content is ready</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Team Collaboration</p>
                      <p className="text-sm text-muted-foreground">Updates on shared projects and comments</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Weekly Summary</p>
                      <p className="text-sm text-muted-foreground">Your weekly content creation summary</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Product Updates</p>
                      <p className="text-sm text-muted-foreground">New features and improvements</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-foreground">Push Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Real-time Updates</p>
                      <p className="text-sm text-muted-foreground">Instant notifications for important events</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Mentions & Comments</p>
                      <p className="text-sm text-muted-foreground">When someone mentions you or comments</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">System Maintenance</p>
                      <p className="text-sm text-muted-foreground">Scheduled maintenance notifications</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-soft">
              <div className="p-6 border-b border-border">
                <h2 className="text-lg font-semibold text-foreground">Change Password</h2>
                <p className="text-muted-foreground text-sm">Update your account password</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Current Password</label>
                  <div className="relative">
                    <Input type="password" />
                    <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2 h-auto p-1">
                      <EyeOff className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">New Password</label>
                  <div className="relative">
                    <Input type="password" />
                    <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2 h-auto p-1">
                      <EyeOff className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Confirm New Password</label>
                  <div className="relative">
                    <Input type="password" />
                    <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2 h-auto p-1">
                      <EyeOff className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button className="w-full">Update Password</Button>
              </div>
            </Card>

            <Card className="shadow-soft">
              <div className="p-6 border-b border-border">
                <h2 className="text-lg font-semibold text-foreground">Two-Factor Authentication</h2>
                <p className="text-muted-foreground text-sm">Add an extra layer of security</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">Authenticator App</p>
                    <p className="text-sm text-muted-foreground">Use an app like Google Authenticator</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">SMS Verification</p>
                    <p className="text-sm text-muted-foreground">Receive codes via text message</p>
                  </div>
                  <Switch />
                </div>
                <Button variant="outline" className="w-full">
                  <Shield className="mr-2 h-4 w-4" />
                  View Recovery Codes
                </Button>
              </div>
            </Card>
          </div>

          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
              <p className="text-muted-foreground text-sm">Monitor your account activity</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">Login from Chrome</p>
                    <p className="text-sm text-muted-foreground">San Francisco, CA • 2 hours ago</p>
                  </div>
                  <span className="text-sm text-success">Current session</span>
                </div>
                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">Login from Safari</p>
                    <p className="text-sm text-muted-foreground">New York, NY • 1 day ago</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-destructive">
                    Revoke
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-soft">
              <div className="p-6 border-b border-border">
                <h2 className="text-lg font-semibold text-foreground">Current Plan</h2>
                <p className="text-muted-foreground text-sm">Manage your subscription</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground">Professional Plan</h3>
                  <p className="text-3xl font-bold text-primary mt-2">$29/month</p>
                  <p className="text-muted-foreground">Billed monthly</p>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Next billing date</span>
                    <span>Feb 15, 2024</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Content generated this month</span>
                    <span>847 / 2000</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">Change Plan</Button>
                  <Button variant="ghost" className="w-full text-destructive">Cancel Subscription</Button>
                </div>
              </div>
            </Card>

            <Card className="shadow-soft">
              <div className="p-6 border-b border-border">
                <h2 className="text-lg font-semibold text-foreground">Payment Method</h2>
                <p className="text-muted-foreground text-sm">Manage your payment information</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">•••• •••• •••• 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 12/26</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <Button variant="outline" className="w-full">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Add Payment Method
                </Button>
              </div>
            </Card>
          </div>

          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Billing History</h2>
              <p className="text-muted-foreground text-sm">Download your invoices</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr>
                    <th className="text-left p-4 font-medium text-foreground">Date</th>
                    <th className="text-left p-4 font-medium text-foreground">Description</th>
                    <th className="text-left p-4 font-medium text-foreground">Amount</th>
                    <th className="text-left p-4 font-medium text-foreground">Status</th>
                    <th className="text-left p-4 font-medium text-foreground">Invoice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 text-sm">Jan 15, 2024</td>
                    <td className="p-4 text-sm">Professional Plan - Monthly</td>
                    <td className="p-4 text-sm">$29.00</td>
                    <td className="p-4">
                      <span className="bg-success/10 text-success text-xs px-2 py-1 rounded-full">
                        Paid
                      </span>
                    </td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm">Download</Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Dec 15, 2023</td>
                    <td className="p-4 text-sm">Professional Plan - Monthly</td>
                    <td className="p-4 text-sm">$29.00</td>
                    <td className="p-4">
                      <span className="bg-success/10 text-success text-xs px-2 py-1 rounded-full">
                        Paid
                      </span>
                    </td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm">Download</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-soft">
              <div className="p-6 border-b border-border">
                <h2 className="text-lg font-semibold text-foreground">Content Preferences</h2>
                <p className="text-muted-foreground text-sm">Set your default content settings</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Default Content Tone</label>
                  <Select defaultValue="professional">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="authoritative">Authoritative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Default Language</label>
                  <Select defaultValue="english">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Auto-save Content</label>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Automatically save drafts every 30 seconds</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="shadow-soft">
              <div className="p-6 border-b border-border">
                <h2 className="text-lg font-semibold text-foreground">Interface Settings</h2>
                <p className="text-muted-foreground text-sm">Customize your workspace</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Theme</label>
                  <Select defaultValue="light">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Editor Font Size</label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Show Tips</label>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Display helpful tips and guides</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="shadow-soft border-destructive/20">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-destructive">Danger Zone</h2>
              <p className="text-muted-foreground text-sm">Irreversible and destructive actions</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Delete Account</p>
                  <p className="text-sm text-muted-foreground">
                    Permanently delete your account and all associated data
                  </p>
                </div>
                <Button variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Account
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserSettings;