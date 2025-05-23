import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CTASection() {
  const benefits = [
    "Direct access to buyers without middlemen",
    "Real-time market data and price forecasts",
    "Logistics and transportation solutions",
    "Financial services designed for farmers",
    "Mobile access even with limited connectivity",
    "Verified buyers and secure transactions",
  ]

  return (
    <div className="container py-16 md:py-24">
      <div className="rounded-xl bg-gradient-to-r from-chart-1/20 via-chart-2/20 to-chart-3/20 p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Transform Your Agribusiness?
            </h2>
            <p className="text-lg mb-6">
              Join thousands of farmers already using AgriConnect to increase their profits and grow their businesses.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-chart-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 p-6 bg-background rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Join AgriConnect Today</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your location"
                />
              </div>
              <div>
                <label htmlFor="product" className="block text-sm font-medium mb-1">
                  Main Product
                </label>
                <input
                  type="text"
                  id="product"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="What do you grow?"
                />
              </div>
              <Button className="w-full">
                Get Started
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}