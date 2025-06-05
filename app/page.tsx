import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Target, TrendingUp, Shield, Zap, Users, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">Cognisync</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">
              Pricing
            </Link>
            <Button variant="outline" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/onboarding">Start Free Trial</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">Mental Performance Lab</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your mind, <span className="text-purple-600">tuned.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            AI-powered cognitive optimization and emotional wellness platform. Get personalized mental fitness coaching,
            therapeutic insights, and performance enhancement — available 24/7, without the wait times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/onboarding">
                Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#demo">Watch Demo</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              No therapist required
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Evidence-based methods
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Complete privacy
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Five AI Modes for Complete Mental Wellness</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each mode is trained on validated therapeutic frameworks and adapts to your unique patterns, goals, and
              communication style.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <Target className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Cognitive Coach</CardTitle>
                <CardDescription>CBT-style logic trap detection and thought reframing</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Identify cognitive distortions</li>
                  <li>• Challenge negative thought patterns</li>
                  <li>• Build rational thinking skills</li>
                  <li>• Track progress over time</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <Users className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Inner Child Work</CardTitle>
                <CardDescription>IFS-inspired self-dialogue and parts integration</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Explore internal family systems</li>
                  <li>• Heal childhood wounds</li>
                  <li>• Integrate different aspects of self</li>
                  <li>• Build self-compassion</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <Brain className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Narrative Editor</CardTitle>
                <CardDescription>Reprocess life events through guided storytelling</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Reframe personal narratives</li>
                  <li>• Process traumatic experiences</li>
                  <li>• Discover meaning and growth</li>
                  <li>• Build resilience stories</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <Zap className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Meditation Partner</CardTitle>
                <CardDescription>Structured mindfulness, breathwork, and presence training</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Guided meditation sessions</li>
                  <li>• Breathwork techniques</li>
                  <li>• Body scan practices</li>
                  <li>• Mindfulness integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Shadow Analyst</CardTitle>
                <CardDescription>Jungian and psychoanalytic exploration of the unconscious</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Explore unconscious patterns</li>
                  <li>• Dream analysis and interpretation</li>
                  <li>• Shadow work integration</li>
                  <li>• Archetypal understanding</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardHeader>
                <Shield className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Performance Lab</CardTitle>
                <CardDescription>Advanced cognitive optimization for high performers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Flow state optimization</li>
                  <li>• Focus enhancement protocols</li>
                  <li>• Executive function training</li>
                  <li>• Creativity amplification</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Cognisync Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI adapts to your unique patterns, learns from your interactions, and provides increasingly
              personalized guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Assessment & Matching</h3>
              <p className="text-gray-600">
                Complete our comprehensive intake to match you with the right AI modes and therapeutic approaches.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Daily Sessions</h3>
              <p className="text-gray-600">
                Engage in structured sessions, journaling, and exercises tailored to your goals and current state.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track & Optimize</h3>
              <p className="text-gray-600">
                Monitor your emotional patterns, cognitive improvements, and receive AI-powered insights for continuous
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Mental Fitness Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free and upgrade as you discover what works best for your mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Explorer</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
                <div className="text-3xl font-bold">Free</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Basic journaling with AI insights
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />3 AI chat sessions per week
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mood tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Basic progress analytics
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/onboarding">Start Free</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-purple-600">Most Popular</Badge>
              <CardHeader>
                <CardTitle>Optimizer</CardTitle>
                <CardDescription>For serious mental fitness</CardDescription>
                <div className="text-3xl font-bold">
                  $29<span className="text-lg text-gray-500">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    All Explorer features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Unlimited AI sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    All 5 AI therapy modes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Advanced analytics & insights
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Voice sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Personalized protocols
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/onboarding">Start 7-Day Trial</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Peak Performance</CardTitle>
                <CardDescription>For cognitive enhancement</CardDescription>
                <div className="text-3xl font-bold">
                  $79<span className="text-lg text-gray-500">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    All Optimizer features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance Lab access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Flow state optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Executive function training
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Export for therapist sharing
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/onboarding">Start Trial</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Shield className="h-5 w-5 text-blue-600 mr-2" />
              Important Disclaimer
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Cognisync is a mental wellness and cognitive optimization platform designed for self-exploration, personal
              growth, and performance enhancement. It is not a substitute for professional mental health treatment,
              medical advice, or clinical therapy. If you are experiencing a mental health crisis, thoughts of
              self-harm, or severe psychological distress, please contact a licensed mental health professional or
              emergency services immediately. Our AI coaches are designed to support your mental fitness journey but do
              not replace qualified human care when needed.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold">Cognisync</span>
              </div>
              <p className="text-gray-400 text-sm">AI-powered mental wellness and cognitive optimization platform.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="hover:text-white transition-colors">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Cognisync. All rights reserved. Not for medical use.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
