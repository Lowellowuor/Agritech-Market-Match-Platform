"use client"

import * as React from "react"
import { ArrowRight, Wallet, Shield, Calculator, Clock, ChevronDown, ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { financialServices } from "@/lib/constants"

export default function FinancialPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Financial Services</h1>
            <p className="text-lg text-muted-foreground">
              Access loans, insurance, and savings products designed for agricultural businesses
            </p>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <ArrowUpDown className="h-4 w-4" />
                  Sort by
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Lowest Interest Rate</DropdownMenuItem>
                <DropdownMenuItem>Highest Amount</DropdownMenuItem>
                <DropdownMenuItem>Shortest Term</DropdownMenuItem>
                <DropdownMenuItem>Most Popular</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <Tabs defaultValue="loans" className="space-y-8">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="loans" className="flex gap-2">
            <Wallet className="h-4 w-4" />
            Loans
          </TabsTrigger>
          <TabsTrigger value="insurance" className="flex gap-2">
            <Shield className="h-4 w-4" />
            Insurance
          </TabsTrigger>
          <TabsTrigger value="savings" className="flex gap-2">
            <Calculator className="h-4 w-4" />
            Savings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="loans" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {financialServices
              .filter((service) => service.type === "Micro-loans")
              .map((service) => (
                <Card key={service.id}>
                  <CardHeader>
                    <CardTitle>{service.name}</CardTitle>
                    <CardDescription>Quick loans for your farming needs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Amount Range</span>
                        <span className="font-medium">
                          {service.minAmount} - {service.maxAmount} KES
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Interest Rate</span>
                        <span className="font-medium">{service.interestRate}% p.a.</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Term</span>
                        <span className="font-medium">{service.termDays} days</span>
                      </div>
                      <div className="pt-4">
                        <div className="font-medium mb-2">Requirements:</div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {service.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full mt-4">
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="insurance" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {financialServices
              .filter((service) => service.type === "Insurance")
              .map((service) => (
                <Card key={service.id}>
                  <CardHeader>
                    <CardTitle>{service.name}</CardTitle>
                    <CardDescription>Protect your farming investment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Coverage</span>
                        <span className="font-medium">{service.coverage}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Premium Rate</span>
                        <span className="font-medium">{service.premiumRate}% of coverage</span>
                      </div>
                      <div className="pt-4">
                        <div className="font-medium mb-2">Payout Conditions:</div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {service.payoutConditions.map((condition, index) => (
                            <li key={index}>{condition}</li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full mt-4">
                        Get Coverage <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="savings" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {financialServices
              .filter((service) => service.type === "Savings")
              .map((service) => (
                <Card key={service.id}>
                  <CardHeader>
                    <CardTitle>{service.name}</CardTitle>
                    <CardDescription>Grow your farming business</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Interest Rate</span>
                        <span className="font-medium">{service.interestRate}% p.a.</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Minimum Deposit</span>
                        <span className="font-medium">{service.minimumDeposit} KES</span>
                      </div>
                      <div className="pt-4">
                        <div className="font-medium mb-2">Features:</div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {service.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full mt-4">
                        Start Saving <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}