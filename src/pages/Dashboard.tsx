import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, TrendingUp, FileText, Clock, Users } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { label: "Content Generated", value: "1,247", icon: FileText, color: "text-primary" },
    { label: "Active Projects", value: "24", icon: TrendingUp, color: "text-success" },
    { label: "Team Members", value: "8", icon: Users, color: "text-info" },
    { label: "Hours Saved", value: "156", icon: Clock, color: "text-warning" },
  ];

  const recentProjects = [
    { name: "Blog Post Series", type: "Article", status: "In Progress", updatedAt: "2 hours ago" },
    { name: "Social Media Campaign", type: "Social", status: "Completed", updatedAt: "4 hours ago" },
    { name: "Product Description", type: "E-commerce", status: "Draft", updatedAt: "1 day ago" },
    { name: "Email Newsletter", type: "Email", status: "In Progress", updatedAt: "2 days ago" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back! Here's an overview of your AI content generation activity.
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-secondary ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Recent Projects */}
      <Card className="shadow-soft">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">Recent Projects</h2>
          <p className="text-muted-foreground">Keep track of your latest content generation projects</p>
        </div>
        <div className="divide-y divide-border">
          {recentProjects.map((project, index) => (
            <div key={index} className="p-6 flex items-center justify-between hover:bg-secondary/50 transition-colors">
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{project.name}</h3>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-sm text-muted-foreground">{project.type}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'Completed' ? 'bg-success/10 text-success' :
                    project.status === 'In Progress' ? 'bg-primary/10 text-primary' :
                    'bg-warning/10 text-warning'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                {project.updatedAt}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;