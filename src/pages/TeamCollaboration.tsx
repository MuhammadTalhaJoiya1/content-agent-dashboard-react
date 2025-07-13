import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  UserPlus, 
  Crown, 
  Shield, 
  User, 
  Mail, 
  Calendar,
  MessageSquare,
  Share2,
  Settings,
  MoreHorizontal,
  Activity
} from "lucide-react";

const TeamCollaboration = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@company.com",
      role: "Admin",
      status: "Active",
      joinedDate: "2024-01-01",
      lastActive: "2 hours ago",
      avatar: "/placeholder.svg",
      projectsCount: 15,
      contentCreated: 42
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael@company.com",
      role: "Editor",
      status: "Active",
      joinedDate: "2024-01-05",
      lastActive: "1 day ago",
      avatar: "/placeholder.svg",
      projectsCount: 8,
      contentCreated: 23
    },
    {
      id: 3,
      name: "Emma Wilson",
      email: "emma@company.com",
      role: "Writer",
      status: "Active",
      joinedDate: "2024-01-10",
      lastActive: "3 hours ago",
      avatar: "/placeholder.svg",
      projectsCount: 12,
      contentCreated: 35
    },
    {
      id: 4,
      name: "David Rodriguez",
      email: "david@company.com",
      role: "Viewer",
      status: "Pending",
      joinedDate: "2024-01-15",
      lastActive: "Never",
      avatar: "/placeholder.svg",
      projectsCount: 0,
      contentCreated: 0
    }
  ];

  const sharedProjects = [
    {
      id: 1,
      name: "Q1 Marketing Campaign",
      description: "Complete marketing content for Q1 launch",
      members: 3,
      contentItems: 24,
      lastUpdated: "2 hours ago",
      status: "Active"
    },
    {
      id: 2,
      name: "Product Documentation",
      description: "User guides and help articles",
      members: 2,
      contentItems: 18,
      lastUpdated: "1 day ago",
      status: "Active"
    },
    {
      id: 3,
      name: "Social Media Assets",
      description: "Images and posts for social channels",
      members: 4,
      contentItems: 56,
      lastUpdated: "3 hours ago",
      status: "Active"
    }
  ];

  const recentActivity = [
    {
      user: "Sarah Johnson",
      action: "created",
      item: "Blog Post: AI in Marketing",
      time: "2 hours ago",
      type: "create"
    },
    {
      user: "Michael Chen",
      action: "commented on",
      item: "Product Launch Script",
      time: "4 hours ago",
      type: "comment"
    },
    {
      user: "Emma Wilson",
      action: "shared",
      item: "Brand Guidelines Document",
      time: "6 hours ago",
      type: "share"
    },
    {
      user: "Sarah Johnson",
      action: "invited",
      item: "David Rodriguez to team",
      time: "1 day ago",
      type: "invite"
    }
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Admin": return <Crown className="h-4 w-4 text-warning" />;
      case "Editor": return <Shield className="h-4 w-4 text-primary" />;
      default: return <User className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "Admin": return "bg-warning/10 text-warning";
      case "Editor": return "bg-primary/10 text-primary";
      case "Writer": return "bg-success/10 text-success";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-success/10 text-success" : "bg-warning/10 text-warning";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Team Collaboration</h1>
          <p className="text-muted-foreground mt-2">
            Manage your team members, shared projects, and collaborative content creation.
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <UserPlus className="mr-2 h-4 w-4" />
          Invite Member
        </Button>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Team Members</p>
              <p className="text-2xl font-bold text-foreground">{teamMembers.length}</p>
            </div>
            <Users className="h-8 w-8 text-primary" />
          </div>
        </Card>
        <Card className="p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Shared Projects</p>
              <p className="text-2xl font-bold text-foreground">{sharedProjects.length}</p>
            </div>
            <Share2 className="h-8 w-8 text-success" />
          </div>
        </Card>
        <Card className="p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Content</p>
              <p className="text-2xl font-bold text-foreground">98</p>
            </div>
            <MessageSquare className="h-8 w-8 text-info" />
          </div>
        </Card>
        <Card className="p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Today</p>
              <p className="text-2xl font-bold text-foreground">3</p>
            </div>
            <Activity className="h-8 w-8 text-warning" />
          </div>
        </Card>
      </div>

      <Tabs defaultValue="members" className="space-y-6">
        <TabsList>
          <TabsTrigger value="members">Team Members</TabsTrigger>
          <TabsTrigger value="projects">Shared Projects</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="members" className="space-y-6">
          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">Team Members</h2>
                <div className="flex space-x-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="writer">Writer</SelectItem>
                      <SelectItem value="viewer">Viewer</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Settings className="mr-2 h-4 w-4" />
                    Manage Permissions
                  </Button>
                </div>
              </div>
            </div>
            <div className="divide-y divide-border">
              {teamMembers.map((member) => (
                <div key={member.id} className="p-6 hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-foreground">{member.name}</h3>
                          {getRoleIcon(member.role)}
                        </div>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Mail className="h-3 w-3 mr-1" />
                            {member.email}
                          </span>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            Joined {new Date(member.joinedDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-xs text-muted-foreground">
                            {member.projectsCount} projects • {member.contentCreated} content items
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Last active: {member.lastActive}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Badge className={`text-xs ${getRoleBadgeColor(member.role)}`}>
                        {member.role}
                      </Badge>
                      <Badge className={`text-xs ${getStatusColor(member.status)}`}>
                        {member.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sharedProjects.map((project) => (
              <Card key={project.id} className="shadow-soft">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{project.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {project.members} members
                        </span>
                        <span className="flex items-center">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          {project.contentItems} items
                        </span>
                      </div>
                    </div>
                    <Badge className="bg-success/10 text-success text-xs">
                      {project.status}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      Updated {project.lastUpdated}
                    </span>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Button size="sm">Open</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="shadow-soft">
            <div className="p-6 text-center">
              <Share2 className="mx-auto h-12 w-12 text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Create New Project</h3>
              <p className="text-muted-foreground mb-4">
                Start a new collaborative project and invite team members to contribute.
              </p>
              <Button className="bg-gradient-primary">
                <UserPlus className="mr-2 h-4 w-4" />
                Create Project
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">Recent Team Activity</h2>
              <p className="text-muted-foreground">Stay updated with your team's latest actions</p>
            </div>
            <div className="divide-y divide-border">
              {recentActivity.map((activity, index) => (
                <div key={index} className="p-6 hover:bg-secondary/50 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'create' ? 'bg-success/10' :
                        activity.type === 'comment' ? 'bg-primary/10' :
                        activity.type === 'share' ? 'bg-info/10' : 'bg-warning/10'
                      }`}>
                        {activity.type === 'create' && <MessageSquare className="h-4 w-4 text-success" />}
                        {activity.type === 'comment' && <MessageSquare className="h-4 w-4 text-primary" />}
                        {activity.type === 'share' && <Share2 className="h-4 w-4 text-info" />}
                        {activity.type === 'invite' && <UserPlus className="h-4 w-4 text-warning" />}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">
                        <span className="font-medium">{activity.user}</span>
                        {' '}{activity.action}{' '}
                        <span className="font-medium">{activity.item}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TeamCollaboration;