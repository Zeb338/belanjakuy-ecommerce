"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, ShoppingCart, Heart, Filter, Grid, List, MapPin, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 10000000])

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB Natural Titanium",
      price: "Rp 18.999.000",
      originalPrice: "Rp 21.999.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 1250,
      sold: 1250,
      discount: 14,
      location: "Jakarta Pusat",
      seller: "Apple Store Official",
      freeShipping: true,
      cashback: "5%",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra 512GB Titanium Black",
      price: "Rp 16.499.000",
      originalPrice: "Rp 18.999.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
      reviews: 890,
      sold: 890,
      discount: 13,
      location: "Surabaya",
      seller: "Samsung Official Store",
      freeShipping: true,
      cashback: "3%",
    },
    {
      id: 3,
      name: "MacBook Air M3 13-inch 256GB Space Gray",
      price: "Rp 15.999.000",
      originalPrice: "Rp 17.999.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      reviews: 567,
      sold: 567,
      discount: 11,
      location: "Bandung",
      seller: "Apple Authorized Reseller",
      freeShipping: true,
      cashback: "2%",
    },
    {
      id: 4,
      name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
      price: "Rp 4.299.000",
      originalPrice: "Rp 4.999.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 2340,
      sold: 2340,
      discount: 14,
      location: "Yogyakarta",
      seller: "Sony Official Store",
      freeShipping: true,
      cashback: "1%",
    },
    {
      id: 5,
      name: "iPad Pro 12.9-inch M2 256GB Wi-Fi Space Gray",
      price: "Rp 13.999.000",
      originalPrice: "Rp 15.999.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 456,
      sold: 456,
      discount: 13,
      location: "Jakarta Selatan",
      seller: "Apple Store Official",
      freeShipping: true,
      cashback: "4%",
    },
    {
      id: 6,
      name: "Dell XPS 13 Plus Intel Core i7 16GB RAM 512GB SSD",
      price: "Rp 22.999.000",
      originalPrice: "Rp 25.999.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 234,
      sold: 234,
      discount: 12,
      location: "Medan",
      seller: "Dell Official Store",
      freeShipping: true,
      cashback: "2%",
    },
  ]

  const categories = ["Elektronik", "Smartphone", "Laptop", "Audio", "Tablet", "Aksesoris"]

  const brands = ["Apple", "Samsung", "Sony", "Dell", "HP", "Asus"]

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

            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input type="text" placeholder="Cari produk, brand, atau toko..." className="pl-10" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </h3>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Kategori</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={category} />
                        <label htmlFor={category} className="text-sm">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Rentang Harga</h4>
                  <div className="space-y-4">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={25000000}
                      step={100000}
                      className="w-full"
                    />
                    <div className="flex items-center space-x-2 text-sm">
                      <span>Rp {priceRange[0].toLocaleString("id-ID")}</span>
                      <span>-</span>
                      <span>Rp {priceRange[1].toLocaleString("id-ID")}</span>
                    </div>
                  </div>
                </div>

                {/* Brands */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Brand</h4>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox id={brand} />
                        <label htmlFor={brand} className="text-sm">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <h4 className="font-medium mb-3">Rating</h4>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <label htmlFor={`rating-${rating}`} className="flex items-center text-sm">
                          <div className="flex items-center mr-2">
                            {[...Array(rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          {rating} ke atas
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort and View Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Menampilkan {products.length} produk</span>
              </div>
              <div className="flex items-center space-x-4">
                <Select defaultValue="relevant">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Urutkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevant">Paling Relevan</SelectItem>
                    <SelectItem value="price-low">Harga Terendah</SelectItem>
                    <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                    <SelectItem value="rating">Rating Tertinggi</SelectItem>
                    <SelectItem value="newest">Terbaru</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {products.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className={viewMode === "grid" ? "p-0" : "p-4"}>
                    <div className={viewMode === "grid" ? "" : "flex space-x-4"}>
                      <div className={viewMode === "grid" ? "relative" : "relative flex-shrink-0"}>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={200}
                          height={200}
                          className={
                            viewMode === "grid"
                              ? "w-full h-48 object-cover rounded-t-lg"
                              : "w-32 h-32 object-cover rounded-lg"
                          }
                        />
                        <Badge className="absolute top-2 left-2 bg-red-500">-{product.discount}%</Badge>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2 w-8 h-8 p-0 bg-white/80 hover:bg-white"
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className={viewMode === "grid" ? "p-4" : "flex-1"}>
                        <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                        <div className="text-xs text-gray-600 mb-2">{product.seller}</div>

                        <div className="flex items-center space-x-1 mb-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600">{product.rating}</span>
                          <span className="text-sm text-gray-400">({product.reviews} ulasan)</span>
                          <span className="text-sm text-gray-400">• {product.sold} terjual</span>
                        </div>

                        <div className="mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-orange-500">{product.price}</span>
                            {product.cashback && (
                              <Badge variant="secondary" className="text-xs">
                                Cashback {product.cashback}
                              </Badge>
                            )}
                          </div>
                          <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                        </div>

                        <div className="flex items-center text-xs text-gray-500 mb-3">
                          <MapPin className="w-3 h-3 mr-1" />
                          {product.location}
                          {product.freeShipping && (
                            <Badge variant="outline" className="ml-2 text-xs">
                              Gratis Ongkir
                            </Badge>
                          )}
                        </div>

                        <Button className="w-full" size="sm">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Tambah ke Keranjang
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-8">
              <Button variant="outline" size="sm" disabled>
                Sebelumnya
              </Button>
              <Button variant="default" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Selanjutnya
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
