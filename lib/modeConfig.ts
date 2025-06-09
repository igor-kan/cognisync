import { Target, Users, BookOpen, Zap } from "lucide-react"

export const modeConfig = {
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