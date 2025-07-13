import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Palette, 
  PenTool, 
  Search, 
  Image, 
  Mic, 
  History, 
  Users, 
  Settings 
} from "lucide-react";

const navigationItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/prompt", label: "Prompt Builder", icon: MessageSquare },
  { to: "/brand-style", label: "Brand Style", icon: Palette },
  { to: "/generate", label: "AI Writer", icon: PenTool },
  { to: "/seo", label: "SEO Optimizer", icon: Search },
  { to: "/image-video", label: "Image & Video", icon: Image },
  { to: "/voiceover", label: "Voiceover Studio", icon: Mic },
  { to: "/history", label: "Content History", icon: History },
  { to: "/team", label: "Team Collaboration", icon: Users },
  { to: "/settings", label: "Settings", icon: Settings },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-card border-r border-border h-screen sticky top-0">
      <div className="p-6">
        <h1 className="text-xl font-bold text-primary">
          AI Content Agent Factory
        </h1>
      </div>
      
      <nav className="px-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                }`
              }
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;