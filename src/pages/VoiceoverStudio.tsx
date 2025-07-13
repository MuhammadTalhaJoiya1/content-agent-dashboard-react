import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Mic, Play, Pause, Download, Volume2, Settings, Activity } from "lucide-react";

const VoiceoverStudio = () => {
  const voices = [
    { name: "Sarah", gender: "Female", accent: "American", style: "Professional" },
    { name: "Michael", gender: "Male", accent: "British", style: "Authoritative" },
    { name: "Emma", gender: "Female", accent: "Australian", style: "Friendly" },
    { name: "David", gender: "Male", accent: "Canadian", style: "Conversational" },
    { name: "Sofia", gender: "Female", accent: "Spanish", style: "Warm" },
    { name: "James", gender: "Male", accent: "American", style: "Narrator" },
  ];

  const audioProjects = [
    { name: "Product Demo Script", duration: "2:30", status: "Completed", voice: "Sarah" },
    { name: "Welcome Message", duration: "0:45", status: "In Progress", voice: "Michael" },
    { name: "Tutorial Narration", duration: "5:20", status: "Draft", voice: "Emma" },
    { name: "Brand Introduction", duration: "1:15", status: "Completed", voice: "David" },
  ];

  const languages = [
    "English (US)", "English (UK)", "Spanish", "French", "German", 
    "Italian", "Portuguese", "Japanese", "Chinese", "Arabic"
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Voiceover Studio</h1>
          <p className="text-muted-foreground mt-2">
            Create professional voiceovers with AI. Convert your text into natural-sounding speech with customizable voices.
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Mic className="mr-2 h-4 w-4" />
          Generate Voice
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Voice Settings */}
        <div className="space-y-6">
          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Voice Settings</h2>
              <p className="text-muted-foreground text-sm">Configure voice parameters</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Language</label>
                <Select defaultValue="english-us">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang} value={lang.toLowerCase().replace(' ', '-').replace('(', '').replace(')', '')}>
                        {lang}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Voice</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select voice" />
                  </SelectTrigger>
                  <SelectContent>
                    {voices.map((voice) => (
                      <SelectItem key={voice.name} value={voice.name.toLowerCase()}>
                        <div className="flex items-center justify-between w-full">
                          <span>{voice.name}</span>
                          <div className="flex space-x-1 ml-2">
                            <Badge variant="outline" className="text-xs">{voice.gender}</Badge>
                            <Badge variant="secondary" className="text-xs">{voice.accent}</Badge>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Speed: <span className="font-normal">1.0x</span>
                </label>
                <Slider
                  defaultValue={[1]}
                  max={2}
                  min={0.5}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0.5x</span>
                  <span>2.0x</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Pitch: <span className="font-normal">Normal</span>
                </label>
                <Slider
                  defaultValue={[0]}
                  max={10}
                  min={-10}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Audio Format</label>
                <Select defaultValue="mp3">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mp3">MP3</SelectItem>
                    <SelectItem value="wav">WAV</SelectItem>
                    <SelectItem value="ogg">OGG</SelectItem>
                    <SelectItem value="m4a">M4A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Voice Samples</h3>
              <p className="text-muted-foreground text-sm">Preview available voices</p>
            </div>
            <div className="p-4 space-y-3">
              {voices.slice(0, 3).map((voice, index) => (
                <div key={index} className="p-3 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">{voice.name}</h4>
                    <div className="flex space-x-1">
                      <Badge variant="outline" className="text-xs">{voice.style}</Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{voice.accent} • {voice.gender}</p>
                  <Button variant="ghost" size="sm" className="w-full">
                    <Play className="mr-2 h-3 w-3" />
                    Preview
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Script Input & Audio Player */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Script Input</h2>
              <p className="text-muted-foreground text-sm">Enter the text you want to convert to speech</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Project Name</label>
                <Input placeholder="Enter project name..." />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Script</label>
                <Textarea 
                  placeholder="Enter your script here. Use punctuation to control natural pauses and emphasis..."
                  className="min-h-40"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0 characters</span>
                  <span>Estimated duration: 0:00</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Emphasis Words</label>
                  <Input placeholder="Important words to emphasize" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Pause Length</label>
                  <Select defaultValue="normal">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Short Pauses</SelectItem>
                      <SelectItem value="normal">Normal Pauses</SelectItem>
                      <SelectItem value="long">Long Pauses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </Card>

          {/* Audio Player */}
          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">Audio Player</h2>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">Ready</Badge>
                  <Badge variant="secondary" className="text-xs">0:00</Badge>
                </div>
              </div>
            </div>
            <div className="p-6">
              {/* Waveform Visualization */}
              <div className="bg-secondary/30 border border-border rounded-lg p-6 mb-4">
                <div className="flex items-center justify-center h-32">
                  <Activity className="h-8 w-8 text-muted-foreground opacity-50" />
                  <span className="ml-3 text-muted-foreground">Audio waveform will appear here</span>
                </div>
              </div>

              {/* Audio Controls */}
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Pause className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Play className="h-4 w-4" />
                  </Button>
                  <div className="flex items-center space-x-2">
                    <Volume2 className="h-4 w-4 text-muted-foreground" />
                    <Slider
                      defaultValue={[70]}
                      max={100}
                      min={0}
                      step={1}
                      className="w-20"
                    />
                  </div>
                </div>

                <Progress value={33} className="w-full" />

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>00:00</span>
                  <span>00:00</span>
                </div>

                <div className="flex justify-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Settings className="mr-2 h-3 w-3" />
                    Advanced Settings
                  </Button>
                  <Button size="sm">
                    <Download className="mr-2 h-3 w-3" />
                    Download Audio
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Recent Projects */}
          <Card className="shadow-soft">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Recent Projects</h2>
              <p className="text-muted-foreground text-sm">Your voiceover projects</p>
            </div>
            <div className="divide-y divide-border">
              {audioProjects.map((project, index) => (
                <div key={index} className="p-6 flex items-center justify-between hover:bg-secondary/50 transition-colors">
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{project.name}</h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-muted-foreground">Voice: {project.voice}</span>
                      <span className="text-sm text-muted-foreground">{project.duration}</span>
                      <Badge 
                        variant={
                          project.status === 'Completed' ? 'default' :
                          project.status === 'In Progress' ? 'secondary' : 'outline'
                        }
                        className="text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Play className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VoiceoverStudio;