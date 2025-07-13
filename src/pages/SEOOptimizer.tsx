import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, TrendingUp, Target, CheckCircle, AlertCircle, XCircle } from "lucide-react";

const SEOOptimizer = () => {
  const seoMetrics = [
    { label: "SEO Score", value: 78, max: 100, color: "bg-warning" },
    { label: "Readability", value: 85, max: 100, color: "bg-success" },
    { label: "Keyword Density", value: 2.3, max: 5, color: "bg-primary" },
    { label: "Content Length", value: 1250, max: 2000, color: "bg-info" },
  ];

  const seoChecks = [
    { item: "Title tag optimized", status: "pass", description: "Title is within 50-60 characters" },
    { item: "Meta description present", status: "pass", description: "Meta description is compelling and within limits" },
    { item: "H1 tag contains keyword", status: "warning", description: "Consider adding primary keyword to H1" },
    { item: "Image alt text", status: "fail", description: "2 images missing alt text" },
    { item: "Internal links", status: "pass", description: "Good internal linking structure" },
    { item: "External links", status: "warning", description: "Consider adding authoritative external links" },
  ];

  const keywordSuggestions = [
    { keyword: "content marketing", volume: "12K", difficulty: "Medium", cpc: "$2.30" },
    { keyword: "AI writing tools", volume: "8.5K", difficulty: "High", cpc: "$3.80" },
    { keyword: "content strategy", volume: "15K", difficulty: "Low", cpc: "$1.90" },
    { keyword: "blog writing", volume: "6.2K", difficulty: "Low", cpc: "$1.50" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">SEO Optimizer</h1>
          <p className="text-muted-foreground mt-2">
            Optimize your content for search engines and improve your rankings with AI-powered SEO analysis.
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Search className="mr-2 h-4 w-4" />
          Analyze Content
        </Button>
      </div>

      {/* SEO Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {seoMetrics.map((metric, index) => (
          <Card key={index} className="p-6 shadow-soft">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">{metric.label}</h3>
              <TrendingUp className="h-4 w-4 text-success" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-foreground">{metric.value}</span>
                <span className="text-sm text-muted-foreground">/{metric.max}</span>
              </div>
              <Progress 
                value={(metric.value / metric.max) * 100} 
                className="h-2"
              />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Content Input */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">Content Analysis</h2>
              <p className="text-muted-foreground">Paste your content to get SEO recommendations</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Primary Keyword</label>
                  <Input placeholder="Enter your target keyword" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Secondary Keywords</label>
                  <Input placeholder="Additional keywords (comma separated)" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Title</label>
                <Input placeholder="Your content title" />
                <p className="text-xs text-muted-foreground mt-1">Optimal length: 50-60 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Meta Description</label>
                <Textarea 
                  placeholder="Write a compelling meta description..."
                  className="min-h-20"
                />
                <p className="text-xs text-muted-foreground mt-1">Optimal length: 120-160 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Content</label>
                <Textarea 
                  placeholder="Paste your content here for SEO analysis..."
                  className="min-h-40"
                />
              </div>
            </div>
          </Card>

          {/* SEO Checklist */}
          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">SEO Checklist</h2>
              <p className="text-muted-foreground">Review and improve your content's SEO factors</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {seoChecks.map((check, index) => {
                  const Icon = check.status === 'pass' ? CheckCircle : 
                              check.status === 'warning' ? AlertCircle : XCircle;
                  const iconColor = check.status === 'pass' ? 'text-success' : 
                                  check.status === 'warning' ? 'text-warning' : 'text-destructive';
                  
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                      <Icon className={`h-5 w-5 mt-0.5 ${iconColor}`} />
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{check.item}</h4>
                        <p className="text-sm text-muted-foreground">{check.description}</p>
                      </div>
                      {check.status !== 'pass' && (
                        <Button variant="outline" size="sm">
                          Fix
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Keyword Suggestions */}
          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <div className="flex items-center">
                <Target className="mr-3 h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Keyword Suggestions</h3>
              </div>
              <p className="text-muted-foreground text-sm">Related keywords to target</p>
            </div>
            <div className="p-4 space-y-3">
              {keywordSuggestions.map((keyword, index) => (
                <div key={index} className="p-3 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">{keyword.keyword}</h4>
                    <Badge 
                      variant={
                        keyword.difficulty === 'Low' ? 'default' :
                        keyword.difficulty === 'Medium' ? 'secondary' : 'destructive'
                      }
                      className="text-xs"
                    >
                      {keyword.difficulty}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Volume: {keyword.volume}</span>
                    <span>CPC: {keyword.cpc}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full mt-2">
                    Add to Content
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          {/* SEO Tips */}
          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">SEO Tips</h3>
              <p className="text-muted-foreground text-sm">Quick wins for better rankings</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                  <h4 className="font-medium text-foreground text-sm">Use keyword in first 100 words</h4>
                  <p className="text-xs text-muted-foreground mt-1">Include your primary keyword early in the content</p>
                </div>
                <div className="p-3 bg-success/5 border border-success/20 rounded-lg">
                  <h4 className="font-medium text-foreground text-sm">Add internal links</h4>
                  <p className="text-xs text-muted-foreground mt-1">Link to relevant pages on your website</p>
                </div>
                <div className="p-3 bg-warning/5 border border-warning/20 rounded-lg">
                  <h4 className="font-medium text-foreground text-sm">Optimize images</h4>
                  <p className="text-xs text-muted-foreground mt-1">Add descriptive alt text to all images</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SEOOptimizer;