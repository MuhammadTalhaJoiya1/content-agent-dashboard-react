import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Palette, Type, MessageCircle, Target, Save, Upload } from "lucide-react";

const BrandStyle = () => {
  const brandVoices = [
    { name: "Professional", description: "Formal, authoritative, and credible" },
    { name: "Friendly", description: "Warm, approachable, and conversational" },
    { name: "Playful", description: "Fun, creative, and energetic" },
    { name: "Minimalist", description: "Clean, simple, and straightforward" },
  ];

  const colorPalette = [
    { name: "Primary", color: "#3B82F6", usage: "Main brand color" },
    { name: "Secondary", color: "#10B981", usage: "Supporting color" },
    { name: "Accent", color: "#F59E0B", usage: "Highlight color" },
    { name: "Neutral", color: "#6B7280", usage: "Text and backgrounds" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Brand Style Manager</h1>
          <p className="text-muted-foreground mt-2">
            Define your brand voice, style guidelines, and visual identity for consistent AI-generated content.
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Save className="mr-2 h-4 w-4" />
          Save Brand Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Brand Voice */}
        <Card className="shadow-soft">
          <div className="p-6 border-b border-border">
            <div className="flex items-center">
              <MessageCircle className="mr-3 h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Brand Voice</h2>
            </div>
            <p className="text-muted-foreground mt-1">Define how your brand communicates</p>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Voice Type</label>
              <div className="grid grid-cols-2 gap-2">
                {brandVoices.map((voice, index) => (
                  <div 
                    key={index}
                    className="p-3 border border-border rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors"
                  >
                    <h4 className="font-medium text-foreground">{voice.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{voice.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Brand Personality</label>
              <Textarea 
                placeholder="Describe your brand's personality, values, and communication style..."
                className="min-h-24"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Key Messages</label>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="secondary">Innovation</Badge>
                <Badge variant="secondary">Quality</Badge>
                <Badge variant="secondary">Customer-focused</Badge>
                <Badge variant="outline">+ Add message</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Visual Identity */}
        <Card className="shadow-soft">
          <div className="p-6 border-b border-border">
            <div className="flex items-center">
              <Palette className="mr-3 h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Visual Identity</h2>
            </div>
            <p className="text-muted-foreground mt-1">Colors, fonts, and visual elements</p>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Brand Colors</label>
              <div className="space-y-3">
                {colorPalette.map((color, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-6 h-6 rounded-full border border-border"
                        style={{ backgroundColor: color.color }}
                      />
                      <div>
                        <p className="font-medium text-foreground">{color.name}</p>
                        <p className="text-xs text-muted-foreground">{color.usage}</p>
                      </div>
                    </div>
                    <code className="text-sm bg-secondary px-2 py-1 rounded">{color.color}</code>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Logo Upload</label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Upload your logo files</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Choose Files
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Writing Style */}
        <Card className="shadow-soft">
          <div className="p-6 border-b border-border">
            <div className="flex items-center">
              <Type className="mr-3 h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Writing Style</h2>
            </div>
            <p className="text-muted-foreground mt-1">Guidelines for content creation</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Preferred Pronouns</label>
                <Input placeholder="We, Our, Us" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Content Length</label>
                <Input placeholder="Medium (500-800 words)" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Words to Avoid</label>
              <Textarea 
                placeholder="List words or phrases that should not be used in content..."
                className="min-h-20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Preferred Terms</label>
              <Textarea 
                placeholder="Industry-specific terms, company jargon, or preferred language..."
                className="min-h-20"
              />
            </div>
          </div>
        </Card>

        {/* Target Audience */}
        <Card className="shadow-soft">
          <div className="p-6 border-b border-border">
            <div className="flex items-center">
              <Target className="mr-3 h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Target Audience</h2>
            </div>
            <p className="text-muted-foreground mt-1">Define who you're speaking to</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Primary Audience</label>
                <Input placeholder="Small business owners" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Age Range</label>
                <Input placeholder="25-45 years" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Audience Interests</label>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="secondary">Technology</Badge>
                <Badge variant="secondary">Business Growth</Badge>
                <Badge variant="secondary">Productivity</Badge>
                <Badge variant="outline">+ Add interest</Badge>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Pain Points</label>
              <Textarea 
                placeholder="What challenges does your audience face that your content should address..."
                className="min-h-20"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BrandStyle;