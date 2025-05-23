"use client";

import { Card } from "@/components/ui/card";
import { Truck, Package, BarChart3, Clock } from "lucide-react";

export default function LogisticsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Logistics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Truck className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm text-muted-foreground">Active Shipments</p>
              <h3 className="text-2xl font-bold">247</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Package className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm text-muted-foreground">Delivered Today</p>
              <h3 className="text-2xl font-bold">184</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <BarChart3 className="h-8 w-8 text-purple-500" />
            <div>
              <p className="text-sm text-muted-foreground">Efficiency Rate</p>
              <h3 className="text-2xl font-bold">94.2%</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Clock className="h-8 w-8 text-orange-500" />
            <div>
              <p className="text-sm text-muted-foreground">Avg. Delivery Time</p>
              <h3 className="text-2xl font-bold">2.4 days</h3>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Shipments</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">Shipment #{2024001 + i}</p>
                  <p className="text-sm text-muted-foreground">New York → Los Angeles</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  In Transit
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Delivery Performance</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">On-Time Delivery</span>
                <span className="font-medium">96%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: "96%" }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
                <span className="font-medium">92%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{ width: "92%" }}></div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}