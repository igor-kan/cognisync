"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  Target,
  TrendingUp,
  Users,
  Zap,
  MessageCircle,
  BookOpen,
  Calendar,
  Settings,
  Play,
  RotateCcw,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [currentMood, setCurrentMood] = useState(7)
  const [isSessionActive, setIsSessionActive] = useState(false)

  const aiModes = [
    {
      id: "cognitive",
      name: "Cognitive Coach",
      icon: Target,
      color: "blue",
      description: "CBT-style logic trap detection",
      sessions: 12,
      lastUsed: "2 days ago",
      progress: 75,
    },
    {
      id: "inner-child",
      name: "Inner Child Work",
      icon: Users,
      color: "green",
      description: "IFS-inspired self-dialogue",
      sessions: 8,
      lastUsed: "1 week ago",
      progress: 45,
    },
    {
      id: "narrative",
      name: "Narrative Editor",
      icon: BookOpen,
      color: "purple",
      description: "Reprocess life events",
      sessions: 5,
      lastUsed: "3 days ago",
      progress: 30,
    },
    {
      id: "meditation",
      name: "Meditation Partner",
      icon: Zap,
      color: "orange",
      description: "Mindfulness and breathwork",
      sessions: 15,
      lastUsed: "Today",
      progress: 85,
    },
    {
      id: "shadow",
      name: "Shadow Analyst",
      icon: Brain,
      color: "red",
      description: "Jungian exploration",
      sessions: 3,
      lastUsed: "1 week ago",
      progress: 20,
    },
  ]

  const recentInsights = [
    "You've shown 34% improvement in anxiety management this month",
    "Your meditation consistency has increased your focus scores",
    "Pattern detected: You tend to have breakthrough moments on Thursdays",
    "Your narrative reframing skills have strengthened significantly",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">Cognisync</span>
            </Link>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Active Session
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex</h1>
          <p className="text-gray-600">Ready to continue your mental fitness journey?</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sessions">AI Sessions</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="journal">Journal</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Quick Session</CardTitle>
                  <CardDescription>Start a 10-minute check-in</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Mood Check</CardTitle>
                  <CardDescription>How are you feeling today?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>1 (Low)</span>
                      <span>10 (High)</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={currentMood}
                      onChange={(e) => setCurrentMood(Number.parseInt(e.target.value))}
                      className="w-full"
                    />
                    <p className="text-center font-medium">Current: {currentMood}/10</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Today's Focus</CardTitle>
                  <CardDescription>Recommended for you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-3">
                    <Zap className="h-5 w-5 text-orange-500" />
                    <span className="font-medium">Meditation Partner</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Continue Session
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* AI Modes Grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your AI Therapy Modes</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiModes.map((mode) => {
                  const IconComponent = mode.icon
                  return (
                    <Card key={mode.id} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <IconComponent className={`h-6 w-6 text-${mode.color}-600`} />
                          <Badge variant="secondary">{mode.sessions} sessions</Badge>
                        </div>
                        <CardTitle className="text-lg">{mode.name}</CardTitle>
                        <CardDescription>{mode.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>{mode.progress}%</span>
                            </div>
                            <Progress value={mode.progress} className="h-2" />
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Last used: {mode.lastUsed}</span>
                            <Button size="sm" asChild>
                              <Link href={`/session/${mode.id}`}>Start</Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Recent Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                  Recent Insights
                </CardTitle>
                <CardDescription>AI-generated observations about your progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentInsights.map((insight, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{insight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <div className="grid gap-6">
              {aiModes.map((mode) => {
                const IconComponent = mode.icon
                return (
                  <Card key={mode.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <IconComponent className={`h-6 w-6 text-${mode.color}-600`} />
                          <div>
                            <CardTitle>{mode.name}</CardTitle>
                            <CardDescription>{mode.description}</CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{mode.sessions} sessions</Badge>
                          <Button asChild>
                            <Link href={`/session/${mode.id}`}>
                              <Play className="h-4 w-4 mr-2" />
                              Start Session
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Progress</p>
                          <Progress value={mode.progress} className="h-2" />
                          <p className="text-xs text-gray-500 mt-1">{mode.progress}% complete</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Last Session</p>
                          <p className="text-sm font-medium">{mode.lastUsed}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Total Time</p>
                          <p className="text-sm font-medium">{mode.sessions * 15} minutes</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mood Trends</CardTitle>
                  <CardDescription>Your emotional patterns over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Mood chart visualization would go here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Session Activity</CardTitle>
                  <CardDescription>Your engagement with different AI modes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Activity chart visualization would go here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Progress Metrics</CardTitle>
                  <CardDescription>Key indicators of your mental fitness</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Anxiety Management</span>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Emotional Awareness</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Coping Skills</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Focus & Clarity</span>
                        <span className="text-sm font-medium">72%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weekly Summary</CardTitle>
                  <CardDescription>This week's highlights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Sessions completed</span>
                      <span className="font-medium">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Average mood</span>
                      <span className="font-medium">7.2/10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Streak days</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Insights generated</span>
                      <span className="font-medium">15</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="journal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Enhanced Journal</CardTitle>
                <CardDescription>Write your thoughts and get AI insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <textarea
                    className="w-full h-32 p-3 border rounded-lg resize-none"
                    placeholder="What's on your mind today? The AI will provide insights and suggestions as you write..."
                  />
                  <div className="flex justify-between">
                    <Button variant="outline">
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Get AI Insights
                    </Button>
                    <Button>Save Entry</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Entries</CardTitle>
                <CardDescription>Your journal history with AI analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "Today", preview: "Feeling more confident about the presentation tomorrow...", mood: 8 },
                    { date: "Yesterday", preview: "Had a difficult conversation with my manager...", mood: 5 },
                    { date: "2 days ago", preview: "Really enjoyed the meditation session this morning...", mood: 9 },
                  ].map((entry, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium">{entry.date}</span>
                        <Badge variant="outline">Mood: {entry.mood}/10</Badge>
                      </div>
                      <p className="text-gray-600 text-sm">{entry.preview}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
