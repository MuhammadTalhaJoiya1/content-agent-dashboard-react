import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, Video, Wand2, Download, Eye, Settings } from "lucide-react";

const ImageVideo = () => {
  const imageStyles = [
    "Photorealistic", "Digital Art", "Illustration", "Cartoon", "Sketch", 
    "Watercolor", "Oil Painting", "Minimalist", "Abstract"
  ];

  const aspectRatios = [
    { label: "Square (1:1)", value: "1:1" },
    { label: "Portrait (3:4)", value: "3:4" },
    { label: "Landscape (4:3)", value: "4:3" },
    { label: "Wide (16:9)", value: "16:9" },
    { label: "Story (9:16)", value: "9:16" },
  ];

  const videoTemplates = [
    { name: "Product Demo", description: "Showcase product features", duration: "30s" },
    { name: "Social Media Promo", description: "Short promotional content", duration: "15s" },
    { name: "Explainer Video", description: "Educational content", duration: "60s" },
    { name: "Brand Story", description: "Tell your brand narrative", duration: "45s" },
  ];

  const generatedImages = [
    { id: 1, prompt: "Modern office space with AI technology", style: "Photorealistic" },
    { id: 2, prompt: "Abstract representation of data flow", style: "Digital Art" },
    { id: 3, prompt: "Team collaboration illustration", style: "Illustration" },
    { id: 4, prompt: "Futuristic dashboard design", style: "Minimalist" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Image & Video Generator</h1>
          <p className="text-muted-foreground mt-2">
            Create stunning visuals and videos with AI. Generate custom images and video content for your marketing needs.
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Content
        </Button>
      </div>

      <Tabs defaultValue="images" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="images" className="flex items-center">
            <Image className="mr-2 h-4 w-4" />
            Images
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center">
            <Video className="mr-2 h-4 w-4" />
            Videos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="images" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Image Generation Settings */}
            <div className="space-y-6">
              <Card className="shadow-soft">
                <div className="p-6 border-b border-border">
                  <h2 className="text-lg font-semibold text-foreground">Image Settings</h2>
                  <p className="text-muted-foreground text-sm">Configure your image generation</p>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Style</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        {imageStyles.map((style) => (
                          <SelectItem key={style} value={style.toLowerCase().replace(' ', '-')}>
                            {style}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Aspect Ratio</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select ratio" />
                      </SelectTrigger>
                      <SelectContent>
                        {aspectRatios.map((ratio) => (
                          <SelectItem key={ratio.value} value={ratio.value}>
                            {ratio.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Quality</label>
                    <Select defaultValue="high">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="ultra">Ultra HD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Number of Images</label>
                    <Select defaultValue="4">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Image</SelectItem>
                        <SelectItem value="2">2 Images</SelectItem>
                        <SelectItem value="4">4 Images</SelectItem>
                        <SelectItem value="8">8 Images</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>

              <Card className="shadow-soft">
                <div className="p-6 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
                </div>
                <div className="p-6 space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="mr-2 h-4 w-4" />
                    Preview Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Advanced Options
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Bulk Download
                  </Button>
                </div>
              </Card>
            </div>

            {/* Image Generation Interface */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-soft">
                <div className="p-6 border-b border-border">
                  <h2 className="text-lg font-semibold text-foreground">Image Prompt</h2>
                  <p className="text-muted-foreground text-sm">Describe the image you want to create</p>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Main Prompt</label>
                    <Textarea 
                      placeholder="Describe your image in detail. Be specific about style, colors, composition, and mood..."
                      className="min-h-32"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Include</label>
                      <Input placeholder="Elements to include..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Exclude</label>
                      <Input placeholder="Elements to avoid..." />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Reference Keywords</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary">Professional</Badge>
                      <Badge variant="secondary">Modern</Badge>
                      <Badge variant="secondary">Clean</Badge>
                      <Badge variant="outline">+ Add keyword</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Generated Images Gallery */}
              <Card className="shadow-soft">
                <div className="p-6 border-b border-border">
                  <h2 className="text-lg font-semibold text-foreground">Generated Images</h2>
                  <p className="text-muted-foreground text-sm">Your AI-generated images will appear here</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {generatedImages.map((image) => (
                      <div key={image.id} className="relative group">
                        <div className="aspect-square bg-secondary/30 border border-border rounded-lg flex items-center justify-center">
                          <Image className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center space-x-2">
                          <Button size="sm" variant="secondary">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="secondary">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="mt-2">
                          <p className="text-xs text-muted-foreground truncate">{image.prompt}</p>
                          <Badge variant="outline" className="text-xs mt-1">{image.style}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Video Templates */}
            <div className="space-y-6">
              <Card className="shadow-soft">
                <div className="p-6 border-b border-border">
                  <h2 className="text-lg font-semibold text-foreground">Video Templates</h2>
                  <p className="text-muted-foreground text-sm">Start with a proven template</p>
                </div>
                <div className="p-4 space-y-3">
                  {videoTemplates.map((template, index) => (
                    <div key={index} className="p-3 border border-border rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground">{template.name}</h4>
                        <Badge variant="outline" className="text-xs">{template.duration}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{template.description}</p>
                      <Button variant="ghost" size="sm" className="w-full">
                        <Video className="mr-2 h-3 w-3" />
                        Use Template
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Video Configuration */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-soft">
                <div className="p-6 border-b border-border">
                  <h2 className="text-lg font-semibold text-foreground">Video Configuration</h2>
                  <p className="text-muted-foreground text-sm">Set up your video parameters</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Duration</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 seconds</SelectItem>
                          <SelectItem value="30">30 seconds</SelectItem>
                          <SelectItem value="60">1 minute</SelectItem>
                          <SelectItem value="120">2 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Resolution</label>
                      <Select defaultValue="1080p">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="720p">720p HD</SelectItem>
                          <SelectItem value="1080p">1080p Full HD</SelectItem>
                          <SelectItem value="4k">4K Ultra HD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Format</label>
                      <Select defaultValue="mp4">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mp4">MP4</SelectItem>
                          <SelectItem value="mov">MOV</SelectItem>
                          <SelectItem value="gif">GIF</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Video Script</label>
                    <Textarea 
                      placeholder="Enter your video script or describe the video content you want to create..."
                      className="min-h-32"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Background Music</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select music style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corporate">Corporate</SelectItem>
                          <SelectItem value="upbeat">Upbeat</SelectItem>
                          <SelectItem value="calm">Calm</SelectItem>
                          <SelectItem value="none">No Music</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Voice Style</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select voice" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="friendly">Friendly</SelectItem>
                          <SelectItem value="energetic">Energetic</SelectItem>
                          <SelectItem value="narrator">Narrator</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="shadow-soft">
                <div className="p-6 border-b border-border">
                  <h2 className="text-lg font-semibold text-foreground">Video Preview</h2>
                  <p className="text-muted-foreground text-sm">Preview will appear after generation</p>
                </div>
                <div className="p-6">
                  <div className="aspect-video bg-secondary/30 border border-border rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Video className="mx-auto h-12 w-12 mb-4 opacity-50" />
                      <p className="text-lg font-medium mb-2">Video Preview</p>
                      <p className="text-sm">Your generated video will appear here</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>Generation time: ~2-5 minutes</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-3 w-3" />
                        Preview
                      </Button>
                      <Button size="sm">
                        <Download className="mr-2 h-3 w-3" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ImageVideo;