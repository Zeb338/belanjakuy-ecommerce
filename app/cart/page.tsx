"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Minus, Plus, Trash2, MapPin, Truck, Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB Natural Titanium",
      price: 18999000,
      originalPrice: 21999000,
      image: "/placeholder.svg?height=100&width=100",
      quantity: 1,
      seller: "Apple Store Official",
      location: "Jakarta Pusat",
      freeShipping: true,
      selected: true,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra 512GB Titanium Black",
      price: 16499000,
      originalPrice: 18999000,
      image: "/placeholder.svg?height=100&width=100",
      quantity: 1,
      seller: "Samsung Official Store",
      location: "Surabaya",
      freeShipping: true,
      selected: true,
    },
    {
      id: 3,
      name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
      price: 4299000,
      originalPrice: 4999000,
      image: "/placeholder.svg?height=100&width=100",
      quantity: 2,
      seller: "Sony Official Store",
      location: "Yogyakarta",
      freeShipping: true,
      selected: false,
    },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const toggleItemSelection = (id: number) => {
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const selectedItems = cartItems.filter((item) => item.selected)
  const subtotal = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const originalTotal = selectedItems.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0)
  const savings = originalTotal - subtotal
  const shippingCost = 0 // Free shipping
  const total = subtotal + shippingCost

  const selectAll = () => {
    const allSelected = cartItems.every((item) => item.selected)
    setCartItems((items) => items.map((item) => ({ ...item, selected: !allSelected })))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-orange-500">BelanjaKuy</span>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <h1 className="text-xl font-semibold">Keranjang Belanja</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-6">
          <Link href="/products">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Lanjut Belanja
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Produk ({cartItems.length})</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Checkbox checked={cartItems.every((item) => item.selected)} onCheckedChange={selectAll} />
                    <span className="text-sm">Pilih Semua</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      <Checkbox checked={item.selected} onCheckedChange={() => toggleItemSelection(item.id)} />
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{item.name}</h3>
                        <div className="text-sm text-gray-600 mb-2">{item.seller}</div>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <MapPin className="w-3 h-3 mr-1" />
                          {item.location}
                          {item.freeShipping && (
                            <Badge variant="outline" className="ml-2 text-xs">
                              <Truck className="w-3 h-3 mr-1" />
                              Gratis Ongkir
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-lg font-bold text-orange-500">
                                Rp {item.price.toLocaleString("id-ID")}
                              </span>
                            </div>
                            <span className="text-sm text-gray-400 line-through">
                              Rp {item.originalPrice.toLocaleString("id-ID")}
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center border rounded-lg">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <Input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                                className="w-16 h-8 text-center border-0 focus:ring-0"
                                min="1"
                              />
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 h-8 w-8 p-0"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ringkasan Belanja</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Total Harga ({selectedItems.length} barang)</span>
                  <span>Rp {originalTotal.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between text-sm text-green-600">
                  <span>Total Diskon</span>
                  <span>-Rp {savings.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Biaya Pengiriman</span>
                  <span className="text-green-600">GRATIS</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total Pembayaran</span>
                  <span className="text-orange-500">Rp {total.toLocaleString("id-ID")}</span>
                </div>
                <Button className="w-full" size="lg" disabled={selectedItems.length === 0}>
                  Beli Sekarang ({selectedItems.length})
                </Button>
              </CardContent>
            </Card>

            {/* Shipping Info */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Truck className="w-4 h-4 text-green-600" />
                    <span>Gratis ongkir untuk semua produk</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span>Pembayaran 100% aman</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
