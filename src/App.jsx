import { CheckCircle, Star, Users, Clock, Shield, ArrowRight, MonitorPlay, HandHelping, NotebookPen, BookCheck, ShieldCheck, SquareCheckBig } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import "./index.css"

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-lg"><img className="w-50" src="./public/logo.png" alt="" /></span>
          </div>
          <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30">
            Limited Time Offer
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-5 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                  🌟 Breakthrough Discovery
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  The <span className="text-primary">Anti-Ageing</span> Diet Secrets
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
Capitalize on the global demand for health, wellness, and longevity - and start profiting from this timeless niche with a Ready-to-Sell PLR Package before your competitors do!
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-background"></div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">47,000+ lives transformed</span>
                </div>
                <div className="flex items-center  space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-yellow-300" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">4.9/5 rating</span>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="https://warriorplus.com/o2/a/wchzfqf/0" 
                  target="_blank"
                >
                  <Button
                    size="lg"
                    className="bg-primary mb-2 hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold cursor-pointer"
                  >
                    Get Instant Access Now with <span className="font-bold text-yellow-300">$11.95</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground">
                   ✅ 30-day money-back guarantee
                </p>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl">
                <CardContent className="p-8">
                  <img
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=320&fit=crop&crop=center"
                    alt="Anti-aging foods and supplements"
                    className="w-full h-80 object-cover rounded-lg mb-6"
                  />
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">What You'll Discover:</h3>
                    <div className="space-y-3">
                      {[
                        "5 High-Quality Training Videos",
                        "Professionally Written Training Guide",
                        "5 Audio Files",
                        "5 Raw Video Files",
                        "5 Expert Presentation slides (PPT)",
                        "High Converting Sales Copy",
                        "And More"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Health Enthusiasts Worldwide</h2>
            <p className="text-muted-foreground">Join thousands who have transformed their health and vitality</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { stat: "47,000+", label: "lives transformed", icon: Users },
              { stat: "15 Years", label: "Average Age Reversal", icon: Clock },
              { stat: "98%", label: "Success Rate", icon: Shield },
            ].map((item, i) => (
              <Card key={i} className="text-center p-6 bg-card/50 border-border/50">
                <CardContent className="space-y-4">
                  <item.icon className="w-12 h-12 text-primary mx-auto" />
                  <div className="text-3xl font-bold text-primary">{item.stat}</div>
                  <div className="text-muted-foreground">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-balance">
              Everything You Need to <span className="text-primary">Turn Back Time</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              A comprehensive system backed by cutting-edge research and real-world results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "High-Quality Training Videos",
                description: "covering anti-ageing nutrition, longevity, hormone balance, and lifestyle habits.",
                image: <MonitorPlay className="w-12 h-12 text-primary" />,
              },
              {
                title: "Expert Training Guide",
                description: "with superfoods, gut health tips, hydration, and anti-ageing strategies.",
                image: <HandHelping className="w-12 h-12 text-primary" />,
              },
              {
                title: "Step-by-Step Meal Plans & Easy Recipes",
                description: "for youthful skin, more energy, and better health.",
                image: <NotebookPen className="w-12 h-12 text-primary" />,
              },
              {
                title: "Ready-Made Promotional Content",
                description: "to attract and convert wellness-focused audiences.",
                image: <BookCheck className="w-12 h-12 text-primary" />,
              },
              {
                title: "Complete PLR Rights",
                description: "rebrand, customize, and keep 100% profits.",
                image: <ShieldCheck className="w-12 h-12 text-primary" />,
              },
              {
                title: "Done-for-You Lead Generation Assets",
                description: "to grow your email list and audience fast.",
                image: <SquareCheckBig className="w-12 h-12 text-primary" />,
              },
            ].map((feature, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50">
                <CardContent className="p-6 space-y-4">
                  {feature.image}
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-md leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>

            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-balance">
              Ready to Unlock Your Body's <span className="text-primary">Anti-Aging Potential?</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Don't let another day pass feeling older than you should. Start your transformation today with
              scientifically-proven strategies that work.
            </p>

            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 max-w-md mx-auto">
              <div className="space-y-4">
                <div className="text-center">
                  <p>🔥 Limited-Time Offer 🔥</p>
                  <p>Actual Price: $47</p>
                  <p>Regular Price: $27</p>
                  <p>👉 Today Only: Just <span className="font-bold text-green-700">$11.95</span></p>     
                  <div className="text-3xl font-bold text-primary mt-3">$11.95</div>
                </div>

                <a
                  href="https://warriorplus.com/o2/a/wchzfqf/0" 
                  target="_blank"
                >
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold cursor-pointer mb-2"
                >
                  Get Instant Access Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                </a>

                <div className="text-xs text-muted-foreground space-y-1">
                  <p>✅ Instant digital download</p>
                  <p>✅ 30-day money-back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <span className="font-bold"><img className="w-50" src="./public/logo.png" alt="" /></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
