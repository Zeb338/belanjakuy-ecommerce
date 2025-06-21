"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  ShoppingCart,
  User,
  Package,
  Heart,
  MapPin,
  Phone,
  Mail,
  Edit,
  Camera,
  Truck,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("orders")

  const orders = [
    {
      id: "BK001234567",
      date: "2024-01-15",
      status: "delivered",
      total: 18999000,
      items: [
        {
          name: "iPhone 15 Pro Max 256GB",
          image: "/placeholder.svg?height=60&width=60",
          quantity: 1,
          price: 18999000,
        },
      ],
    },
    {
      id: "BK001234568",
      date: "2024-01-10",
      status: "shipping",
      total: 4299000,
      items: [
        {
          name: "Sony WH-1000XM5 Headphones",
          image: "/placeholder.svg?height=60&width=60",
          quantity: 1,
          price: 4299000,
        },
      ],
    },
    {
      id: "BK001234569",
      date: "2024-01-05",
      status: "processing",
      total: 16499000,
      items: [
        {
          name: "Samsung Galaxy S24 Ultra",
          image: "/placeholder.svg?height=60&width=60",
          quantity: 1,
          price: 16499000,
        },
      ],
    },
  ]

  const wishlistItems = [
    {
      id: 1,
      name: "MacBook Air M3 13-inch",
      price: "Rp 15.999.000",
      originalPrice: "Rp 17.999.000",
      image: "/placeholder.svg?height=100&width=100",
      discount: 11,
      inStock: true,
    },
    {
      id: 2,
      name: "iPad Pro 12.9-inch M2",
      price: "Rp 13.999.000",
      originalPrice: "Rp 15.999.000",
      image: "/placeholder.svg?height=100&width=100",
      discount: 13,
      inStock: true,
    },
    {
      id: 3,
      name: "AirPods Pro 2nd Gen",
      price: "Rp 3.499.000",
      originalPrice: "Rp 3.999.000",
      image: "/placeholder.svg?height=100&width=100",
      discount: 13,
      inStock: false,
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "shipping":
        return <Truck className="w-4 h-4 text-blue-600" />
      case "processing":
        return <Clock className="w-4 h-4 text-yellow-600" />
      case "cancelled":
        return <XCircle className="w-4 h-4 text-red-600" />
      default:
        return <Clock className="w-4 h-4 text-gray-600" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivered":
        return "Terkirim"
      case "shipping":
        return "Dalam Pengiriman"
      case "processing":
        return "Diproses"
      case "cancelled":
        return "Dibatalkan"
      default:
        return "Unknown"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "shipping":
        return "bg-blue-100 text-blue-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-orange-500">BelanjaKuy</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="/placeholder.svg?height=80&width=80" />
                      <AvatarFallback className="text-lg">JD</AvatarFallback>
                    </Avatar>
                    <Button size="sm" className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full p-0">
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                  <h2 className="text-xl font-semibold mt-4">John Doe</h2>
                  <p className="text-gray-600">Member sejak Jan 2024</p>
                  <Badge className="mt-2">Gold Member</Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    john.doe@email.com
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    +62 812-3456-7890
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    Jakarta Pusat
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="orders" className="flex items-center space-x-2">
                  <Package className="w-4 h-4" />
                  <span className="hidden sm:inline">Pesanan</span>
                </TabsTrigger>
                <TabsTrigger value="wishlist" className="flex items-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span className="hidden sm:inline">Wishlist</span>
                </TabsTrigger>
                <TabsTrigger value="profile" className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Profil</span>
                </TabsTrigger>
                <TabsTrigger value="addresses" className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="hidden sm:inline">Alamat</span>
                </TabsTrigger>
              </TabsList>

              {/* Orders Tab */}
              <TabsContent value="orders" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Riwayat Pesanan</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="font-medium">#{order.id}</div>
                            <div className="text-sm text-gray-600">{order.date}</div>
                          </div>
                          <Badge className={getStatusColor(order.status)}>
                            <div className="flex items-center space-x-1">
                              {getStatusIcon(order.status)}
                              <span>{getStatusText(order.status)}</span>
                            </div>
                          </Badge>
                        </div>

                        <div className="space-y-3">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                width={60}
                                height={60}
                                className="rounded-lg object-cover"
                              />
                              <div className="flex-1">
                                <div className="font-medium">{item.name}</div>
                                <div className="text-sm text-gray-600">
                                  Qty: {item.quantity} × Rp {item.price.toLocaleString("id-ID")}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <Separator className="my-3" />

                        <div className="flex items-center justify-between">
                          <div className="font-semibold">Total: Rp {order.total.toLocaleString("id-ID")}</div>
                          <div className="space-x-2">
                            <Button variant="outline" size="sm">
                              Detail
                            </Button>
                            {order.status === "delivered" && <Button size="sm">Beli Lagi</Button>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Wishlist Tab */}
              <TabsContent value="wishlist" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Wishlist Saya</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {wishlistItems.map((item) => (
                        <div key={item.id} className="border rounded-lg p-4">
                          <div className="relative mb-3">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={100}
                              height={100}
                              className="w-full h-32 object-cover rounded-lg"
                            />
                            <Badge className="absolute top-2 left-2 bg-red-500">-{item.discount}%</Badge>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="absolute top-2 right-2 w-8 h-8 p-0 bg-white/80 hover:bg-white"
                            >
                              <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                            </Button>
                          </div>

                          <h3 className="font-medium text-sm mb-2 line-clamp-2">{item.name}</h3>

                          <div className="mb-3">
                            <div className="text-lg font-bold text-orange-500">{item.price}</div>
                            <div className="text-sm text-gray-400 line-through">{item.originalPrice}</div>
                          </div>

                          <Button className="w-full" size="sm" disabled={!item.inStock}>
                            {item.inStock ? "Tambah ke Keranjang" : "Stok Habis"}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Informasi Profil</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nama Depan</Label>
                        <Input id="firstName" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nama Belakang</Label>
                        <Input id="lastName" defaultValue="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john.doe@email.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input id="phone" type="tel" defaultValue="+62 812-3456-7890" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="birthDate">Tanggal Lahir</Label>
                      <Input id="birthDate" type="date" defaultValue="1990-01-01" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gender">Jenis Kelamin</Label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="male">Laki-laki</option>
                        <option value="female">Perempuan</option>
                      </select>
                    </div>

                    <Button className="w-full md:w-auto">
                      <Edit className="w-4 h-4 mr-2" />
                      Simpan Perubahan
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Addresses Tab */}
              <TabsContent value="addresses" className="space-y-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Alamat Saya</CardTitle>
                    <Button>
                      <MapPin className="w-4 h-4 mr-2" />
                      Tambah Alamat
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-medium">Rumah</div>
                          <Badge variant="secondary" className="text-xs">
                            Utama
                          </Badge>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div>John Doe</div>
                        <div>+62 812-3456-7890</div>
                        <div className="mt-1">
                          Jl. Sudirman No. 123, RT 01/RW 02
                          <br />
                          Menteng, Jakarta Pusat
                          <br />
                          DKI Jakarta 10310
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-medium">Kantor</div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div>John Doe</div>
                        <div>+62 812-3456-7890</div>
                        <div className="mt-1">
                          Jl. Thamrin No. 456, Lantai 15
                          <br />
                          Tanah Abang, Jakarta Pusat
                          <br />
                          DKI Jakarta 10230
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
