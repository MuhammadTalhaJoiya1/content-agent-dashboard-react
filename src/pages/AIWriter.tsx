import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Wand2, Copy, Download, RefreshCw, Sparkles } from "lucide-react";

const AIWriter = () => {
  const contentTypes = [
    "Blog Post", "Article", "Social Media Post", "Email", "Product Description", 
    "Press Release", "Landing Page", "Ad Copy"
  ];

  const tones = [
    "Professional", "Casual", "Friendly", "Authoritative", "Playful", 
    "Persuasive", "Informative", "Conversational"
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Writer</h1>
          <p className="text-muted-foreground mt-2">
            Generate high-quality content with AI. Specify your requirements and let our AI craft compelling content for you.
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Content
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Content Configuration */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Content Settings</h2>
              <p className="text-muted-foreground text-sm">Configure your content parameters</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Content Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {contentTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase().replace(' ', '-')}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Tone of Voice</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    {tones.map((tone) => (
                      <SelectItem key={tone} value={tone.toLowerCase()}>
                        {tone}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Word Count: <span className="font-normal">500</span>
                </label>
                <Slider
                  defaultValue={[500]}
                  max={2000}
                  min={100}
                  step={50}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>100</span>
                  <span>2000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Target Audience</label>
                <Input placeholder="e.g., Small business owners" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Keywords</label>
                <Input placeholder="Enter keywords separated by commas" />
                <p className="text-xs text-muted-foreground mt-1">These will be naturally incorporated into the content</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Language</label>
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
            </div>
          </Card>

          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Quick Actions</h2>
            </div>
            <div className="p-6 space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <RefreshCw className="mr-2 h-4 w-4" />
                Regenerate Content
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Copy className="mr-2 h-4 w-4" />
                Copy to Clipboard
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                Export as Document
              </Button>
            </div>
          </Card>
        </div>

        {/* Content Input & Output */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Content Brief</h2>
              <p className="text-muted-foreground text-sm">Provide details about the content you want to create</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Topic/Subject</label>
                <Input 
                  placeholder="e.g., 'How to improve customer retention for SaaS businesses'"
                  className="text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Additional Context</label>
                <Textarea 
                  placeholder="Provide any additional context, specific points to cover, or style preferences..."
                  className="min-h-32"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Include/Exclude</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Must include..." className="mb-2" />
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-xs">Statistics</Badge>
                      <Badge variant="secondary" className="text-xs">Case Studies</Badge>
                    </div>
                  </div>
                  <div>
                    <Input placeholder="Avoid mentioning..." className="mb-2" />
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="destructive" className="text-xs">Competitors</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Generated Content</h2>
                  <p className="text-muted-foreground text-sm">AI-generated content will appear here</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">Draft</Badge>
                  <Badge variant="secondary" className="text-xs">487 words</Badge>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-secondary/30 border border-border rounded-lg p-6 min-h-96">
                <div className="text-center text-muted-foreground py-20">
                  <Wand2 className="mx-auto h-12 w-12 mb-4 opacity-50" />
                  <p className="text-lg font-medium mb-2">Ready to Generate Content</p>
                  <p className="text-sm">Configure your settings and click "Generate Content" to start creating</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>Generated in 3.2s</span>
                  <span>•</span>
                  <span>Quality Score: 92%</span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <RefreshCw className="mr-2 h-3 w-3" />
                    Regenerate
                  </Button>
                  <Button size="sm">
                    <Copy className="mr-2 h-3 w-3" />
                    Copy
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIWriter;