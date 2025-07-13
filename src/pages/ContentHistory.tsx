import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  Download, 
  Copy, 
  Eye, 
  Edit, 
  Trash2, 
  Star, 
  Calendar,
  FileText,
  Image,
  Video,
  Mic
} from "lucide-react";

const ContentHistory = () => {
  const contentItems = [
    {
      id: 1,
      title: "5 Ways to Boost Customer Engagement",
      type: "Blog Post",
      category: "Marketing",
      status: "Published",
      createdAt: "2024-01-15",
      wordCount: 1250,
      author: "AI Writer",
      isFavorite: true
    },
    {
      id: 2,
      title: "Product Launch Social Media Campaign",
      type: "Social Media",
      category: "Marketing",
      status: "Draft",
      createdAt: "2024-01-14",
      wordCount: 320,
      author: "AI Writer",
      isFavorite: false
    },
    {
      id: 3,
      title: "Modern Office Space Illustration",
      type: "Image",
      category: "Visual",
      status: "Completed",
      createdAt: "2024-01-13",
      wordCount: null,
      author: "Image Generator",
      isFavorite: false
    },
    {
      id: 4,
      title: "Welcome Message Voiceover",
      type: "Audio",
      category: "Audio",
      status: "Completed",
      createdAt: "2024-01-12",
      wordCount: 45,
      author: "Voice Studio",
      isFavorite: true
    },
    {
      id: 5,
      title: "Product Demo Video Script",
      type: "Video",
      category: "Marketing",
      status: "In Review",
      createdAt: "2024-01-11",
      wordCount: 890,
      author: "AI Writer",
      isFavorite: false
    }
  ];

  const categories = ["All", "Marketing", "Visual", "Audio", "Documentation", "Social Media"];
  const contentTypes = ["All", "Blog Post", "Social Media", "Image", "Video", "Audio", "Email"];
  const statusOptions = ["All", "Draft", "In Review", "Completed", "Published"];

  const getContentIcon = (type: string) => {
    switch (type) {
      case "Image": return <Image className="h-4 w-4" />;
      case "Video": return <Video className="h-4 w-4" />;
      case "Audio": return <Mic className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "bg-success/10 text-success";
      case "Completed": return "bg-primary/10 text-primary";
      case "In Review": return "bg-warning/10 text-warning";
      case "Draft": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Content History</h1>
          <p className="text-muted-foreground mt-2">
            Browse, search, and manage all your AI-generated content in one place.
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Download className="mr-2 h-4 w-4" />
          Export All
        </Button>
      </div>

      {/* Filters */}
      <Card className="shadow-soft">
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-1 min-w-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search content by title, type, or keywords..."
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {contentTypes.map(type => (
                    <SelectItem key={type} value={type.toLowerCase().replace(' ', '-')}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map(status => (
                    <SelectItem key={status} value={status.toLowerCase().replace(' ', '-')}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Tabs defaultValue="grid" className="space-y-6">
        <TabsList>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.map((item) => (
              <Card key={item.id} className="shadow-soft hover:shadow-medium transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {getContentIcon(item.type)}
                      <Badge variant="outline" className="text-xs">
                        {item.type}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Star className={`h-4 w-4 ${item.isFavorite ? 'fill-warning text-warning' : ''}`} />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{item.category}</span>
                      <Badge className={`text-xs ${getStatusColor(item.status)}`}>
                        {item.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(item.createdAt).toLocaleDateString()}
                    </div>

                    {item.wordCount && (
                      <div className="text-sm text-muted-foreground">
                        {item.wordCount} words
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="mr-2 h-3 w-3" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Copy className="mr-2 h-3 w-3" />
                      Copy
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list" className="space-y-6">
          <Card className="shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr>
                    <th className="text-left p-4 font-medium text-foreground">Content</th>
                    <th className="text-left p-4 font-medium text-foreground">Type</th>
                    <th className="text-left p-4 font-medium text-foreground">Category</th>
                    <th className="text-left p-4 font-medium text-foreground">Status</th>
                    <th className="text-left p-4 font-medium text-foreground">Created</th>
                    <th className="text-left p-4 font-medium text-foreground">Words</th>
                    <th className="text-left p-4 font-medium text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {contentItems.map((item) => (
                    <tr key={item.id} className="hover:bg-secondary/50">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Star className={`h-4 w-4 ${item.isFavorite ? 'fill-warning text-warning' : ''}`} />
                          </Button>
                          <div>
                            <h4 className="font-medium text-foreground">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">by {item.author}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          {getContentIcon(item.type)}
                          <span className="text-sm">{item.type}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Badge className={`text-xs ${getStatusColor(item.status)}`}>
                          {item.status}
                        </Badge>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {item.wordCount || '-'}
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing 1-5 of 48 results
        </p>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Previous</Button>
          <Button variant="outline" size="sm">1</Button>
          <Button size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default ContentHistory;