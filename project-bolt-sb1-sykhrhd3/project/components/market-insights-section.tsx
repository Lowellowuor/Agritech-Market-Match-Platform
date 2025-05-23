"use client"

import * as React from "react"
import { ArrowDown, ArrowUp, ArrowRight, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { marketInsights } from "@/lib/constants"

// Sample price data for charts
const priceData = {
  "Tomatoes": [
    { day: "Mon", price: 105 },
    { day: "Tue", price: 110 },
    { day: "Wed", price: 108 },
    { day: "Thu", price: 115 },
    { day: "Fri", price: 120 },
    { day: "Sat", price: 118 },
    { day: "Sun", price: 120 },
  ],
  "Maize": [
    { day: "Mon", price: 50 },
    { day: "Tue", price: 48 },
    { day: "Wed", price: 47 },
    { day: "Thu", price: 46 },
    { day: "Fri", price: 45 },
    { day: "Sat", price: 44 },
    { day: "Sun", price: 45 },
  ],
  "Onions": [
    { day: "Mon", price: 72 },
    { day: "Tue", price: 74 },
    { day: "Wed", price: 75 },
    { day: "Thu", price: 78 },
    { day: "Fri", price: 80 },
    { day: "Sat", price: 79 },
    { day: "Sun", price: 80 },
  ],
  "Potatoes": [
    { day: "Mon", price: 50 },
    { day: "Tue", price: 50 },
    { day: "Wed", price: 51 },
    { day: "Thu", price: 49 },
    { day: "Fri", price: 50 },
    { day: "Sat", price: 50 },
    { day: "Sun", price: 50 },
  ],
}

export function MarketInsightsSection() {
  const [selectedCrop, setSelectedCrop] = React.useState("Tomatoes")

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="h-4 w-4 text-green-500" />
    if (trend === "down") return <TrendingDown className="h-4 w-4 text-red-500" />
    return <Minus className="h-4 w-4 text-yellow-500" />
  }

  const getPriceChangeElement = (priceChange: number) => {
    if (priceChange > 0) {
      return (
        <span className="flex items-center text-green-500">
          <ArrowUp className="h-4 w-4 mr-1" />
          {priceChange}%
        </span>
      )
    }
    if (priceChange < 0) {
      return (
        <span className="flex items-center text-red-500">
          <ArrowDown className="h-4 w-4 mr-1" />
          {Math.abs(priceChange)}%
        </span>
      )
    }
    return (
      <span className="flex items-center text-yellow-500">
        <Minus className="h-4 w-4 mr-1" />
        0%
      </span>
    )
  }

  return (
    <div className="container py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Market Insights
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Real-time price data and market trends to inform your decisions
          </p>
        </div>
        <Button asChild>
          <a href="/dashboard">
            Full Dashboard <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Price Trends - {selectedCrop}</CardTitle>
              <CardDescription>
                7-day price history and forecast
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={priceData[selectedCrop as keyof typeof priceData]}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="price" 
                      stroke="hsl(var(--chart-1))" 
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full">
                <Tabs defaultValue="Tomatoes" onValueChange={setSelectedCrop}>
                  <TabsList className="w-full">
                    {marketInsights.map((item) => (
                      <TabsTrigger key={item.id} value={item.title} className="flex-1">
                        {item.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Current Prices</CardTitle>
              <CardDescription>
                Today's market prices across regions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketInsights.map((item) => (
                  <div 
                    key={item.id} 
                    className={cn(
                      "flex items-center justify-between p-3 rounded-lg transition-all",
                      selectedCrop === item.title ? "bg-primary/10" : "hover:bg-secondary"
                    )}
                    onClick={() => setSelectedCrop(item.title)}
                  >
                    <div className="flex items-center gap-3">
                      {getTrendIcon(item.trend)}
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.region}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{item.currentPrice} KES/kg</div>
                      <div className="text-sm">{getPriceChangeElement(item.priceChange)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <a href="/dashboard">View All Markets</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}