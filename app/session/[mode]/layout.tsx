import { modeConfig } from "@/lib/modeConfig"

export async function generateStaticParams() {
  return Object.keys(modeConfig).map((mode) => ({
    mode: mode,
  }))
}

export default function SessionLayout({ children }: { children: React.ReactNode }) {
  return children
} 