"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/lib/constants"

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-accent py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Hear From Our Farmers
          </h2>
          <p className="text-lg text-muted-foreground">
            See how AgriConnect is transforming agriculture businesses across Africa
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-md bg-background">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="mb-4 text-chart-1">
                            <Quote className="h-8 w-8" />
                          </div>
                          <blockquote className="text-lg md:text-xl italic mb-4">
                            "{testimonial.quote}"
                          </blockquote>
                          <div>
                            <div className="font-semibold">{testimonial.author}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  activeIndex === index ? "bg-primary" : "bg-primary/30"
                )}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 hidden md:flex bg-background"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 hidden md:flex bg-background"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}