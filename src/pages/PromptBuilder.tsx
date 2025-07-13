import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Wand2, Copy, Save, PlayCircle } from "lucide-react";

const PromptBuilder = () => {
  const promptTemplates = [
    { name: "Blog Post", category: "Content", description: "Create engaging blog posts" },
    { name: "Product Description", category: "E-commerce", description: "Compelling product descriptions" },
    { name: "Social Media", category: "Marketing", description: "Social media content creation" },
    { name: "Email Subject", category: "Email", description: "Catchy email subject lines" },
  ];

  const promptVariables = [
    "{{topic}}", "{{audience}}", "{{tone}}", "{{length}}", "{{keywords}}", "{{brand_voice}}"
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Prompt Builder</h1>
          <p className="text-muted-foreground mt-2">
            Create and customize AI prompts for consistent, high-quality content generation.
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Save className="mr-2 h-4 w-4" />
            Save Template
          </Button>
          <Button className="bg-gradient-primary">
            <PlayCircle className="mr-2 h-4 w-4" />
            Test Prompt
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Prompt Builder */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">Build Your Prompt</h2>
              <p className="text-muted-foreground">Craft detailed instructions for AI content generation</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Content Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blog">Blog Post</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="product">Product Description</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Tone</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="authoritative">Authoritative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Prompt Instructions</label>
                <Textarea
                  placeholder="Enter your detailed prompt instructions here. Use variables like {{topic}} and {{audience}} to make your prompts dynamic..."
                  className="min-h-32"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Available Variables</label>
                <div className="flex flex-wrap gap-2">
                  {promptVariables.map((variable, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {variable}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Preview */}
          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">Prompt Preview</h3>
                <Button variant="outline" size="sm">
                  <Copy className="mr-2 h-3 w-3" />
                  Copy
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm text-foreground font-mono">
                  Create a &#123;&#123;tone&#125;&#125; &#123;&#123;content_type&#125;&#125; about &#123;&#123;topic&#125;&#125; for &#123;&#123;audience&#125;&#125;. 
                  The content should be &#123;&#123;length&#125;&#125; and incorporate the following keywords: &#123;&#123;keywords&#125;&#125;.
                  Use our &#123;&#123;brand_voice&#125;&#125; brand voice throughout the content.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Templates Sidebar */}
        <div className="space-y-6">
          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Prompt Templates</h3>
              <p className="text-muted-foreground text-sm">Start with proven templates</p>
            </div>
            <div className="p-4 space-y-3">
              {promptTemplates.map((template, index) => (
                <div 
                  key={index} 
                  className="p-3 border border-border rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">{template.name}</h4>
                    <Badge variant="outline" className="text-xs">{template.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                  <Button variant="ghost" size="sm" className="mt-2 w-full">
                    <Wand2 className="mr-2 h-3 w-3" />
                    Use Template
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PromptBuilder;