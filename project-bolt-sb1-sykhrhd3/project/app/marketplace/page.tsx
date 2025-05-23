"use client"

import * as React from "react"
import { Search, Filter, ChevronDown, Truck, MapPin, Leaf, ArrowUpDown } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { featuredProducts } from "@/lib/constants"
import { FeaturedProductsSection } from "@/components/featured-products-section"

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [categoryFilter, setCategoryFilter] = React.useState<string[]>([])
  const [locationFilter, setLocationFilter] = React.useState<string[]>([])
  
  const categories = ["Vegetables", "Fruits", "Grains", "Dairy", "Poultry", "Livestock"]
  const locations = ["Nairobi", "Nakuru", "Kisumu", "Mombasa", "Eldoret", "Machakos"]
  
  const handleCategoryChange = (category: string) => {
    setCategoryFilter((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    )
  }
  
  const handleLocationChange = (location: string) => {
    setLocationFilter((prev) =>
      prev.includes(location)
        ? prev.filter((item) => item !== location)
        : [...prev, location]
    )
  }
  
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Marketplace</h1>
        <p className="text-lg text-muted-foreground">
          Browse and purchase quality produce directly from verified farmers
        </p>
      </div>
      
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for products..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex gap-2">
                    <Filter className="h-4 w-4" />
                    Categories
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="p-2">
                    <div className="mb-2 font-medium">Product Categories</div>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category}`}
                            checked={categoryFilter.includes(category)}
                            onCheckedChange={() => handleCategoryChange(category)}
                          />
                          <label
                            htmlFor={`category-${category}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex gap-2">
                    <MapPin className="h-4 w-4" />
                    Location
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="p-2">
                    <div className="mb-2 font-medium">Locations</div>
                    <div className="space-y-2">
                      {locations.map((location) => (
                        <div key={location} className="flex items-center space-x-2">
                          <Checkbox
                            id={`location-${location}`}
                            checked={locationFilter.includes(location)}
                            onCheckedChange={() => handleLocationChange(location)}
                          />
                          <label
                            htmlFor={`location-${location}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {location}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex gap-2">
                    <ArrowUpDown className="h-4 w-4" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                  <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                  <DropdownMenuItem>Newest First</DropdownMenuItem>
                  <DropdownMenuItem>Best Rating</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categoryFilter.map((category) => (
              <Badge key={category} variant="secondary" className="flex gap-1">
                {category}
                <button
                  className="ml-1 rounded-full outline-none focus:ring-2"
                  onClick={() => handleCategoryChange(category)}
                >
                  ×
                </button>
              </Badge>
            ))}
            
            {locationFilter.map((location) => (
              <Badge key={location} variant="secondary" className="flex gap-1">
                {location}
                <button
                  className="ml-1 rounded-full outline-none focus:ring-2"
                  onClick={() => handleLocationChange(location)}
                >
                  ×
                </button>
              </Badge>
            ))}
            
            {(categoryFilter.length > 0 || locationFilter.length > 0) && (
              <Button variant="ghost" size="sm" onClick={() => {
                setCategoryFilter([])
                setLocationFilter([])
              }}>
                Clear all
              </Button>
            )}
          </div>
        </div>
        
        <Separator />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Available Products</h2>
              <span className="text-sm text-muted-foreground">Showing 15 of 156 products</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Using the featuredProducts just for demo purposes, in a real app we would have more products */}
              {[...featuredProducts, ...featuredProducts, ...featuredProducts, ...featuredProducts, ...featuredProducts].slice(0, 15).map((product, index) => (
                <Card key={`${product.id}-${index}`} className="overflow-hidden h-full flex flex-col">
                  <div className="relative h-36 bg-muted">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    {index % 3 === 0 && (
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-green-500">Organic</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="py-4 flex-1 flex flex-col">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-medium">{product.title}</h3>
                      <span className="font-bold text-primary">{product.price} KES/{product.unit}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <MapPin className="h-3 w-3 mr-1" />
                      {product.location}
                      {index % 2 === 0 && (
                        <div className="flex items-center ml-2">
                          <Truck className="h-3 w-3 mr-1" />
                          <span>Free delivery</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-2">
                      <span className="text-xs font-medium">
                        Seller: {product.seller.name}
                      </span>
                      <span className="text-xs">
                        ★ {product.seller.rating.toFixed(1)}
                      </span>
                    </div>
                    <Button className="mt-3 w-full" size="sm">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
          
          <div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Market Trends</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-chart-1"></div>
                      <span>Tomatoes</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-500">
                      <ArrowUpDown className="h-4 w-4" />
                      <span>+15%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-chart-2"></div>
                      <span>Maize</span>
                    </div>
                    <div className="flex items-center gap-1 text-red-500">
                      <ArrowUpDown className="h-4 w-4" />
                      <span>-5%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-chart-3"></div>
                      <span>Onions</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-500">
                      <ArrowUpDown className="h-4 w-4" />
                      <span>+8%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-chart-4"></div>
                      <span>Potatoes</span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <ArrowUpDown className="h-4 w-4" />
                      <span>0%</span>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <h3 className="text-lg font-semibold mb-4">Special Offers</h3>
                <div className="space-y-3">
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Leaf className="h-4 w-4 text-green-500" />
                      <span className="font-medium">Bulk Discount</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Get 10% off when you buy over 200kg of any product</p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Truck className="h-4 w-4 text-blue-500" />
                      <span className="font-medium">Free Delivery</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Free delivery on orders over 5,000 KES within 50km</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <h3 className="text-lg font-semibold mb-4">Buying Guide</h3>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary w-5 h-5 text-xs text-primary-foreground font-medium">1</span>
                    <span>Browse products from verified farmers</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary w-5 h-5 text-xs text-primary-foreground font-medium">2</span>
                    <span>Select quantity and delivery options</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary w-5 h-5 text-xs text-primary-foreground font-medium">3</span>
                    <span>Secure payment with escrow protection</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary w-5 h-5 text-xs text-primary-foreground font-medium">4</span>
                    <span>Receive delivery and confirm quality</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}