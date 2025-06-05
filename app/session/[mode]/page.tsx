"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Brain, Send, Mic, MicOff, ArrowLeft, MoreVertical, Target, Users, BookOpen, Zap } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const modeConfig = {
  cognitive: {
    name: "Cognitive Coach",
    icon: Target,
    color: "blue",
    description: "CBT-style cognitive restructuring",
    systemPrompt: "I help you identify and challenge cognitive distortions using CBT techniques.",
  },
  "inner-child": {
    name: "Inner Child Work",
    icon: Users,
    color: "green",
    description: "IFS-inspired parts work",
    systemPrompt: "I guide you through Internal Family Systems work to heal and integrate different parts of yourself.",
  },
  narrative: {
    name: "Narrative Editor",
    icon: BookOpen,
    color: "purple",
    description: "Story reframing and meaning-making",
    systemPrompt: "I help you reframe your life experiences and create empowering narratives.",
  },
  meditation: {
    name: "Meditation Partner",
    icon: Zap,
    color: "orange",
    description: "Mindfulness and breathwork guidance",
    systemPrompt: "I guide you through meditation, breathwork, and mindfulness practices.",
  },
}

export default function SessionPage() {
  const params = useParams()
  const mode = params.mode as string
  const config = modeConfig[mode as keyof typeof modeConfig]

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: `Hello! I'm your ${config?.name}. ${config?.systemPrompt} What would you like to explore today?`,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = {
        cognitive: [
          "I notice you're using some strong language there. Let's examine this thought - is it helpful or accurate? What evidence do you have for and against this belief?",
          "That sounds like a cognitive distortion called 'all-or-nothing thinking.' Can you think of a more balanced way to view this situation?",
          "Let's try a thought record. What was the situation, what thoughts came up, how did you feel, and what would be a more realistic thought?",
        ],
        "inner-child": [
          "I hear a part of you that sounds hurt. Can you tell me more about this part? How old does it feel?",
          "It sounds like your inner critic is very active. What would you say to comfort the younger part of you that's feeling this way?",
          "Let's check in with different parts of yourself. What does your wise adult self want to tell your inner child right now?",
        ],
        narrative: [
          "That's a powerful story you're telling. What if we looked at this experience as a chapter in your hero's journey rather than a failure?",
          "I'm hearing themes of resilience in your story. How has this experience contributed to your growth?",
          "Let's reframe this narrative. If this were happening to your best friend, how would you help them see the meaning in this experience?",
        ],
        meditation: [
          "Let's pause here and take three deep breaths together. Notice what you're feeling in your body right now.",
          "I can sense some tension in your words. Would you like to try a brief body scan to release some of that stress?",
          "Let's ground ourselves in the present moment. Can you name 5 things you can see, 4 things you can hear, and 3 things you can feel?",
        ],
      }

      const modeResponses = responses[mode as keyof typeof responses] || responses.cognitive
      const randomResponse = modeResponses[Math.floor(Math.random() * modeResponses.length)]

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: randomResponse,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!config) {
    return <div>Mode not found</div>
  }

  const IconComponent = config.icon

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Link>
            </Button>
            <div className="flex items-center space-x-3">
              <IconComponent className={`h-6 w-6 text-${config.color}-600`} />
              <div>
                <h1 className="font-semibold">{config.name}</h1>
                <p className="text-sm text-gray-500">{config.description}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-green-50 text-green-700">
              Active Session
            </Badge>
            <Button variant="ghost" size="sm">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.role === "user" ? "bg-purple-600 text-white" : "bg-white border shadow-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className={`text-xs mt-2 ${message.role === "user" ? "text-purple-200" : "text-gray-500"}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t bg-white p-4">
          <div className="flex items-end space-x-2">
            <div className="flex-1">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={`Share your thoughts with your ${config.name}...`}
                className="min-h-[44px] resize-none"
                disabled={isTyping}
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsRecording(!isRecording)}
              className={isRecording ? "bg-red-50 border-red-200" : ""}
            >
              {isRecording ? <MicOff className="h-4 w-4 text-red-600" /> : <Mic className="h-4 w-4" />}
            </Button>
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
            <span>Press Enter to send, Shift+Enter for new line</span>
            <span>Session time: 12:34</span>
          </div>
        </div>
      </div>

      {/* Session Tools Sidebar */}
      <div className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 w-64">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Session Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Brain className="h-4 w-4 mr-2" />
              Quick Insight
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Target className="h-4 w-4 mr-2" />
              Thought Record
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Zap className="h-4 w-4 mr-2" />
              Breathing Exercise
            </Button>
            <div className="pt-3 border-t">
              <p className="text-xs text-gray-500 mb-2">Session Progress</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "35%" }} />
              </div>
              <p className="text-xs text-gray-500 mt-1">12 minutes</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
