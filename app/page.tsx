import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Search, Menu, User, MapPin, Truck, Shield, Headphones } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const categories = [
    { name: "Elektronik", icon: "📱", color: "bg-blue-100" },
    { name: "Fashion", icon: "👕", color: "bg-pink-100" },
    { name: "Rumah Tangga", icon: "🏠", color: "bg-green-100" },
    { name: "Kecantikan", icon: "💄", color: "bg-purple-100" },
    { name: "Olahraga", icon: "⚽", color: "bg-orange-100" },
    { name: "Makanan", icon: "🍕", color: "bg-yellow-100" },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: "Rp 18.999.000",
      originalPrice: "Rp 21.999.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      sold: 1250,
      discount: 14,
      location: "Jakarta Pusat",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: "Rp 16.499.000",
      originalPrice: "Rp 18.999.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
      sold: 890,
      discount: 13,
      location: "Surabaya",
    },
    {
      id: 3,
      name: "MacBook Air M3",
      price: "Rp 15.999.000",
      originalPrice: "Rp 17.999.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      sold: 567,
      discount: 11,
      location: "Bandung",
    },
    {
      id: 4,
      name: "Sony WH-1000XM5",
      price: "Rp 4.299.000",
      originalPrice: "Rp 4.999.000",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      sold: 2340,
      discount: 14,
      location: "Yogyakarta",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-orange-500">BelanjaKuy</span>
              </Link>

              <div className="hidden md:flex items-center space-x-1">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Dikirim ke Jakarta Pusat</span>
              </div>
            </div>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari produk, brand, atau toko..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span>Wishlist</span>
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>
              <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Masuk</span>
              </Button>
              <Button className="md:hidden" variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Belanja Mudah, Hemat, dan Terpercaya</h1>
              <p className="text-xl mb-6 opacity-90">
                Temukan jutaan produk dengan harga terbaik dari seller terpercaya di seluruh Indonesia
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                  Mulai Belanja Sekarang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-500"
                >
                  Download Aplikasi
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Shopping illustration"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Gratis Ongkir</h3>
                <p className="text-sm text-gray-600">Untuk pembelian minimal Rp 50.000</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Pembayaran Aman</h3>
                <p className="text-sm text-gray-600">Transaksi dijamin 100% aman</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Headphones className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Customer Service 24/7</h3>
                <p className="text-sm text-gray-600">Siap membantu kapan saja</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Kategori Pilihan</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                  >
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="font-medium text-sm">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Produk Pilihan</h2>
            <Button variant="outline">Lihat Semua</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
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
                  <div className="p-4">
                    <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                      <span className="text-sm text-gray-400">({product.sold} terjual)</span>
                    </div>
                    <div className="mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-orange-500">{product.price}</span>
                      </div>
                      <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <MapPin className="w-3 h-3 mr-1" />
                      {product.location}
                    </div>
                    <Button className="w-full" size="sm">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Tambah ke Keranjang
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-orange-500">BelanjaKuy</span>
              </div>
              <p className="text-gray-400 mb-4">
                Platform belanja online terpercaya dengan jutaan produk berkualitas dari seller terbaik di Indonesia.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Tentang BelanjaKuy</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Karir
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Bantuan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Pusat Bantuan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cara Berbelanja
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Syarat & Ketentuan
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <span className="sr-only">Facebook</span>📘
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <span className="sr-only">Instagram</span>📷
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <span className="sr-only">Twitter</span>🐦
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BelanjaKuy. Semua hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
