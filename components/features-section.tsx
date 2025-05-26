import { ArrowUpRight, ShoppingBag, BarChart2, Truck, Wallet, Shield, Smartphone } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: ShoppingBag,
      title: "Direct Marketplace",
      description: "Connect directly with buyers and sell your produce at fair market prices without middlemen.",
    },
    {
      icon: BarChart2,
      title: "Market Intelligence",
      description: "Access real-time price data, trends, and forecasts to make informed decisions about when to sell.",
    },
    {
      icon: Truck,
      title: "Logistics Solutions",
      description: "Book transportation and cold storage facilities to ensure your produce reaches markets in prime condition.",
    },
    {
      icon: Wallet,
      title: "Financial Services",
      description: "Access loans, insurance, and savings products designed specifically for agricultural businesses.",
    },
    {
      icon: Shield,
      title: "Verified Buyers",
      description: "Trade with confidence knowing all buyers on our platform are verified and trustworthy.",
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Use the platform even with limited connectivity through our offline-capable mobile experience.",
    },
  ]

  return (
    <div className="container py-16 md:py-24">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Everything You Need to Grow Your Agribusiness
        </h2>
        <p className="text-lg text-muted-foreground">
          Our platform provides end-to-end solutions for farmers to increase profits, reduce waste, and build sustainable businesses.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="group hover:shadow-md transition-all">
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                {feature.title}
                <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardTitle>
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}