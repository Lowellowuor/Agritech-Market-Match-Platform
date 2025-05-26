import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { featuredProducts } from "@/lib/constants"

export function FeaturedProductsSection() {
  return (
    <div className="container py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Browse high-quality produce from verified farmers
          </p>
        </div>
        <Button asChild>
          <Link href="/marketplace">
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden group">
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2">
                <Badge className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background/70">
                  {product.quantity} {product.unit} available
                </Badge>
              </div>
            </div>
            <CardContent className="pt-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-medium">{product.title}</h3>
                <div className="text-xl font-bold text-primary">{product.price} KES/{product.unit}</div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4 mr-1" />
                {product.location}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-muted">
                    <Image 
                      src={product.seller.image || "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} 
                      alt={product.seller.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-sm font-medium">{product.seller.name}</div>
                  {product.seller.verified && (
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  )}
                </div>
                <div className="text-sm font-medium">
                  ★ {product.seller.rating.toFixed(1)}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/marketplace/${product.id}`}>View Details</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href={`/marketplace/${product.id}/buy`}>Buy Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}