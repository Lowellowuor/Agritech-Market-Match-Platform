"use client"

import * as React from "react"
import { Activity, ArrowDown, ArrowUp, Calendar, ChevronDown, Clock, Filter, Truck, Wallet } from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { marketInsights } from "@/lib/constants"

// Sample data for charts
const monthlyData = [
  { name: 'Jan', sales: 4000, expenses: 2400 },
  { name: 'Feb', sales: 3000, expenses: 1398 },
  { name: 'Mar', sales: 2000, expenses: 9800 },
  { name: 'Apr', sales: 2780, expenses: 3908 },
  { name: 'May', sales: 1890, expenses: 4800 },
  { name: 'Jun', sales: 2390, expenses: 3800 },
  { name: 'Jul', sales: 3490, expenses: 4300 },
  { name: 'Aug', sales: 4000, expenses: 2400 },
  { name: 'Sep', sales: 3000, expenses: 1398 },
  { name: 'Oct', sales: 2000, expenses: 9800 },
  { name: 'Nov', sales: 2780, expenses: 3908 },
  { name: 'Dec', sales: 1890, expenses: 4800 },
];

const cropData = [
  { name: 'Tomatoes', value: 40 },
  { name: 'Onions', value: 30 },
  { name: 'Maize', value: 20 },
  { name: 'Potatoes', value: 10 },
];

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

const weeklyPriceData = [
  { day: 'Mon', tomato: 105, maize: 50, onion: 72, potato: 50 },
  { day: 'Tue', tomato: 110, maize: 48, onion: 74, potato: 50 },
  { day: 'Wed', tomato: 108, maize: 47, onion: 75, potato: 51 },
  { day: 'Thu', tomato: 115, maize: 46, onion: 78, potato: 49 },
  { day: 'Fri', tomato: 120, maize: 45, onion: 80, potato: 50 },
  { day: 'Sat', tomato: 118, maize: 44, onion: 79, potato: 50 },
  { day: 'Sun', tomato: 120, maize: 45, onion: 80, potato: 50 },
];

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Market Intelligence Dashboard</h1>
            <p className="text-lg text-muted-foreground">
              Real-time data to inform your agricultural business decisions
            </p>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <Calendar className="h-4 w-4" />
                  Last 7 Days
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Today</DropdownMenuItem>
                <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
                <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
                <DropdownMenuItem>Last 90 Days</DropdownMenuItem>
                <DropdownMenuItem>This Year</DropdownMenuItem>
                <DropdownMenuItem>Custom Range</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button>
              Export
            </Button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Sales
            </CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KES 45,231</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Quantity Sold
            </CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245 kg</div>
            <p className="text-xs text-muted-foreground">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Price
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KES 36.3/kg</div>
            <div className="flex items-center text-xs text-green-500">
              <ArrowUp className="h-3 w-3 mr-1" />
              +5.4% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Transactions
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <div className="flex items-center text-xs text-red-500">
              <ArrowDown className="h-3 w-3 mr-1" />
              -3 from last month
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>
              Monthly sales and expenses over the past year
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" name="Sales (KES)" fill="hsl(var(--chart-1))" />
                  <Bar dataKey="expenses" name="Expenses (KES)" fill="hsl(var(--chart-2))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Crop Distribution</CardTitle>
            <CardDescription>
              Sales by crop type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={cropData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {cropData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Market Price Trends</CardTitle>
            <CardDescription>
              Weekly price trends for major crops
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tomato" className="space-y-4">
              <TabsList>
                <TabsTrigger value="tomato">Tomatoes</TabsTrigger>
                <TabsTrigger value="maize">Maize</TabsTrigger>
                <TabsTrigger value="onion">Onions</TabsTrigger>
                <TabsTrigger value="potato">Potatoes</TabsTrigger>
              </TabsList>
              <TabsContent value="tomato" className="space-y-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={weeklyPriceData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="tomato"
                        name="Tomato Price (KES/kg)"
                        stroke="hsl(var(--chart-1))"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-sm font-medium">Current Price</CardTitle>
                    </CardHeader>
                    <CardContent className="py-0">
                      <div className="text-2xl font-bold">KES 120/kg</div>
                      <div className="flex items-center text-xs text-green-500">
                        <ArrowUp className="h-3 w-3 mr-1" />
                        +15% from last week
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-sm font-medium">Forecast</CardTitle>
                    </CardHeader>
                    <CardContent className="py-0">
                      <div className="text-2xl font-bold">Rising</div>
                      <div className="text-xs text-muted-foreground">
                        Expected to increase next week
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-sm font-medium">Best Markets</CardTitle>
                    </CardHeader>
                    <CardContent className="py-0">
                      <div className="text-2xl font-bold">Nairobi</div>
                      <div className="text-xs text-muted-foreground">
                        KES 130/kg in Central Market
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="maize" className="space-y-4">
                {/* Similar content structure for maize */}
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={weeklyPriceData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="maize"
                        name="Maize Price (KES/kg)"
                        stroke="hsl(var(--chart-2))"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              <TabsContent value="onion">
                {/* Similar content structure for onions */}
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={weeklyPriceData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="onion"
                        name="Onion Price (KES/kg)"
                        stroke="hsl(var(--chart-3))"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              <TabsContent value="potato">
                {/* Similar content structure for potatoes */}
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={weeklyPriceData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="potato"
                        name="Potato Price (KES/kg)"
                        stroke="hsl(var(--chart-4))"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Market Opportunities</CardTitle>
            <CardDescription>
              Best selling opportunities based on market data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Tomatoes</div>
                    <div className="text-sm text-muted-foreground">Best price in Nairobi market</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">KES 130/kg</div>
                  <div className="text-sm text-green-500">+15% higher than average</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Onions</div>
                    <div className="text-sm text-muted-foreground">Bulk order opportunity in Mombasa</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">KES 85/kg</div>
                  <div className="text-sm text-green-500">5,000 kg order available</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Potatoes</div>
                    <div className="text-sm text-muted-foreground">High demand in Western region</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">KES 55/kg</div>
                  <div className="text-sm text-green-500">Demand exceeds supply</div>
                </div>
              </div>
              
              <Separator />
              
              <Button className="w-full">View All Opportunities</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Weather Impact</CardTitle>
            <CardDescription>
              Weather forecasts and potential impact on crops
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-3 text-center">
                    <div className="text-sm font-medium mb-1">Today</div>
                    <div className="flex justify-center">
                      <svg viewBox="0 0 24 24" className="h-8 w-8 text-yellow-400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="5" fill="currentColor" />
                        <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M4 12L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M22 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M19.7782 4.22183L18.364 5.63604" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M5.63604 18.364L4.22183 19.7782" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M19.7782 19.7782L18.364 18.364" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M5.63604 5.63604L4.22183 4.22183" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="text-lg font-bold">28°C</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-3 text-center">
                    <div className="text-sm font-medium mb-1">Tomorrow</div>
                    <div className="flex justify-center">
                      <svg viewBox="0 0 24 24" className="h-8 w-8 text-gray-400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 15C19.2091 15 21 13.2091 21 11C21 8.79086 19.2091 7 17 7C14.7909 7 13 8.79086 13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 22L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 15C6.79086 15 5 13.2091 5 11C5 8.79086 6.79086 7 9 7C11.2091 7 13 8.79086 13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="text-lg font-bold">25°C</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-3 text-center">
                    <div className="text-sm font-medium mb-1">Day After</div>
                    <div className="flex justify-center">
                      <svg viewBox="0 0 24 24" className="h-8 w-8 text-blue-400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13.0001C7 11.4088 7.63214 9.88273 8.75736 8.75751C9.88258 7.63229 11.4087 7.00015 13 7.00015C14.5913 7.00015 16.1174 7.63229 17.2426 8.75751C18.3679 9.88273 19 11.4088 19 13.0001C19 17.0001 16 19.0001 16 19.0001H10C10 19.0001 7 17.0001 7 13.0001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 15H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="text-lg font-bold">22°C</div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="p-3 rounded-lg border">
                <h3 className="font-medium mb-2">Weather Alert</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Heavy rainfall expected in the Eastern region over the next 48 hours. This may affect tomato harvests.
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-red-500">High Risk</span>
                  <span>Issued: Today, 08:30 AM</span>
                </div>
              </div>
              
              <div className="p-3 rounded-lg border">
                <h3 className="font-medium mb-2">Crop Impact</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tomatoes</span>
                    <span className="text-red-500">High Risk</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Onions</span>
                    <span className="text-yellow-500">Medium Risk</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Maize</span>
                    <span className="text-green-500">Low Risk</span>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                View Detailed Forecast
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}