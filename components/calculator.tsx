"use client"

import { useState, useMemo, useCallback, memo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import {
  Calendar,
  Clock,
  DollarSign,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Palette,
  Type,
  Layout,
  Layers,
  Eye,
  Code,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Grid,
  List,
  Star,
  Heart,
  Share,
  Bookmark,
  Settings,
  Bell,
  Shield,
  ZapIcon,
} from "lucide-react"

const durationLabels = ["1-3 days", "1 week", "1 month", "3 months", "6 months", "1 year"]
const durationValues = [2, 7, 30, 90, 180, 365] // days

const extraServices = [
  { id: "content", label: "Content Writing", price: 500, description: "Professional copywriting services", icon: "✍️" },
  {
    id: "social",
    label: "Social Media Strategy",
    price: 300,
    description: "Complete social media planning",
    icon: "📱",
  },
  { id: "branding", label: "Brand Identity", price: 800, description: "Logo and brand guidelines", icon: "🎨" },
  { id: "server", label: "Technical Support", price: 400, description: "Server setup and maintenance", icon: "⚙️" },
  {
    id: "automation",
    label: "Process Automation",
    price: 1200,
    description: "Workflow optimization tools",
    icon: "🤖",
  },
  { id: "ai", label: "AI Integration", price: 2500, description: "Custom AI-powered features", icon: "🧠" },
  { id: "sales", label: "Sales Optimization", price: 600, description: "Conversion rate optimization", icon: "📈" },
  { id: "seo", label: "SEO Package", price: 900, description: "Search engine optimization", icon: "🔍" },
]

const complexityMultipliers = {
  simple: 1.0,
  medium: 1.5,
  complex: 2.0,
}

function Component() {
  const [duration, setDuration] = useState([2])
  const [teamSize, setTeamSize] = useState("designer")
  const [projectType, setProjectType] = useState("website")
  const [billingPreference, setBillingPreference] = useState("hourly")
  const [complexity, setComplexity] = useState("simple")
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const [activeFilter, setActiveFilter] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [toggleStates, setToggleStates] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    analytics: false,
  })

  const durationIndex = duration[0]
  const durationInDays = durationValues[durationIndex]
  const durationLabel = durationLabels[durationIndex]

  // Optimized cost calculation with useMemo
  const totalCost = useMemo(() => {
    // Calculate base cost
    const hourlyRate = teamSize === "designer" ? 85 : 120
    const hoursPerDay = 8
    const totalHours = durationInDays * hoursPerDay
    const baseCost = totalHours * hourlyRate

    // Apply complexity multiplier
    const complexityMultiplier = complexityMultipliers[complexity as keyof typeof complexityMultipliers]
    const adjustedBaseCost = baseCost * complexityMultiplier

    // Calculate extra services cost
    const extraServicesCost = selectedServices.reduce((total, serviceId) => {
      const service = extraServices.find((s) => s.id === serviceId)
      return total + (service?.price || 0)
    }, 0)

    return adjustedBaseCost + extraServicesCost
  }, [teamSize, durationInDays, complexity, selectedServices])

  const handleServiceChange = useCallback((serviceId: string, checked: boolean) => {
    if (checked) {
      setSelectedServices(prev => [...prev, serviceId])
    } else {
      setSelectedServices(prev => prev.filter((id) => id !== serviceId))
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Optimized background system - solid color base for performance */}
      <div className="absolute inset-0 bg-slate-950" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-emerald-500/[0.02] via-transparent to-teal-500/[0.02] pointer-events-none animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-black/20 pointer-events-none" />

      {/* Sophisticated ambient lighting system */}
      <div
        className="absolute top-1/3 left-1/4 w-[1000px] h-[1000px] bg-gradient-radial from-emerald-500/[0.03] via-teal-500/[0.01] to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDuration: "15s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/[0.02] via-emerald-500/[0.01] to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDuration: "12s" }}
      />

      {/* Floating geometric elements for premium feel */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-emerald-400/20 rounded-full animate-pulse" style={{ animationDuration: "3s" }} />
      <div className="absolute top-40 left-20 w-1 h-1 bg-teal-400/30 rounded-full animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute bottom-40 right-40 w-1.5 h-1.5 bg-cyan-400/20 rounded-full animate-pulse" style={{ animationDuration: "5s" }} />

      <div className="relative z-10 px-6 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Premium Header with sophisticated typography */}
          <header className="text-center mb-20 md:mb-32 space-y-12">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/[0.08] via-teal-500/[0.06] to-cyan-500/[0.08] border border-emerald-500/20 backdrop-blur-xl group hover:border-emerald-400/30 hover:bg-gradient-to-r hover:from-emerald-500/[0.12] hover:via-teal-500/[0.10] hover:to-cyan-500/[0.12] transition-all duration-700 shadow-lg shadow-emerald-500/5">
              <Sparkles className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-500" />
              <span className="text-emerald-300 text-sm font-medium tracking-[0.5px] group-hover:text-emerald-200 transition-colors duration-500">
                Professional Project Estimation
              </span>
            </div>

            <div className="space-y-8">
              <p className="text-slate-300/90 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light tracking-[0.3px]">
                Precision-crafted estimates tailored to your vision, timeline, and requirements through our advanced
                calculation system.
              </p>
            </div>
          </header>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
            {/* Main Form - Premium glass morphism design */}
            <div className="lg:col-span-8 space-y-16">
              {/* Project Duration - Sophisticated emerald accent design */}
              <section className="group">
                <Card className="bg-slate-900/[0.3] dark:bg-slate-900/[0.3] border-slate-700/30 dark:border-slate-700/30 backdrop-blur-2xl shadow-2xl shadow-black/20 hover:shadow-emerald-500/10 hover:border-emerald-500/30 hover:bg-slate-900/[0.4] dark:hover:bg-slate-900/[0.4] transition-all duration-700 rounded-3xl glow-card">
                  <CardHeader className="pb-10 pt-10">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 group-hover:from-emerald-500/20 group-hover:to-teal-500/20 transition-all duration-700 shadow-lg shadow-emerald-500/5 backdrop-blur-sm border border-emerald-500/10">
                        <Calendar className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-500" />
                      </div>
                      <div>
                        <CardTitle className="text-white dark:text-white text-3xl font-light tracking-[-0.01em] group-hover:text-emerald-50 transition-colors duration-500">
                          Project Duration
                        </CardTitle>
                        <p className="text-slate-400/80 dark:text-slate-400/80 text-base font-light mt-2 tracking-[0.2px] group-hover:text-emerald-200/80 transition-colors duration-500">
                          Select your preferred timeline
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-10 pb-10">
                    <div className="px-6">
                      <Slider
                        value={duration}
                        onValueChange={setDuration}
                        max={5}
                        step={1}
                        className="w-full [&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-emerald-500 [&_[role=slider]]:to-teal-500 [&_[role=slider]]:border-emerald-400 [&_[role=slider]]:shadow-xl [&_[role=slider]]:shadow-emerald-500/25 [&_[role=slider]]:w-6 [&_[role=slider]]:h-6 [&_[role=slider]]:backdrop-blur-sm"
                      />
                    </div>
                    <div className="flex justify-between text-sm text-slate-400/70 dark:text-slate-400/70 px-4">
                      {durationLabels.map((label, index) => (
                        <span
                          key={index}
                          className={`transition-all duration-500 font-light cursor-pointer hover:text-emerald-300 ${
                            index === durationIndex ? "text-emerald-400 font-medium scale-105" : "hover:text-emerald-300"
                          }`}
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                    <div className="text-center pt-6">
                      <span className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-300 text-base font-medium shadow-xl shadow-emerald-500/10 border border-emerald-500/20 backdrop-blur-xl hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-teal-500/20 hover:border-emerald-400/30 hover:text-emerald-200 transition-all duration-500">
                        <CheckCircle className="w-5 h-5" />
                        {durationLabel} selected
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Team Size & Project Type - Premium grid layout */}
              <section className="grid md:grid-cols-2 gap-10">
                <Card className="group bg-slate-900/[0.3] dark:bg-slate-900/[0.3] border-slate-700/30 dark:border-slate-700/30 backdrop-blur-2xl shadow-2xl shadow-black/20 hover:shadow-slate-500/10 hover:border-slate-400/30 hover:bg-slate-900/[0.4] dark:hover:bg-slate-900/[0.4] transition-all duration-700 rounded-3xl glow-card">
                  <CardHeader className="pb-8 pt-10">
                    <div className="flex items-center gap-5">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-500/10 to-gray-500/10 group-hover:from-slate-500/20 group-hover:to-gray-500/20 transition-all duration-700 shadow-lg shadow-slate-500/5 backdrop-blur-sm border border-slate-500/10">
                        <Users className="w-7 h-7 text-slate-400 group-hover:text-slate-300 transition-colors duration-500" />
                      </div>
                      <div>
                        <CardTitle className="text-white dark:text-white text-2xl font-light tracking-[-0.01em] group-hover:text-slate-100 transition-colors duration-500">
                          Team Structure
                        </CardTitle>
                        <p className="text-slate-400/80 dark:text-slate-400/80 text-sm font-light mt-2 tracking-[0.2px] group-hover:text-slate-300/80 transition-colors duration-500">
                          Choose your configuration
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-10">
                    <div className="grid grid-cols-2 gap-5">
                      <Button
                        variant={teamSize === "designer" ? "default" : "outline"}
                        onClick={() => setTeamSize("designer")}
                        className={`h-24 flex flex-col gap-3 transition-all duration-500 font-light rounded-2xl glow-button ${
                          teamSize === "designer"
                            ? "bg-gradient-to-br from-emerald-500/80 via-emerald-600/80 to-teal-600/80 hover:from-emerald-600/90 hover:via-emerald-700/90 hover:to-teal-700/90 shadow-2xl shadow-emerald-500/20 text-white border-emerald-400/30 backdrop-blur-sm"
                            : "border-slate-600/30 dark:border-slate-600/30 bg-slate-800/[0.3] dark:bg-slate-800/[0.3] text-slate-300 dark:text-slate-300 hover:bg-slate-800/[0.5] dark:hover:bg-slate-800/[0.5] hover:border-slate-500/40 dark:hover:border-slate-500/40 hover:text-slate-200 dark:hover:text-slate-200 shadow-lg shadow-black/10 backdrop-blur-sm"
                        }`}
                      >
                        <span className="font-medium text-lg tracking-[0.2px]">Solo Designer</span>
                        <span className="text-sm opacity-70 font-light tracking-[0.1px]">Individual expertise</span>
                      </Button>
                      <Button
                        variant={teamSize === "team" ? "default" : "outline"}
                        onClick={() => setTeamSize("team")}
                        className={`h-24 flex flex-col gap-3 transition-all duration-500 font-light rounded-2xl glow-button ${
                          teamSize === "team"
                            ? "bg-gradient-to-br from-emerald-500/80 via-emerald-600/80 to-teal-600/80 hover:from-emerald-600/90 hover:via-emerald-700/90 hover:to-teal-700/90 shadow-2xl shadow-emerald-500/20 text-white border-emerald-400/30 backdrop-blur-sm"
                            : "border-slate-600/30 dark:border-slate-600/30 bg-slate-800/[0.3] dark:bg-slate-800/[0.3] text-slate-300 dark:text-slate-300 hover:bg-slate-800/[0.5] dark:hover:bg-slate-800/[0.5] hover:border-slate-500/40 dark:hover:border-slate-500/40 hover:text-slate-200 dark:hover:text-slate-200 shadow-lg shadow-black/10 backdrop-blur-sm"
                        }`}
                      >
                        <span className="font-medium text-lg tracking-[0.2px]">Full Team</span>
                        <span className="text-sm opacity-70 font-light tracking-[0.1px]">Multi-specialist</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group bg-slate-900/[0.3] dark:bg-slate-900/[0.3] border-slate-700/30 dark:border-slate-700/30 backdrop-blur-2xl shadow-2xl shadow-black/20 hover:shadow-emerald-500/10 hover:border-emerald-500/30 hover:bg-slate-900/[0.4] dark:hover:bg-slate-900/[0.4] transition-all duration-700 rounded-3xl glow-card">
                  <CardHeader className="pb-8 pt-10">
                    <div className="flex items-center gap-5">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 group-hover:from-emerald-500/20 group-hover:to-teal-500/20 transition-all duration-700 shadow-lg shadow-emerald-500/5 backdrop-blur-sm border border-emerald-500/10">
                        <Zap className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-500" />
                      </div>
                      <div>
                        <CardTitle className="text-white dark:text-white text-2xl font-light tracking-[-0.01em] group-hover:text-emerald-50 transition-colors duration-500">
                          Project Type
                        </CardTitle>
                        <p className="text-slate-400/80 dark:text-slate-400/80 text-sm font-light mt-2 tracking-[0.2px] group-hover:text-emerald-200/80 transition-colors duration-500">
                          Select your category
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-10">
                    <Select value={projectType} onValueChange={setProjectType}>
                      <SelectTrigger className="h-16 bg-slate-800/[0.3] border-white/20 text-white shadow-lg shadow-black/5 hover:bg-slate-700/[0.4] hover:border-emerald-500/30 hover:shadow-emerald-500/5 transition-all duration-700 backdrop-blur-sm font-light rounded-2xl glow-button">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900/95 dark:bg-slate-900/95 border-white/20 dark:border-white/20 shadow-2xl shadow-black/40 backdrop-blur-2xl rounded-2xl">
                        <SelectItem
                          value="website"
                          className="hover:bg-slate-700/[0.4] hover:text-emerald-200 font-light transition-all duration-500 rounded-xl"
                        >
                          Website Design
                        </SelectItem>
                        <SelectItem
                          value="mobile"
                          className="hover:bg-slate-700/[0.4] hover:text-emerald-200 font-light transition-all duration-500 rounded-xl"
                        >
                          Mobile Application
                        </SelectItem>
                        <SelectItem
                          value="branding"
                          className="hover:bg-slate-700/[0.4] hover:text-emerald-200 font-light transition-all duration-500 rounded-xl"
                        >
                          Brand Identity
                        </SelectItem>
                        <SelectItem
                          value="ecommerce"
                          className="hover:bg-slate-700/[0.4] hover:text-emerald-200 font-light transition-all duration-500 rounded-xl"
                        >
                          E-commerce Platform
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>
              </section>

              {/* Billing Structure - Premium glass morphism design */}
              <section className="group">
                <Card className="bg-slate-900/[0.3] dark:bg-slate-900/[0.3] border-slate-700/30 dark:border-slate-700/30 backdrop-blur-2xl shadow-2xl shadow-black/20 hover:shadow-blue-500/10 hover:border-blue-500/30 hover:bg-slate-900/[0.4] dark:hover:bg-slate-900/[0.4] transition-all duration-700 rounded-3xl glow-card">
                  <CardHeader className="pb-10 pt-10">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 group-hover:from-blue-500/20 group-hover:to-indigo-500/20 transition-all duration-700 shadow-lg shadow-blue-500/5 backdrop-blur-sm border border-blue-500/10">
                        <DollarSign className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
                      </div>
                      <div>
                        <CardTitle className="text-white dark:text-white text-3xl font-light tracking-[-0.01em] group-hover:text-blue-50 transition-colors duration-500">
                          Billing Structure
                        </CardTitle>
                        <p className="text-slate-400/80 dark:text-slate-400/80 text-base font-light mt-2 tracking-[0.2px] group-hover:text-blue-200/80 transition-colors duration-500">
                          Choose your payment model
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { value: "hourly", label: "Hourly", rate: "$85/hr", desc: "Flexible billing" },
                        { value: "daily", label: "Daily", rate: "$650/day", desc: "Day-based pricing" },
                        { value: "monthly", label: "Monthly", rate: "$12,000/mo", desc: "Long-term projects" },
                      ].map((option) => (
                        <Button
                          key={option.value}
                          variant={billingPreference === option.value ? "default" : "outline"}
                          onClick={() => setBillingPreference(option.value)}
                          className={`flex flex-col h-28 p-6 transition-all duration-700 font-light rounded-2xl glow-button ${
                            billingPreference === option.value
                              ? "bg-gradient-to-br from-blue-500/80 via-blue-600/80 to-indigo-600/80 hover:from-blue-600/90 hover:via-blue-700/90 hover:to-indigo-700/90 shadow-2xl shadow-blue-500/20 text-white border-blue-400/30 backdrop-blur-sm"
                              : "border-slate-600/30 dark:border-slate-600/30 bg-slate-800/[0.3] dark:bg-slate-800/[0.3] text-slate-300 dark:text-slate-300 hover:bg-slate-800/[0.5] dark:hover:bg-slate-800/[0.5] hover:border-slate-500/40 dark:hover:border-slate-500/40 hover:text-slate-200 dark:hover:text-slate-200 shadow-lg shadow-black/10 backdrop-blur-sm"
                          }`}
                        >
                          <span className="font-medium text-xl tracking-[0.2px]">{option.label}</span>
                          <span className="text-lg opacity-90 font-medium tracking-[0.1px]">{option.rate}</span>
                          <span className="text-sm opacity-70 font-light mt-1 tracking-[0.1px]">{option.desc}</span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Project Complexity - Premium glass morphism design */}
              <section className="group">
                <Card className="bg-slate-900/[0.3] dark:bg-slate-900/[0.3] border-slate-700/30 dark:border-slate-700/30 backdrop-blur-2xl shadow-2xl shadow-black/20 hover:shadow-purple-500/10 hover:border-purple-500/30 hover:bg-slate-900/[0.4] dark:hover:bg-slate-900/[0.4] transition-all duration-700 rounded-3xl glow-card">
                  <CardHeader className="pb-10 pt-10">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-violet-500/10 group-hover:from-purple-500/20 group-hover:to-violet-500/20 transition-all duration-700 shadow-lg shadow-purple-500/5 backdrop-blur-sm border border-purple-500/10">
                        <Settings className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors duration-500" />
                      </div>
                      <div>
                        <CardTitle className="text-white dark:text-white text-3xl font-light tracking-[-0.01em] group-hover:text-purple-50 transition-colors duration-500">
                          Complexity Level
                        </CardTitle>
                        <p className="text-slate-400/80 dark:text-slate-400/80 text-base font-light mt-2 tracking-[0.2px] group-hover:text-purple-200/80 transition-colors duration-500">
                          Select the complexity that matches your requirements
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-10">
                    <RadioGroup value={complexity} onValueChange={setComplexity} className="space-y-6">
                      {[
                        {
                          value: "simple",
                          label: "Essential",
                          description: "Clean design with standard functionality",
                          multiplier: "1.0×",
                          features: ["Minimalist design", "Core features", "Standard timeline"],
                        },
                        {
                          value: "medium",
                          label: "Professional",
                          description: "Enhanced features with custom functionality",
                          multiplier: "1.5×",
                          features: ["Custom design", "Advanced features", "API integrations"],
                        },
                        {
                          value: "complex",
                          label: "Enterprise",
                          description: "Advanced functionality with premium features",
                          multiplier: "2.0×",
                          features: ["Premium design", "Complex systems", "Full customization"],
                        },
                      ].map((option) => (
                        <div
                          key={option.value}
                          className={`flex items-start space-x-6 p-8 rounded-3xl border transition-all duration-700 cursor-pointer ${
                            complexity === option.value
                              ? "bg-gradient-to-r from-purple-500/10 to-violet-500/10 border-purple-500/30 shadow-2xl shadow-purple-500/10 backdrop-blur-sm"
                              : "bg-slate-900/[0.2] border-slate-700/30 hover:bg-slate-900/[0.3] hover:border-slate-600/40 shadow-lg shadow-black/5"
                          }`}
                          onClick={() => setComplexity(option.value)}
                        >
                          <RadioGroupItem value={option.value} id={option.value} className="border-white/30 mt-2" />
                          <div className="flex-1 space-y-5">
                            <div className="flex items-center justify-between">
                              <Label
                                htmlFor={option.value}
                                className="text-white dark:text-white font-medium text-xl cursor-pointer tracking-[0.2px] hover:text-purple-100 transition-colors duration-500"
                              >
                                {option.label}
                              </Label>
                              <span className="text-purple-300 font-bold text-base bg-gradient-to-r from-purple-500/15 to-violet-500/15 px-4 py-2 rounded-2xl border border-purple-500/20 hover:bg-gradient-to-r hover:from-purple-500/25 hover:to-violet-500/25 hover:border-purple-400/40 hover:text-purple-200 transition-all duration-500 backdrop-blur-sm">
                                {option.multiplier}
                              </span>
                            </div>
                            <p className="text-slate-300/90 dark:text-slate-300/90 text-base font-light leading-relaxed tracking-[0.1px]">{option.description}</p>
                            <div className="flex flex-wrap gap-3">
                              {option.features.map((feature, index) => (
                                <span
                                  key={index}
                                  className="text-sm bg-slate-800/[0.4] text-slate-200 px-4 py-2 rounded-2xl border border-slate-600/30 font-light hover:bg-slate-700/[0.5] hover:text-slate-100 hover:border-slate-500/40 transition-all duration-500 backdrop-blur-sm"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </Card>
              </section>

              {/* Extra Services - Premium glass morphism design */}
              <section className="group">
                <Card className="bg-slate-900/[0.3] dark:bg-slate-900/[0.3] border-slate-700/30 dark:border-slate-700/30 backdrop-blur-2xl shadow-2xl shadow-black/20 hover:shadow-amber-500/10 hover:border-amber-500/30 hover:bg-slate-900/[0.4] dark:hover:bg-slate-900/[0.4] transition-all duration-700 rounded-3xl glow-card">
                  <CardHeader className="pb-10 pt-10">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 group-hover:from-amber-500/20 group-hover:to-orange-500/20 transition-all duration-700 shadow-lg shadow-amber-500/5 backdrop-blur-sm border border-amber-500/10">
                        <Star className="w-7 h-7 text-amber-400 group-hover:text-amber-300 transition-colors duration-500" />
                      </div>
                      <div>
                        <CardTitle className="text-white dark:text-white text-3xl font-light tracking-[-0.01em] group-hover:text-amber-50 transition-colors duration-500">
                          Premium Services
                        </CardTitle>
                        <p className="text-slate-400/80 dark:text-slate-400/80 text-base font-light mt-2 tracking-[0.2px] group-hover:text-amber-200/80 transition-colors duration-500">
                          Enhance your project with additional capabilities
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {extraServices.map((service) => (
                        <div
                          key={service.id}
                          className={`flex items-start space-x-5 p-8 rounded-3xl border transition-all duration-700 cursor-pointer ${
                            selectedServices.includes(service.id)
                              ? "bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/30 shadow-2xl shadow-amber-500/10 backdrop-blur-sm"
                              : "bg-slate-900/[0.2] border-slate-700/30 hover:bg-slate-900/[0.3] hover:border-slate-600/40 shadow-lg shadow-black/5"
                          }`}
                          onClick={() => handleServiceChange(service.id, !selectedServices.includes(service.id))}
                        >
                          <Checkbox
                            id={service.id}
                            checked={selectedServices.includes(service.id)}
                            onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                            className="border-white/30 mt-2"
                          />
                          <div className="flex-1 space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <span className="text-2xl transition-transform duration-500 hover:scale-110">{service.icon}</span>
                                <Label
                                  htmlFor={service.id}
                                  className="text-white dark:text-white font-medium text-lg cursor-pointer tracking-[0.2px] hover:text-amber-100 transition-colors duration-500"
                                >
                                  {service.label}
                                </Label>
                              </div>
                              <span className="text-amber-300 font-bold text-base bg-gradient-to-r from-amber-500/15 to-orange-500/15 px-4 py-2 rounded-2xl border border-amber-500/20 hover:bg-gradient-to-r hover:from-amber-500/25 hover:to-orange-500/25 hover:border-amber-400/40 hover:text-amber-200 transition-all duration-500 backdrop-blur-sm">
                                +${service.price.toLocaleString()}
                              </span>
                            </div>
                            <p className="text-slate-300/90 dark:text-slate-300/90 text-base font-light leading-relaxed tracking-[0.1px]">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Premium Estimate Summary - Enhanced sidebar with emerald accents */}
            <aside className="lg:col-span-4">
              <div className="sticky top-8">
                <Card className="bg-gradient-to-br from-emerald-500/8 via-black/85 to-teal-500/8 border-emerald-500/25 backdrop-blur-3xl shadow-2xl shadow-emerald-900/25 hover:shadow-emerald-800/35 hover:border-emerald-400/40 transition-all duration-700 overflow-hidden">
                  {/* Refined header gradient with emerald accents */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/3 via-transparent to-teal-700/3 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-gray-950/10 pointer-events-none" />

                  <CardHeader className="relative z-10 pb-8 pt-8">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 shadow-xl shadow-emerald-500/15 hover:from-emerald-400/30 hover:to-teal-400/30 hover:shadow-emerald-500/25 transition-all duration-500">
                        <DollarSign className="w-7 h-7 text-emerald-300 hover:text-emerald-200 transition-colors duration-300" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-2xl font-light tracking-wide hover:text-emerald-50 transition-colors duration-300">
                          Investment Summary
                        </CardTitle>
                        <p className="text-emerald-300/80 text-base font-light mt-2 hover:text-emerald-200/80 transition-colors duration-300">Your customized estimate</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-8 pb-8">
                    {/* Project Details - Refined styling */}
                    <div className="space-y-6 p-6 bg-gradient-to-br from-slate-900/30 to-gray-900/30 rounded-2xl border border-slate-700/20 shadow-inner shadow-black/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-slate-800/50 hover:to-gray-900/50 hover:border-slate-600/30 transition-all duration-500">
                      <h3 className="text-emerald-300 font-medium text-lg tracking-wide uppercase text-sm">Project Overview</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 px-4 rounded-xl bg-gradient-to-r from-slate-900/30 to-gray-900/30 border border-slate-700/20 hover:border-slate-600/30 transition-all duration-300">
                          <span className="text-gray-300 font-light">Team Structure:</span>
                          <span className="text-white font-medium">
                            {teamSize === "designer" ? "Solo Designer" : "Full Team"}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-3 px-4 rounded-xl bg-gradient-to-r from-slate-900/30 to-gray-900/30 border border-slate-700/20 hover:border-slate-600/30 transition-all duration-300">
                          <span className="text-gray-300 font-light">Hourly Rate:</span>
                          <span className="text-white font-medium">${hourlyRate}/hour</span>
                        </div>
                        <div className="flex justify-between items-center py-3 px-4 rounded-xl bg-gradient-to-r from-slate-900/30 to-gray-900/30 border border-slate-700/20 hover:border-slate-600/30 transition-all duration-300">
                          <span className="text-gray-300 font-light">Timeline:</span>
                          <span className="text-white font-medium">{durationLabel}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 px-4 rounded-xl bg-gradient-to-r from-slate-900/30 to-gray-900/30 border border-slate-700/20 hover:border-slate-600/30 transition-all duration-300">
                          <span className="text-gray-300 font-light">Total Hours:</span>
                          <span className="text-white font-medium">{totalHours} hours</span>
                        </div>
                      </div>
                    </div>

                    <Separator className="bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

                    {/* Cost Breakdown - Enhanced */}
                    <div className="space-y-6">
                      <h3 className="text-emerald-300 font-medium text-lg tracking-wide mb-6 uppercase text-sm">Investment Breakdown</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-700/20 hover:border-emerald-600/30 transition-all duration-300">
                          <span className="text-gray-300 font-light">Base Investment:</span>
                          <span className="text-white font-medium">${baseCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-700/20 hover:border-emerald-600/30 transition-all duration-300">
                          <span className="text-gray-300 font-light">Premium Services:</span>
                          <span className="text-white font-medium">${extraServicesCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-700/20 hover:border-emerald-600/30 transition-all duration-300">
                          <span className="text-gray-300 font-light">Complexity Factor:</span>
                          <span className="text-emerald-300 font-medium">{complexityMultiplier}×</span>
                        </div>
                      </div>
                    </div>

                    <Separator className="bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

                    {/* Total Investment - Premium styling with emerald accents */}
                    <div className="bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-2xl p-8 border border-emerald-500/25 shadow-xl shadow-emerald-500/15 hover:shadow-emerald-500/25 hover:border-emerald-400/35 transition-all duration-500">
                      <div className="text-center">
                        <p className="text-emerald-300/80 text-sm font-light mb-3 tracking-wide uppercase">Total Investment</p>
                        <p className="text-white text-4xl font-light tracking-wide mb-2">${totalCost.toLocaleString()}</p>
                        <p className="text-emerald-300/60 text-sm font-light">Estimated project value</p>
                      </div>
                    </div>

                    {/* Payment Structure - Refined */}
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-slate-700/30 to-gray-800/30 rounded-2xl p-6 space-y-4 border border-slate-600/30 shadow-inner shadow-black/20 backdrop-blur-sm hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-gray-800/50 hover:border-slate-500/50 transition-all duration-500">
                        <div className="flex items-center gap-3 text-gray-200/90 font-medium text-sm">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span className="tracking-wide">Payment Structure</span>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between hover:text-emerald-100 transition-colors duration-300">
                            <span className="text-gray-200/80 font-light">Initial Payment (50%):</span>
                            <span className="text-white font-medium">${(totalCost * 0.5).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between hover:text-emerald-100 transition-colors duration-300">
                            <span className="text-gray-200/80 font-light">Final Payment (50%):</span>
                            <span className="text-white font-medium">${(totalCost * 0.5).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      {/* Premium CTA Buttons - Enhanced with emerald gradients */}
                      <div className="space-y-4">
                        <Button className="w-full btn-primary h-14 font-medium tracking-wide text-base group">
                          <Clock className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                          Request Detailed Proposal
                          <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>

                        <Button
                          variant="outline"
                          className="w-full btn-secondary h-14 font-light tracking-wide group"
                        >
                          <Calendar className="w-5 h-5 mr-3 transition-transform duration-300" />
                          Schedule Consultation
                        </Button>
                      </div>
                    </div>

                    {/* Professional Disclaimer - Refined */}
                    <div className="text-center pt-6 border-t border-emerald-500/20">
                      <p className="text-gray-400 text-sm font-light leading-relaxed">
                        * Estimates are preliminary and subject to project scope refinement
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>

          {/* Expanded Style Guide Section */}
          {/* Refined Modern Style Guide Section */}
          <section className="mt-32 mb-16">
            <div className="text-center mb-20 space-y-8">
              <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-green-400/10 via-emerald-400/15 to-green-400/10 border border-green-400/25 backdrop-blur-xl shadow-2xl shadow-green-500/10 group hover:border-green-300/40 hover:bg-gradient-to-r hover:from-green-400/15 hover:via-emerald-400/20 hover:to-green-400/15 transition-all duration-700">
                <div className="p-2 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 shadow-lg shadow-green-500/20 group-hover:from-green-400/30 group-hover:to-emerald-400/30 transition-all duration-500">
                  <Palette className="w-5 h-5 text-green-300 group-hover:text-green-200 transition-colors duration-300" />
                </div>
                <span className="text-green-200 text-base font-medium tracking-wide group-hover:text-green-100 transition-colors duration-300">
                  Advanced Design System
                </span>
              </div>

              <div className="space-y-8">
                <h2 className="text-5xl md:text-7xl font-extralight bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent tracking-tight leading-[0.9]">
                  Interactive
                  <br />
                  <span className="font-light bg-gradient-to-r from-green-300 via-emerald-200 to-green-300 bg-clip-text text-transparent">
                    Components
                  </span>
                </h2>

                <p className="text-gray-100/90 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
                  Modern, responsive components with sophisticated interactions and seamless user experiences
                </p>
              </div>
            </div>

            {/* Foundation Elements - Enhanced */}
            <div className="grid lg:grid-cols-3 gap-10 mb-20">
              {/* Color Palette - Refined */}
              <Card className="group bg-gradient-to-br from-black/80 via-slate-950/90 to-gray-950/80 border-gray-800/30 backdrop-blur-3xl shadow-2xl shadow-black/40 hover:shadow-green-900/25 hover:border-green-600/40 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/3 via-transparent to-emerald-500/3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <CardHeader className="relative z-10 pb-8 pt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-green-500/15 to-emerald-500/15 shadow-xl shadow-green-500/10 group-hover:from-green-400/25 group-hover:to-emerald-400/25 group-hover:shadow-green-500/20 transition-all duration-500">
                      <Palette className="w-6 h-6 text-green-300 group-hover:text-green-200 transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-white text-2xl font-light tracking-wide group-hover:text-green-50 transition-colors duration-300">
                      Color System
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 space-y-8 pb-8">
                  <div className="space-y-6">
                    <div className="text-sm text-gray-200 font-medium uppercase tracking-[0.2em]">Primary Palette</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="h-16 bg-gradient-to-br from-green-400 via-green-500 to-emerald-500 rounded-2xl shadow-2xl shadow-green-500/30 border border-green-400/20 group-hover:shadow-green-500/50 transition-all duration-500"></div>
                        <div className="text-xs text-gray-300 font-light text-center">Emerald Gradient</div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-16 bg-gradient-to-br from-slate-900 via-black to-gray-950 rounded-2xl shadow-2xl shadow-black/50 border border-slate-700/30"></div>
                        <div className="text-xs text-gray-300 font-light text-center">Dark Foundation</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="text-sm text-gray-200 font-medium uppercase tracking-[0.2em]">Accent Shades</div>
                    <div className="grid grid-cols-5 gap-3">
                      {[
                        { color: "bg-green-400", label: "400" },
                        { color: "bg-green-500", label: "500" },
                        { color: "bg-emerald-500", label: "E500" },
                        { color: "bg-green-600", label: "600" },
                        { color: "bg-emerald-600", label: "E600" },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div
                            className={`h-12 ${item.color} rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
                          ></div>
                          <div className="text-xs text-gray-400 font-light text-center">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Typography - Enhanced */}
              <Card className="group bg-gradient-to-br from-slate-950/80 via-black/90 to-gray-950/80 border-slate-700/30 backdrop-blur-3xl shadow-2xl shadow-black/40 hover:shadow-slate-800/25 hover:border-slate-500/50 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/5 via-transparent to-gray-700/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <CardHeader className="relative z-10 pb-8 pt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-slate-600/20 to-gray-700/20 shadow-xl shadow-slate-500/10 group-hover:from-slate-500/30 group-hover:to-gray-600/30 group-hover:shadow-slate-500/20 transition-all duration-500">
                      <Type className="w-6 h-6 text-slate-300 group-hover:text-slate-200 transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-white text-2xl font-light tracking-wide group-hover:text-gray-50 transition-colors duration-300">
                      Typography
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 space-y-8 pb-8">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="text-3xl font-extralight text-white tracking-wide">Display Light</div>
                      <div className="text-sm text-gray-400 font-light">font-extralight • tracking-wide</div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-xl font-light text-white">Heading Light</div>
                      <div className="text-sm text-gray-400 font-light">font-light • tracking-normal</div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-base font-medium text-gray-200">Body Medium</div>
                      <div className="text-sm text-gray-400 font-light">font-medium • leading-relaxed</div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-sm font-light text-gray-300 uppercase tracking-[0.2em]">Caption Style</div>
                      <div className="text-sm text-gray-400 font-light">uppercase • tracking-[0.2em]</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Component Showcase - Enhanced */}
              <Card className="group bg-gradient-to-br from-gray-950/80 via-black/90 to-black/80 border-gray-800/30 backdrop-blur-3xl shadow-2xl shadow-black/40 hover:shadow-gray-900/25 hover:border-green-500/40 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/3 via-transparent to-emerald-500/3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <CardHeader className="relative z-10 pb-8 pt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-green-500/15 to-emerald-500/15 shadow-xl shadow-green-500/10 group-hover:from-green-400/25 group-hover:to-emerald-400/25 group-hover:shadow-green-500/20 transition-all duration-500">
                      <Layout className="w-6 h-6 text-green-300 group-hover:text-green-200 transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-white text-2xl font-light tracking-wide group-hover:text-green-50 transition-colors duration-300">
                      Components
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 space-y-8 pb-8">
                  <div className="space-y-6">
                    <div className="text-sm text-gray-200 font-medium uppercase tracking-[0.2em]">Button Variants</div>
                    <div className="space-y-4">
                      <Button className="w-full h-12 btn-primary glow-button">
                        Primary Action
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full h-12 btn-outline glow-button"
                      >
                        Secondary Action
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="text-sm text-gray-200 font-medium uppercase tracking-[0.2em]">Surface Variants</div>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-slate-800/40 to-gray-900/40 rounded-xl border border-slate-600/30 shadow-inner shadow-black/20 backdrop-blur-sm hover:bg-gradient-to-r hover:from-slate-800/60 hover:to-gray-900/60 hover:border-slate-500/50 transition-all duration-500">
                        <div className="text-sm text-white font-light">Subtle Surface</div>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-green-500/8 to-emerald-500/8 rounded-xl border border-green-500/25 shadow-lg shadow-green-500/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-green-500/15 hover:to-emerald-500/15 hover:border-green-400/40 transition-all duration-500">
                        <div className="text-sm text-green-200 font-light">Accent Surface</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interactive Components - Completely Redesigned */}
            <div className="space-y-16">
              {/* Modern Accordion */}
              <Card className="group bg-gradient-to-br from-black/90 via-slate-950/95 to-gray-950/90 border-gray-800/40 backdrop-blur-3xl shadow-2xl shadow-black/50 hover:shadow-green-900/30 hover:border-green-600/50 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/2 via-transparent to-emerald-500/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <CardHeader className="relative z-10 pb-8 pt-10">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500/15 to-emerald-500/15 shadow-xl shadow-green-500/15 group-hover:from-green-400/25 group-hover:to-emerald-400/25 group-hover:shadow-green-500/25 transition-all duration-500">
                      <List className="w-7 h-7 text-green-300 group-hover:text-green-200 transition-colors duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-3xl font-light tracking-wide group-hover:text-green-50 transition-colors duration-300">
                        Accordion System
                      </CardTitle>
                      <p className="text-gray-300/80 text-base font-light mt-2 group-hover:text-green-100/80 transition-colors duration-300">
                        Expandable content sections with fluid animations
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 pb-10">
                  <Accordion type="single" collapsible className="space-y-6">
                    <AccordionItem
                      value="item-1"
                      className="border-none bg-gradient-to-r from-slate-900/30 to-gray-950/30 rounded-2xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-black/40 transition-all duration-500"
                    >
                      <AccordionTrigger className="px-8 py-6 text-white font-medium text-lg tracking-wide hover:text-green-100 transition-colors duration-300 hover:no-underline [&[data-state=open]]:text-green-200 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-green-500/10 [&[data-state=open]]:to-emerald-500/10">
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 shadow-lg shadow-green-500/10">
                            <Sparkles className="w-5 h-5 text-green-300" />
                          </div>
                          Design Philosophy
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-8 pt-4">
                        <div className="bg-gradient-to-r from-slate-700/20 to-gray-800/20 rounded-xl p-6 border border-slate-600/20">
                          <p className="text-gray-200/90 font-light leading-relaxed text-base">
                            Our design system embraces{" "}
                            <span className="text-green-300 font-medium">minimalist elegance</span> through carefully
                            crafted gradients, purposeful spacing, and sophisticated color relationships. Every element
                            serves both functional and aesthetic purposes, creating interfaces that feel both
                            <span className="text-green-300 font-medium"> premium and accessible</span>.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-2"
                      className="border-none bg-gradient-to-r from-slate-800/30 to-gray-900/30 rounded-2xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-black/40 transition-all duration-500"
                    >
                      <AccordionTrigger className="px-8 py-6 text-white font-medium text-lg tracking-wide hover:text-green-100 transition-colors duration-300 hover:no-underline [&[data-state=open]]:text-green-200 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-green-500/10 [&[data-state=open]]:to-emerald-500/10">
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 shadow-lg shadow-green-500/10">
                            <Palette className="w-5 h-5 text-green-300" />
                          </div>
                          Color Psychology
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-8 pt-4">
                        <div className="bg-gradient-to-r from-slate-700/20 to-gray-800/20 rounded-xl p-6 border border-slate-600/20">
                          <p className="text-gray-200/90 font-light leading-relaxed text-base">
                            The <span className="text-green-300 font-medium">emerald and green palette</span> evokes
                            growth, prosperity, and innovation while maintaining professional sophistication. Combined
                            with deep blacks and grays, it creates{" "}
                            <span className="text-green-300 font-medium">visual depth</span> that reduces eye strain and
                            enhances focus on key interactive elements.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-3"
                      className="border-none bg-gradient-to-r from-slate-800/30 to-gray-900/30 rounded-2xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-black/40 transition-all duration-500"
                    >
                      <AccordionTrigger className="px-8 py-6 text-white font-medium text-lg tracking-wide hover:text-green-100 transition-colors duration-300 hover:no-underline [&[data-state=open]]:text-green-200 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-green-500/10 [&[data-state=open]]:to-emerald-500/10">
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 shadow-lg shadow-green-500/10">
                            <Zap className="w-5 h-5 text-green-300" />
                          </div>
                          Interaction Design
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-8 pt-4">
                        <div className="bg-gradient-to-r from-slate-700/20 to-gray-800/20 rounded-xl p-6 border border-slate-600/20">
                          <p className="text-gray-200/90 font-light leading-relaxed text-base">
                            Every interaction follows{" "}
                            <span className="text-green-300 font-medium">natural motion principles</span>
                            with carefully timed transitions (300-700ms) that feel responsive yet elegant. Color-based
                            feedback provides clear state changes without jarring movements, creating a
                            <span className="text-green-300 font-medium"> fluid, premium experience</span>.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Refined Toggle Switches */}
              <Card className="group bg-gradient-to-br from-slate-950/90 via-black/95 to-gray-950/90 border-slate-700/40 backdrop-blur-3xl shadow-2xl shadow-black/50 hover:shadow-slate-800/30 hover:border-slate-500/60 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/3 via-transparent to-gray-700/3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <CardHeader className="relative z-10 pb-8 pt-10">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-600/20 to-gray-700/20 shadow-xl shadow-slate-500/15 group-hover:from-slate-500/30 group-hover:to-gray-600/30 group-hover:shadow-slate-500/25 transition-all duration-500">
                      <Settings className="w-7 h-7 text-slate-300 group-hover:text-slate-200 transition-colors duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-3xl font-light tracking-wide group-hover:text-gray-50 transition-colors duration-300">
                        Toggle Controls
                      </CardTitle>
                      <p className="text-gray-300/80 text-base font-light mt-2 group-hover:text-gray-200/80 transition-colors duration-300">
                        Elegant switches for settings and preferences
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 pb-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      {
                        key: "notifications",
                        label: "Push Notifications",
                        description: "Real-time updates and alerts",
                        icon: <Bell className="w-5 h-5" />,
                      },
                      {
                        key: "darkMode",
                        label: "Dark Theme",
                        description: "Optimized for low-light environments",
                        icon: <Eye className="w-5 h-5" />,
                      },
                      {
                        key: "autoSave",
                        label: "Auto Save",
                        description: "Automatically preserve your work",
                        icon: <Shield className="w-5 h-5" />,
                      },
                      {
                        key: "analytics",
                        label: "Usage Analytics",
                        description: "Help improve our services",
                        icon: <ZapIcon className="w-5 h-5" />,
                      },
                    ].map((toggle) => (
                      <div
                        key={toggle.key}
                        className="group/toggle p-6 bg-gradient-to-r from-slate-800/40 to-gray-900/40 rounded-2xl border border-slate-600/30 shadow-lg shadow-black/20 hover:bg-gradient-to-r hover:from-slate-800/60 hover:to-gray-900/60 hover:border-slate-500/50 hover:shadow-black/40 transition-all duration-500 backdrop-blur-sm"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-slate-600/30 to-gray-700/30 shadow-lg shadow-slate-500/10 group-hover/toggle:from-slate-500/40 group-hover/toggle:to-gray-600/40 group-hover/toggle:shadow-slate-500/20 transition-all duration-500">
                              <div className="text-slate-300 group-hover/toggle:text-slate-200 transition-colors duration-300">
                                {toggle.icon}
                              </div>
                            </div>
                            <div>
                              <div className="text-white font-medium text-lg group-hover/toggle:text-gray-50 transition-colors duration-300">
                                {toggle.label}
                              </div>
                              <div className="text-gray-400 text-sm font-light mt-1 group-hover/toggle:text-gray-300 transition-colors duration-300">
                                {toggle.description}
                              </div>
                            </div>
                          </div>
                          <div className="ml-4">
                            <Switch
                              checked={toggleStates[toggle.key as keyof typeof toggleStates]}
                              onCheckedChange={(checked) =>
                                setToggleStates((prev) => ({ ...prev, [toggle.key]: checked }))
                              }
                              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-green-500 data-[state=checked]:to-emerald-500 data-[state=checked]:shadow-lg data-[state=checked]:shadow-green-500/25 scale-110 transition-all duration-300"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Filters & Navigation */}
              <Card className="group bg-gradient-to-br from-gray-950/90 via-black/95 to-black/90 border-gray-800/40 backdrop-blur-3xl shadow-2xl shadow-black/50 hover:shadow-gray-900/30 hover:border-green-500/50 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/2 via-transparent to-emerald-500/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <CardHeader className="relative z-10 pb-8 pt-10">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500/15 to-emerald-500/15 shadow-xl shadow-green-500/15 group-hover:from-green-400/25 group-hover:to-emerald-400/25 group-hover:shadow-green-500/25 transition-all duration-500">
                      <Filter className="w-7 h-7 text-green-300 group-hover:text-green-200 transition-colors duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-3xl font-light tracking-wide group-hover:text-green-50 transition-colors duration-300">
                        Navigation System
                      </CardTitle>
                      <p className="text-gray-300/80 text-base font-light mt-2 group-hover:text-green-100/80 transition-colors duration-300">
                        Intuitive filtering and navigation controls
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 space-y-12 pb-10">
                  {/* Enhanced Filter Buttons */}
                  <div className="space-y-6">
                    <div className="text-sm text-gray-200 font-medium uppercase tracking-[0.2em]">Filter Controls</div>
                    <div className="flex flex-wrap gap-4">
                      {["all", "design", "development", "marketing", "analytics"].map((filter) => (
                        <Button
                          key={filter}
                          variant={activeFilter === filter ? "default" : "outline"}
                          onClick={() => setActiveFilter(filter)}
                          className={`capitalize h-12 px-6 rounded-2xl font-medium tracking-wide transition-all duration-500 glow-button ${
                            activeFilter === filter
                              ? "btn-primary"
                              : "btn-outline"
                          }`}
                        >
                          {filter}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Refined View Mode Toggle */}
                  <div className="space-y-6">
                    <div className="text-sm text-gray-200 font-medium uppercase tracking-[0.2em]">View Options</div>
                    <div className="flex gap-3 p-2 bg-gradient-to-r from-slate-800/50 to-gray-900/50 rounded-2xl border border-slate-600/30 w-fit shadow-inner shadow-black/20 backdrop-blur-sm">
                      <Button
                        variant={viewMode === "grid" ? "default" : "ghost"}
                        onClick={() => setViewMode("grid")}
                        className={`p-4 rounded-xl transition-all duration-500 glow-button ${
                          viewMode === "grid"
                            ? "btn-primary"
                            : "btn-ghost"
                        }`}
                      >
                        <Grid className="w-5 h-5" />
                      </Button>
                      <Button
                        variant={viewMode === "list" ? "default" : "ghost"}
                        onClick={() => setViewMode("list")}
                        className={`p-4 rounded-xl transition-all duration-500 glow-button ${
                          viewMode === "list"
                            ? "btn-primary"
                            : "btn-ghost"
                        }`}
                      >
                        <List className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Premium Tab Navigation */}
                  <div className="space-y-6">
                    <div className="text-sm text-gray-200 font-medium uppercase tracking-[0.2em]">Tab Navigation</div>
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-slate-600/30 rounded-2xl p-2 shadow-inner shadow-black/20 backdrop-blur-sm">
                        <TabsTrigger
                          value="overview"
                          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-emerald-500/25 text-slate-300 hover:text-slate-200 hover:bg-slate-700/50 transition-all duration-500 rounded-xl font-medium"
                        >
                          Overview
                        </TabsTrigger>
                        <TabsTrigger
                          value="details"
                          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-emerald-500/25 text-slate-300 hover:text-slate-200 hover:bg-slate-700/50 transition-all duration-500 rounded-xl font-medium"
                        >
                          Details
                        </TabsTrigger>
                        <TabsTrigger
                          value="settings"
                          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-emerald-500/25 text-slate-300 hover:text-slate-200 hover:bg-slate-700/50 transition-all duration-500 rounded-xl font-medium"
                        >
                          Settings
                        </TabsTrigger>
                        <TabsTrigger
                          value="help"
                          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-emerald-500/25 text-slate-300 hover:text-slate-200 hover:bg-slate-700/50 transition-all duration-500 rounded-xl font-medium"
                        >
                          Help
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent
                        value="overview"
                        className="mt-8 p-8 bg-slate-800/30 rounded-2xl border border-slate-600/30 shadow-lg shadow-black/20 backdrop-blur-sm"
                      >
                        <div className="text-white font-light">
                          <h3 className="text-2xl mb-4 font-light tracking-wide">Project Overview</h3>
                          <p className="text-gray-200/90 text-base leading-relaxed">
                            Comprehensive project insights with real-time metrics, progress tracking, and performance
                            analytics designed to keep your team aligned and productive.
                          </p>
                        </div>
                      </TabsContent>
                      <TabsContent
                        value="details"
                        className="mt-8 p-8 bg-slate-800/30 rounded-2xl border border-slate-600/30 shadow-lg shadow-black/20 backdrop-blur-sm"
                      >
                        <div className="text-white font-light">
                          <h3 className="text-2xl mb-4 font-light tracking-wide">Detailed Information</h3>
                          <p className="text-gray-200/90 text-base leading-relaxed">
                            In-depth project specifications, technical requirements, and implementation guidelines with
                            collaborative documentation and version control.
                          </p>
                        </div>
                      </TabsContent>
                      <TabsContent
                        value="settings"
                        className="mt-8 p-8 bg-slate-800/30 rounded-2xl border border-slate-600/30 shadow-lg shadow-black/20 backdrop-blur-sm"
                      >
                        <div className="text-white font-light">
                          <h3 className="text-2xl mb-4 font-light tracking-wide">Configuration</h3>
                          <p className="text-gray-200/90 text-base leading-relaxed">
                            Personalize your workspace with custom preferences, notification settings, integration
                            options, and advanced workflow configurations.
                          </p>
                        </div>
                      </TabsContent>
                      <TabsContent
                        value="help"
                        className="mt-8 p-8 bg-slate-800/30 rounded-2xl border border-slate-600/30 shadow-lg shadow-black/20 backdrop-blur-sm"
                      >
                        <div className="text-white font-light">
                          <h3 className="text-2xl mb-4 font-light tracking-wide">Support Center</h3>
                          <p className="text-gray-200/90 text-base leading-relaxed">
                            Access comprehensive documentation, video tutorials, community forums, and direct support
                            channels for technical assistance.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>

                  {/* Left-Aligned Tab Navigation */}
                  <div className="space-y-6">
                    <div className="text-sm text-gray-200 font-medium uppercase tracking-[0.2em]">Left-Aligned Tabs</div>
                    <Tabs defaultValue="dashboard" className="w-full">
                      <div className="flex gap-8">
                        <TabsList className="flex flex-col h-fit bg-slate-800/50 border border-slate-600/30 rounded-2xl p-2 shadow-inner shadow-black/20 backdrop-blur-sm">
                          <TabsTrigger
                            value="dashboard"
                            className="w-full justify-start data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-emerald-500/25 text-slate-300 hover:text-slate-200 hover:bg-slate-700/50 transition-all duration-500 rounded-xl font-medium px-6 py-3"
                          >
                            Dashboard
                          </TabsTrigger>
                          <TabsTrigger
                            value="analytics"
                            className="w-full justify-start data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-emerald-500/25 text-slate-300 hover:text-slate-200 hover:bg-slate-700/50 transition-all duration-500 rounded-xl font-medium px-6 py-3"
                          >
                            Analytics
                          </TabsTrigger>
                          <TabsTrigger
                            value="reports"
                            className="w-full justify-start data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-emerald-500/25 text-slate-300 hover:text-slate-200 hover:bg-slate-700/50 transition-all duration-500 rounded-xl font-medium px-6 py-3"
                          >
                            Reports
                          </TabsTrigger>
                          <TabsTrigger
                            value="team"
                            className="w-full justify-start data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-emerald-500/25 text-slate-300 hover:text-slate-200 hover:bg-slate-700/50 transition-all duration-500 rounded-xl font-medium px-6 py-3"
                          >
                            Team
                          </TabsTrigger>
                        </TabsList>
                        <div className="flex-1">
                          <TabsContent
                            value="dashboard"
                            className="mt-0 p-8 bg-slate-800/30 rounded-2xl border border-slate-600/30 shadow-lg shadow-black/20 backdrop-blur-sm"
                          >
                            <div className="text-white font-light">
                              <h3 className="text-2xl mb-4 font-light tracking-wide">Dashboard</h3>
                              <p className="text-gray-200/90 text-base leading-relaxed">
                                Real-time project dashboard with key performance indicators, task progress, and team
                                activity monitoring for comprehensive project oversight.
                              </p>
                            </div>
                          </TabsContent>
                          <TabsContent
                            value="analytics"
                            className="mt-0 p-8 bg-slate-800/30 rounded-2xl border border-slate-600/30 shadow-lg shadow-black/20 backdrop-blur-sm"
                          >
                            <div className="text-white font-light">
                              <h3 className="text-2xl mb-4 font-light tracking-wide">Analytics</h3>
                              <p className="text-gray-200/90 text-base leading-relaxed">
                                Advanced analytics and insights with data visualization, trend analysis, and predictive
                                modeling to optimize project performance and resource allocation.
                              </p>
                            </div>
                          </TabsContent>
                          <TabsContent
                            value="reports"
                            className="mt-0 p-8 bg-slate-800/30 rounded-2xl border border-slate-600/30 shadow-lg shadow-black/20 backdrop-blur-sm"
                          >
                            <div className="text-white font-light">
                              <h3 className="text-2xl mb-4 font-light tracking-wide">Reports</h3>
                              <p className="text-gray-200/90 text-base leading-relaxed">
                                Comprehensive reporting suite with customizable templates, automated generation, and
                                export capabilities for stakeholder communication and compliance.
                              </p>
                            </div>
                          </TabsContent>
                          <TabsContent
                            value="team"
                            className="mt-0 p-8 bg-slate-800/30 rounded-2xl border border-slate-600/30 shadow-lg shadow-black/20 backdrop-blur-sm"
                          >
                            <div className="text-white font-light">
                              <h3 className="text-2xl mb-4 font-light tracking-wide">Team Management</h3>
                              <p className="text-gray-200/90 text-base leading-relaxed">
                                Team collaboration tools with role management, permission controls, communication
                                channels, and performance tracking for enhanced productivity.
                              </p>
                            </div>
                          </TabsContent>
                        </div>
                      </div>
                    </Tabs>
                  </div>
                </CardContent>
              </Card>

              {/* Premium Carousel Component */}
              <Card className="group bg-gradient-to-br from-black/80 via-slate-900/90 to-gray-950/80 border-gray-700/40 backdrop-blur-3xl shadow-2xl shadow-black/50 hover:shadow-green-900/30 hover:border-green-600/50 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/2 via-transparent to-emerald-500/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <CardHeader className="relative z-10 pb-8 pt-10">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500/15 to-emerald-500/15 shadow-xl shadow-green-500/15 group-hover:from-green-400/25 group-hover:to-emerald-400/25 group-hover:shadow-green-500/25 transition-all duration-500">
                      <ArrowRight className="w-7 h-7 text-green-300 group-hover:text-green-200 transition-colors duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-3xl font-light tracking-wide group-hover:text-green-50 transition-colors duration-300">
                        Content Carousel
                      </CardTitle>
                      <p className="text-gray-300/80 text-base font-light mt-2 group-hover:text-green-100/80 transition-colors duration-300">
                        Smooth content transitions with elegant controls
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 pb-10">
                  <div className="relative">
                    <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
                      <div
                        className="flex transition-transform duration-700 ease-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                      >
                        {[
                          {
                            title: "Sophisticated Design",
                            description:
                              "Meticulously crafted visual hierarchy with purposeful gradients, refined typography, and thoughtful spacing that creates premium user experiences.",
                            color: "from-green-500/15 via-emerald-500/10 to-green-500/15",
                            accent: "green",
                            icon: <Sparkles className="w-8 h-8" />,
                          },
                          {
                            title: "Fluid Interactions",
                            description:
                              "Color-based hover effects and seamless transitions that feel natural and responsive, providing clear feedback without overwhelming the interface.",
                            color: "from-slate-700/15 via-gray-800/10 to-slate-700/15",
                            accent: "slate",
                            icon: <Zap className="w-8 h-8" />,
                          },
                          {
                            title: "Unified System",
                            description:
                              "Consistent design tokens and component patterns ensure cohesive experiences across all touchpoints while maintaining flexibility for customization.",
                            color: "from-green-600/15 via-slate-700/10 to-emerald-600/15",
                            accent: "emerald-500",
                            icon: <Layout className="w-8 h-8" />,
                          },
                        ].map((slide, index) => (
                          <div key={index} className="w-full flex-shrink-0">
                            <div
                              className={`p-12 bg-gradient-to-br ${slide.color} border border-${slide.accent}/20 text-center space-y-8 min-h-[300px] flex flex-col justify-center backdrop-blur-sm`}
                            >
                              <div
                                className={`mx-auto p-4 rounded-2xl bg-gradient-to-br from-${slide.accent}/20 to-${slide.accent}/10 shadow-xl shadow-${slide.accent}/10 w-fit`}
                              >
                                <div className={`text-${slide.accent === "slate-500" ? "slate-300" : "green-300"}`}>
                                  {slide.icon}
                                </div>
                              </div>
                              <h3 className="text-3xl font-light text-white tracking-wide">{slide.title}</h3>
                              <p className="text-gray-200/90 font-light leading-relaxed text-lg max-w-2xl mx-auto">
                                {slide.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Carousel Controls */}
                    <div className="flex items-center justify-between mt-10">
                      <Button
                        variant="outline"
                        onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 2))}
                        className="btn-outline glow-button group/btn"
                      >
                        <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-1 transition-transform duration-300" />
                      </Button>

                      <div className="flex gap-4">
                        {[0, 1, 2].map((index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-3 rounded-full transition-all duration-500 ${
                              currentSlide === index
                                ? "bg-gradient-to-r from-green-500 to-emerald-500 w-12 shadow-lg shadow-green-500/25"
                                : "bg-slate-600 hover:bg-slate-500 w-3"
                            }`}
                          />
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        onClick={() => setCurrentSlide((prev) => (prev < 2 ? prev + 1 : 0))}
                        className="btn-outline glow-button group/btn"
                      >
                        <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Luxury Card Variants */}
              <Card className="group bg-gradient-to-br from-slate-900/80 via-black/90 to-gray-950/80 border-slate-600/40 backdrop-blur-3xl shadow-2xl shadow-black/50 hover:shadow-slate-800/30 hover:border-slate-500/60 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/3 via-transparent to-gray-700/3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <CardHeader className="relative z-10 pb-8 pt-10">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-600/20 to-gray-700/20 shadow-xl shadow-slate-500/15 group-hover:from-slate-500/30 group-hover:to-gray-600/30 group-hover:shadow-slate-500/25 transition-all duration-500">
                      <Layout className="w-7 h-7 text-slate-300 group-hover:text-slate-200 transition-colors duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-3xl font-light tracking-wide group-hover:text-gray-50 transition-colors duration-300">
                        Premium Cards
                      </CardTitle>
                      <p className="text-gray-300/80 text-base font-light mt-2 group-hover:text-gray-200/80 transition-colors duration-300">
                        Sophisticated card designs for diverse content types
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 pb-10">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Premium Feature Card */}
                    <div className="group/card p-8 bg-gradient-to-br from-green-500/12 to-emerald-500/12 rounded-2xl border border-green-500/25 shadow-xl shadow-green-500/15 hover:bg-gradient-to-br hover:from-green-500/20 hover:to-emerald-500/20 hover:border-green-400/40 hover:shadow-green-500/25 transition-all duration-700 cursor-pointer backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-green-700/25 to-emerald-700/25 shadow-xl shadow-green-700/15 group-hover/card:from-green-600/35 group-hover/card:to-emerald-600/35 group-hover/card:shadow-green-700/25 transition-all duration-500">
                          <Star className="w-6 h-6 text-green-300 group-hover/card:text-green-200 transition-colors duration-300" />
                        </div>
                        <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30 px-4 py-1 rounded-full font-medium">
                          Featured
                        </Badge>
                      </div>
                      <h3 className="text-white font-medium text-xl mb-4 group-hover/card:text-green-50 transition-colors duration-300 tracking-wide">
                        Premium Experience
                      </h3>
                      <p className="text-gray-200/90 text-base font-light leading-relaxed mb-6 group-hover/card:text-green-100/90 transition-colors duration-300">
                        Advanced functionality with enhanced user experience, premium styling, and sophisticated
                        interactions.
                      </p>
                      <div className="flex items-center gap-3">
                        <Button
                          size="sm"
                          className="btn-primary"
                        >
                          Explore
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="btn-ghost"
                        >
                          <Heart className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>

                    {/* Elegant Content Card */}
                    <div className="group/card p-8 bg-gradient-to-br from-slate-800/40 to-gray-900/40 rounded-2xl border border-slate-600/30 shadow-xl shadow-black/25 hover:bg-gradient-to-br hover:from-slate-800/60 hover:to-gray-900/60 hover:border-slate-500/50 hover:shadow-black/40 transition-all duration-700 cursor-pointer backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-slate-800/25 to-gray-900/25 shadow-xl shadow-slate-700/15 group-hover/card:from-slate-700/35 group-hover/card:to-gray-800/35 group-hover/card:shadow-slate-700/25 transition-all duration-500">
                          <Layout className="w-6 h-6 text-slate-300 group-hover/card:text-slate-200 transition-colors duration-300" />
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="btn-ghost"
                          >
                            <Share className="w-5 h-5" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="btn-ghost"
                          >
                            <Bookmark className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                      <h3 className="text-white font-medium text-xl mb-4 group-hover/card:text-gray-50 transition-colors duration-300 tracking-wide">
                        Content Showcase
                      </h3>
                      <p className="text-gray-200/90 text-base font-light leading-relaxed mb-6 group-hover/card:text-gray-100/90 transition-colors duration-300">
                        Clean content presentation with refined typography, subtle interactions, and elegant visual
                        hierarchy.
                      </p>
                      <div className="pt-6 border-t border-slate-600/30 group-hover/card:border-slate-500/40 transition-colors duration-300">
                        <div className="flex items-center justify-between text-sm text-gray-400 group-hover/card:text-gray-300 transition-colors duration-300">
                          <span className="font-light">Updated 2 hours ago</span>
                          <span className="font-medium">Design System</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Dynamic Card */}
                    <div className="group/card p-8 bg-gradient-to-br from-gray-950/50 to-black/50 rounded-2xl border border-gray-700/30 shadow-xl shadow-black/25 hover:bg-gradient-to-br hover:from-gray-950/70 hover:to-black/70 hover:border-green-500/40 hover:shadow-green-900/20 transition-all duration-700 cursor-pointer backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-gray-900/25 to-slate-950/25 shadow-xl shadow-gray-700/10 group-hover/card:from-green-700/20 group-hover/card:to-emerald-700/20 group-hover/card:shadow-green-700/15 transition-all duration-500">
                          <ZapIcon className="w-6 h-6 text-gray-400 group-hover/card:text-green-300 transition-colors duration-300" />
                        </div>
                        <Badge
                          variant="outline"
                          className="border-gray-600/40 text-gray-400 group-hover/card:border-green-500/30 group-hover/card:text-green-300 transition-all duration-300 px-4 py-1 rounded-full font-medium"
                        >
                          Interactive
                        </Badge>
                      </div>
                      <h3 className="text-white font-medium text-xl mb-4 group-hover/card:text-green-50 transition-colors duration-300 tracking-wide">
                        Dynamic Interface
                      </h3>
                      <p className="text-gray-200/90 text-base font-light leading-relaxed mb-6 group-hover/card:text-green-100/90 transition-colors duration-300">
                        Interactive elements with smooth state transitions, responsive feedback, and engaging
                        micro-interactions.
                      </p>
                      <Button
                        variant="outline"
                        className="btn-outline w-full h-12 font-medium"
                      >
                        Interact Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Design Principles */}
            <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Layers className="w-8 h-8" />,
                  title: "Layered Depth",
                  description:
                    "Sophisticated visual hierarchy through carefully orchestrated gradient layers, strategic shadows, and purposeful transparency effects",
                  accent: "green",
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Visual Clarity",
                  description:
                    "Optimized contrast ratios, thoughtful spacing, and refined typography ensure exceptional readability across all devices",
                  accent: "slate",
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Fluid Motion",
                  description:
                    "Color-based transitions and natural easing curves provide intuitive feedback without overwhelming the user experience",
                  accent: "green",
                },
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Design Tokens",
                  description:
                    "Unified system of colors, spacing, and typography ensures consistency while enabling flexible customization",
                  accent: "slate",
                },
              ].map((principle, index) => (
                <Card
                  key={index}
                  className={`group bg-gradient-to-br ${
                    principle.accent === "green"
                      ? "from-green-500/8 via-black/70 to-emerald-500/8 border-green-500/25 hover:border-green-400/50 hover:from-green-500/15 hover:to-emerald-500/15"
                      : "from-slate-900/50 via-black/70 to-gray-950/50 border-slate-600/30 hover:border-slate-500/60 hover:from-slate-900/70 hover:to-gray-950/70"
                  } backdrop-blur-3xl shadow-2xl shadow-black/30 transition-all duration-700 overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/1 via-transparent to-white/1 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <CardContent className="relative z-10 p-8 space-y-6">
                    <div
                      className={`p-4 rounded-2xl ${
                        principle.accent === "green"
                          ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-green-300 shadow-xl shadow-green-500/15 group-hover:from-green-400/30 group-hover:to-emerald-400/30 group-hover:text-green-200 group-hover:shadow-green-500/25"
                          : "bg-gradient-to-br from-slate-600/25 to-gray-700/25 text-slate-300 shadow-xl shadow-slate-500/15 group-hover:from-slate-500/35 group-hover:to-gray-600/35 group-hover:text-slate-200 group-hover:shadow-slate-500/25"
                      } transition-all duration-500 w-fit`}
                    >
                      {principle.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-xl mb-4 group-hover:text-gray-50 transition-colors duration-300 tracking-wide">
                        {principle.title}
                      </h3>
                      <p className="text-gray-200/90 text-base font-light leading-relaxed group-hover:text-gray-100/90 transition-colors duration-300">
                        {principle.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default memo(Component)