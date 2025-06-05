"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Brain, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

const steps = [
  { id: 1, title: "Welcome", description: "Let's get to know you" },
  { id: 2, title: "Goals", description: "What brings you here?" },
  { id: 3, title: "Assessment", description: "Current mental state" },
  { id: 4, title: "Preferences", description: "How you like to work" },
  { id: 5, title: "Complete", description: "You're all set!" },
]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goals: [],
    currentChallenges: "",
    therapyExperience: "",
    preferredMode: "",
    sessionFrequency: "",
    communicationStyle: "",
  })

  const progress = (currentStep / steps.length) * 100

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal) ? prev.goals.filter((g) => g !== goal) : [...prev.goals, goal],
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <Brain className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">Cognisync</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Your Mental Fitness Journey</h1>
          <p className="text-gray-600">Let's personalize your experience in just a few steps</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">
              Step {currentStep} of {steps.length}
            </span>
            <span className="text-sm text-gray-500">{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{steps[currentStep - 1].title}</CardTitle>
            <CardDescription>{steps[currentStep - 1].description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">What should we call you?</Label>
                  <Input
                    id="name"
                    placeholder="Your preferred name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Privacy First:</strong> Your data is encrypted and never shared. You can delete your account
                    and all data at any time.
                  </p>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium">What are your main goals? (Select all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    {[
                      "Reduce anxiety and stress",
                      "Improve focus and productivity",
                      "Process past experiences",
                      "Build emotional resilience",
                      "Enhance self-awareness",
                      "Improve relationships",
                      "Boost confidence",
                      "Manage depression",
                      "Develop coping strategies",
                      "Optimize mental performance",
                    ].map((goal) => (
                      <div key={goal} className="flex items-center space-x-2">
                        <Checkbox
                          id={goal}
                          checked={formData.goals.includes(goal)}
                          onCheckedChange={() => handleGoalToggle(goal)}
                        />
                        <Label htmlFor={goal} className="text-sm">
                          {goal}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="challenges">What's your biggest challenge right now?</Label>
                  <Textarea
                    id="challenges"
                    placeholder="Tell us what's on your mind..."
                    value={formData.currentChallenges}
                    onChange={(e) => setFormData((prev) => ({ ...prev, currentChallenges: e.target.value }))}
                    rows={4}
                  />
                </div>
                <div>
                  <Label className="text-base font-medium">Have you tried therapy or coaching before?</Label>
                  <RadioGroup
                    value={formData.therapyExperience}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, therapyExperience: value }))}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="never" id="never" />
                      <Label htmlFor="never">Never tried it</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="some" id="some" />
                      <Label htmlFor="some">Some experience</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="extensive" id="extensive" />
                      <Label htmlFor="extensive">Extensive experience</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="current" id="current" />
                      <Label htmlFor="current">Currently in therapy</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium">Which AI mode interests you most?</Label>
                  <RadioGroup
                    value={formData.preferredMode}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, preferredMode: value }))}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cognitive" id="cognitive" />
                      <Label htmlFor="cognitive">Cognitive Coach (CBT-style)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="inner-child" id="inner-child" />
                      <Label htmlFor="inner-child">Inner Child Work (IFS)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="narrative" id="narrative" />
                      <Label htmlFor="narrative">Narrative Editor</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="meditation" id="meditation" />
                      <Label htmlFor="meditation">Meditation Partner</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="shadow" id="shadow" />
                      <Label htmlFor="shadow">Shadow Analyst</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label className="text-base font-medium">How often would you like to have sessions?</Label>
                  <RadioGroup
                    value={formData.sessionFrequency}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, sessionFrequency: value }))}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="daily" />
                      <Label htmlFor="daily">Daily check-ins</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="few-times" id="few-times" />
                      <Label htmlFor="few-times">Few times a week</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekly" id="weekly" />
                      <Label htmlFor="weekly">Weekly sessions</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="as-needed" id="as-needed" />
                      <Label htmlFor="as-needed">As needed</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Welcome to Cognisync, {formData.name}!</h3>
                  <p className="text-gray-600">
                    Your personalized mental fitness journey is ready. Based on your responses, we've customized your
                    experience to focus on {formData.goals.slice(0, 2).join(" and ")}.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-2">Your Recommended Starting Point:</h4>
                  <p className="text-sm text-purple-800">
                    {formData.preferredMode === "cognitive" &&
                      "Cognitive Coach - Perfect for building rational thinking skills"}
                    {formData.preferredMode === "inner-child" &&
                      "Inner Child Work - Great for healing and self-compassion"}
                    {formData.preferredMode === "narrative" && "Narrative Editor - Ideal for reprocessing experiences"}
                    {formData.preferredMode === "meditation" &&
                      "Meditation Partner - Excellent for mindfulness and presence"}
                    {formData.preferredMode === "shadow" && "Shadow Analyst - Perfect for deep self-exploration"}
                  </p>
                </div>
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/dashboard">
                    Enter Your Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        {currentStep < 5 && (
          <div className="flex justify-between">
            <Button variant="outline" onClick={handlePrev} disabled={currentStep === 1}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button onClick={handleNext} className="bg-purple-600 hover:bg-purple-700">
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
