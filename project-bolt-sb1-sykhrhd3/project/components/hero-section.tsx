import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="container flex flex-col lg:flex-row items-center py-12 md:py-24 gap-8">
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
            Transforming Agriculture Through <span className="text-chart-1">Technology</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Connect directly with buyers, access real-time market data, and grow your agribusiness with our innovative platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/marketplace">
                Start Selling <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/marketplace">
                Start Buying
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>10,000+ Farmers</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span>5,000+ Buyers</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              <span>40+ Counties</span>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Farmer with digital tablet"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Today's Market Trend</h3>
                <p className="text-sm text-muted-foreground">Tomato prices up 15%</p>
              </div>
              <Button size="sm" variant="ghost" asChild>
                <Link href="/dashboard">View Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}