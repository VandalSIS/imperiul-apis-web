import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, CreditCard, Truck, Shield } from "lucide-react";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const productName = searchParams.get('product') || '';
  
  const [orderData, setOrderData] = useState({
    product: productName,
    size: '',
    quantity: 1,
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    paymentMethod: ''
  });

  const products = {
    "Miere de Salcâm": { "200g": 85, "300g": 120, "500g": 180 },
    "Miere de Tei": { "200g": 90, "300g": 130, "500g": 190 },
    "Miere de Floarea Soarelui": { "200g": 75, "300g": 110, "500g": 165 },
    "Miere Poliflorală": { "200g": 80, "300g": 115, "500g": 170 },
    "Miere de Salvie": { "200g": 95, "300g": 140, "500g": 200 }
  };

  const currentProduct = products[orderData.product as keyof typeof products];
  const currentPrice = currentProduct && orderData.size ? currentProduct[orderData.size as keyof typeof currentProduct] : 0;
  const totalPrice = currentPrice * orderData.quantity;
  const deliveryFee = totalPrice > 300 ? 0 : 50;
  const finalTotal = totalPrice + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!orderData.product || !orderData.size || !orderData.name || !orderData.email || !orderData.phone || !orderData.address || !orderData.city || !orderData.paymentMethod) {
      toast({
        title: "Informații Lipsă",
        description: "Vă rugăm să completați toate câmpurile obligatorii.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Comandă Plasată!",
      description: `Comanda dvs. pentru ${orderData.product} (${orderData.size}) a fost înregistrată. Veți fi contactat în 24 de ore.`,
    });

    // Reset form
    setOrderData({
      product: '',
      size: '',
      quantity: 1,
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      paymentMethod: ''
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ShoppingCart className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Finalizare Comandă
            </h1>
            <p className="text-xl text-muted-foreground">
              Completați datele pentru a finaliza comanda dvs.
            </p>
          </div>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Order Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Detalii Comandă</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Product Selection */}
                    <div className="space-y-4">
                      <Label htmlFor="product" className="text-base font-semibold">Produs</Label>
                      <Select value={orderData.product} onValueChange={(value) => setOrderData({...orderData, product: value, size: ''})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selectați produsul" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(products).map((product) => (
                            <SelectItem key={product} value={product}>{product}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Size Selection */}
                    {orderData.product && (
                      <div className="space-y-4">
                        <Label htmlFor="size" className="text-base font-semibold">Dimensiune</Label>
                        <Select value={orderData.size} onValueChange={(value) => setOrderData({...orderData, size: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selectați dimensiunea" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(currentProduct || {}).map(([size, price]) => (
                              <SelectItem key={size} value={size}>{size} - {price} MDL</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {/* Quantity */}
                    <div className="space-y-2">
                      <Label htmlFor="quantity" className="text-base font-semibold">Cantitate</Label>
                      <Input
                        id="quantity"
                        type="number"
                        min="1"
                        max="10"
                        value={orderData.quantity}
                        onChange={(e) => setOrderData({...orderData, quantity: parseInt(e.target.value) || 1})}
                        className="w-24"
                      />
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-4 pt-6 border-t">
                      <h3 className="text-lg font-semibold">Informații Personale</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nume Complet *</Label>
                          <Input
                            id="name"
                            value={orderData.name}
                            onChange={(e) => setOrderData({...orderData, name: e.target.value})}
                            placeholder="Ion Popescu"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefon *</Label>
                          <Input
                            id="phone"
                            value={orderData.phone}
                            onChange={(e) => setOrderData({...orderData, phone: e.target.value})}
                            placeholder="+373 69 123 456"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={orderData.email}
                          onChange={(e) => setOrderData({...orderData, email: e.target.value})}
                          placeholder="ion@example.com"
                        />
                      </div>
                    </div>

                    {/* Delivery Information */}
                    <div className="space-y-4 pt-6 border-t">
                      <h3 className="text-lg font-semibold">Informații Livrare</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Adresa *</Label>
                        <Input
                          id="address"
                          value={orderData.address}
                          onChange={(e) => setOrderData({...orderData, address: e.target.value})}
                          placeholder="Str. Ștefan cel Mare 123, ap. 45"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city">Orașul *</Label>
                        <Select value={orderData.city} onValueChange={(value) => setOrderData({...orderData, city: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selectați orașul" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="chisinau">Chișinău</SelectItem>
                            <SelectItem value="balti">Bălți</SelectItem>
                            <SelectItem value="tiraspol">Tiraspol</SelectItem>
                            <SelectItem value="cahul">Cahul</SelectItem>
                            <SelectItem value="ungheni">Ungheni</SelectItem>
                            <SelectItem value="soroca">Soroca</SelectItem>
                            <SelectItem value="orhei">Orhei</SelectItem>
                            <SelectItem value="comrat">Comrat</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-4 pt-6 border-t">
                      <h3 className="text-lg font-semibold">Metoda de Plată</h3>
                      <Select value={orderData.paymentMethod} onValueChange={(value) => setOrderData({...orderData, paymentMethod: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selectați metoda de plată" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cash">Numerar la Livrare</SelectItem>
                          <SelectItem value="card">Card Bancar</SelectItem>
                          <SelectItem value="transfer">Transfer Bancar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Plasează Comanda
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Sumar Comandă</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {orderData.product && orderData.size && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b">
                        <div>
                          <h4 className="font-semibold">{orderData.product}</h4>
                          <p className="text-sm text-muted-foreground">{orderData.size}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{currentPrice} MDL</p>
                          <p className="text-sm text-muted-foreground">x {orderData.quantity}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Subtotal:</span>
                          <span>{totalPrice} MDL</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Livrare:</span>
                          <span>{deliveryFee === 0 ? 'GRATUIT' : `${deliveryFee} MDL`}</span>
                        </div>
                        {deliveryFee === 0 && (
                          <p className="text-xs text-green-600">🎉 Livrare gratuită pentru comenzi peste 300 MDL</p>
                        )}
                        <div className="flex justify-between text-lg font-bold pt-2 border-t">
                          <span>Total:</span>
                          <span>{finalTotal} MDL</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Delivery Info */}
                  <div className="space-y-4 pt-6 border-t">
                    <div className="flex items-center space-x-3">
                      <Truck className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Livrare Rapidă</p>
                        <p className="text-sm text-muted-foreground">1-2 zile lucrătoare</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Garanție Calitate</p>
                        <p className="text-sm text-muted-foreground">100% miere naturală</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Checkout;
