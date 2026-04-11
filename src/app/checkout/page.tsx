'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { Button, Input } from '@/components/ui';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart, isLoading } = useCart();
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirm'>('shipping');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const subtotal = cart.total;
  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateShipping = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zip) newErrors.zip = 'ZIP code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePayment = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.cardName) newErrors.cardName = 'Cardholder name is required';
    if (!formData.cardNumber || formData.cardNumber.length < 13)
      newErrors.cardNumber = 'Valid card number is required';
    if (!formData.expiry || !formData.expiry.match(/^\d{2}\/\d{2}$/))
      newErrors.expiry = 'Expiry must be MM/YY';
    if (!formData.cvv || formData.cvv.length < 3)
      newErrors.cvv = 'Valid CVV is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 'shipping') {
      if (validateShipping()) {
        setStep('payment');
      }
    } else if (step === 'payment') {
      if (validatePayment()) {
        setStep('confirm');
      }
    }
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      router.push('/order-confirmation');
    }, 1500);
  };

  if (isLoading || cart.items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          {isLoading ? (
            <p>Loading checkout...</p>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-4">Your cart is empty</p>
              <Link href="/">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          )}
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Progress bar */}
        <div className="bg-cream py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                  step === 'shipping' || step === 'payment' || step === 'confirm'
                    ? 'bg-clay-dark text-white'
                    : 'bg-gray-200'
                }`}
              >
                1
              </div>
              <div className={`h-1 w-12 ${['payment', 'confirm'].includes(step) ? 'bg-clay-dark' : 'bg-gray-200'}`} />
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                  step === 'payment' || step === 'confirm' ? 'bg-clay-dark text-white' : 'bg-gray-200'
                }`}
              >
                2
              </div>
              <div className={`h-1 w-12 ${step === 'confirm' ? 'bg-clay-dark' : 'bg-gray-200'}`} />
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                  step === 'confirm' ? 'bg-clay-dark text-white' : 'bg-gray-200'
                }`}
              >
                3
              </div>
            </div>
            <div className="flex justify-center gap-8 text-sm">
              <span className={step === 'shipping' ? 'font-bold text-charcoal' : 'text-gray-600'}>
                Shipping
              </span>
              <span className={step === 'payment' ? 'font-bold text-charcoal' : 'text-gray-600'}>
                Payment
              </span>
              <span className={step === 'confirm' ? 'font-bold text-charcoal' : 'text-gray-600'}>
                Confirm
              </span>
            </div>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              {/* Shipping Step */}
              {step === 'shipping' && (
                <div className="bg-white rounded-lg p-6 md:p-8">
                  <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
                    Shipping Information
                  </h2>

                  <div className="space-y-6">
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      required
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                        required
                      />
                      <Input
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
                        required
                      />
                    </div>

                    <Input
                      label="Phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      required
                    />

                    <Input
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      error={errors.address}
                      required
                    />

                    <div className="grid grid-cols-3 gap-4">
                      <Input
                        label="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        error={errors.city}
                        required
                      />
                      <Input
                        label="State"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        error={errors.state}
                        required
                      />
                      <Input
                        label="ZIP Code"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        error={errors.zip}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <Link href="/cart" className="flex-1">
                      <Button variant="outline" size="lg" className="w-full">
                        Back to Cart
                      </Button>
                    </Link>
                    <button
                      onClick={handleNextStep}
                      className="flex-1 px-6 py-3 bg-clay-light text-charcoal font-semibold rounded-button hover:bg-clay-dark transition-colors"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {/* Payment Step */}
              {step === 'payment' && (
                <div className="bg-white rounded-lg p-6 md:p-8">
                  <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
                    Payment Information
                  </h2>

                  <div className="space-y-6">
                    <Input
                      label="Cardholder Name"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      error={errors.cardName}
                      required
                    />

                    <Input
                      label="Card Number"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      error={errors.cardNumber}
                      required
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Expiry (MM/YY)"
                        name="expiry"
                        placeholder="12/25"
                        value={formData.expiry}
                        onChange={handleChange}
                        error={errors.expiry}
                        required
                      />
                      <Input
                        label="CVV"
                        name="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleChange}
                        error={errors.cvv}
                        required
                      />
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                      For demo purposes, use any valid card details. No actual payment will be processed.
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={() => setStep('shipping')}
                      className="flex-1 px-6 py-3 border-2 border-charcoal text-charcoal font-semibold rounded-button hover:bg-charcoal hover:text-cream transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="flex-1 px-6 py-3 bg-clay-light text-charcoal font-semibold rounded-button hover:bg-clay-dark transition-colors"
                    >
                      Review Order
                    </button>
                  </div>
                </div>
              )}

              {/* Confirm Step */}
              {step === 'confirm' && (
                <div className="bg-white rounded-lg p-6 md:p-8">
                  <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">
                    Order Confirmation
                  </h2>

                  <div className="space-y-6">
                    {/* Shipping summary */}
                    <div className="bg-cream p-4 rounded-lg">
                      <h3 className="font-semibold text-charcoal mb-3">Shipping To</h3>
                      <p className="text-sm text-gray-700">
                        {formData.firstName} {formData.lastName}
                        <br />
                        {formData.address}
                        <br />
                        {formData.city}, {formData.state} {formData.zip}
                      </p>
                    </div>

                    {/* Payment summary */}
                    <div className="bg-cream p-4 rounded-lg">
                      <h3 className="font-semibold text-charcoal mb-3">Payment Method</h3>
                      <p className="text-sm text-gray-700">
                        Card ending in {formData.cardNumber.slice(-4)}
                      </p>
                    </div>

                    {/* Order items */}
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="font-semibold text-charcoal mb-4">Order Items</h3>
                      <div className="space-y-3">
                        {cart.items.map((item) => (
                          <div key={item.productId} className="flex justify-between text-sm">
                            <span className="text-gray-700">
                              Product x{item.quantity}
                            </span>
                            <span className="font-medium">${((item.quantity * 59.99)).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={() => setStep('payment')}
                      className="flex-1 px-6 py-3 border-2 border-charcoal text-charcoal font-semibold rounded-button hover:bg-charcoal hover:text-cream transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      disabled={isProcessing}
                      className="flex-1 px-6 py-3 bg-clay-light text-charcoal font-semibold rounded-button hover:bg-clay-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? 'Processing...' : 'Place Order'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Order summary sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-cream rounded-lg p-6 sticky top-20">
                <h3 className="font-semibold text-charcoal text-lg mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-gray-300 pt-4">
                  <div className="flex justify-between">
                    <span className="font-bold text-charcoal">Total</span>
                    <span className="text-2xl font-bold text-clay-dark">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
