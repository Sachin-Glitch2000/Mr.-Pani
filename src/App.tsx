import React, { useState, useEffect } from 'react';
import { 
  Droplets, 
  Truck, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight,
  Award,
  Users,
  Calendar,
  Building2,
  HardHat,
  Utensils,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Header = ({ onOrderClick }: { onOrderClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Quality', href: '#quality' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <Droplets className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            Mr. <span className="text-primary">Pani</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onOrderClick}
            className="btn-primary py-2 px-5 text-sm"
          >
            Order Now
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4 border-t border-slate-100"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-700 py-2"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                onOrderClick();
                setIsMobileMenuOpen(false);
              }}
              className="btn-primary w-full"
            >
              Order Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = ({ onOrderClick }: { onOrderClick: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50 rounded-bl-[100px] hidden lg:block" />
      <div className="absolute top-20 left-10 -z-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
      
      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            <span>Fastest Delivery in Kathmandu & Pokhara</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Pure Water. <br />
            <span className="text-primary">Reliable Delivery.</span> <br />
            Every Time.
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Mr. Pani provides certified safe drinking water for households, offices, and construction sites across Nepal. Experience the convenience of 1-click ordering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={onOrderClick} className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2">
              Order Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Check Availability
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-sm text-slate-500">
              <span className="font-bold text-slate-900">5,000+</span> Happy Customers Served
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800" 
              alt="Water Delivery" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Trust Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-slate-100">
            <div className="bg-green-100 p-3 rounded-full">
              <ShieldCheck className="text-green-600 w-8 h-8" />
            </div>
            <div>
              <div className="font-bold text-slate-900">ISO Certified</div>
              <div className="text-xs text-slate-500">100% Pure & Safe</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustIndicators = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '12+' },
    { icon: Users, label: 'Active Customers', value: '5,000+' },
    { icon: MapPin, label: 'Cities Covered', value: '15+' },
    { icon: Clock, label: 'Avg. Delivery Time', value: '45m' },
  ];

  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="bg-white p-3 rounded-xl shadow-sm mb-3">
                <stat.icon className="text-primary w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = ({ onOrderClick }: { onOrderClick: () => void }) => {
  const services = [
    {
      title: 'Jar Water Delivery',
      desc: 'Premium 20L jar delivery for homes and offices. Regular subscriptions available.',
      icon: Droplets,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Tanker Supply',
      desc: 'Bulk water supply for apartments, hotels, and hospitals. 5,000L to 12,000L options.',
      icon: Truck,
      color: 'bg-cyan-50 text-cyan-600',
    },
    {
      title: 'Construction Supply',
      desc: 'Reliable water supply for construction sites and industrial projects.',
      icon: HardHat,
      color: 'bg-orange-50 text-orange-600',
    },
    {
      title: 'Commercial Supply',
      desc: 'Tailored water solutions for restaurants, hotels, and corporate buildings.',
      icon: Building2,
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      title: 'Event Water Supply',
      desc: 'Specialized supply for weddings, parties, and large public gatherings.',
      icon: Calendar,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'Emergency Delivery',
      desc: 'Ran out of water? Our express team delivers within 60 minutes.',
      icon: Zap,
      color: 'bg-red-50 text-red-600',
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Our Services</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive Water Solutions</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="card group"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
              <service.icon className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
            <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
            <button 
              onClick={onOrderClick}
              className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              Order Now <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: 'Place Order', desc: 'Select your water type and quantity via our app or website.', icon: '01' },
    { title: 'Confirm Delivery', desc: 'Our team confirms your location and delivery time slot.', icon: '02' },
    { title: 'Receive Water', desc: 'Fresh, pure water delivered right to your doorstep.', icon: '03' },
  ];

  return (
    <section className="bg-slate-900 text-white section-padding overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32" />
      
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Simple Process</h2>
        <h3 className="text-3xl md:text-4xl font-bold">How It Works</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative z-10">
        {steps.map((step, idx) => (
          <div key={idx} className="relative text-center">
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-slate-800 -z-10" />
            )}
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-lg shadow-primary/20">
              {step.icon}
            </div>
            <h4 className="text-xl font-bold mb-4">{step.title}</h4>
            <p className="text-slate-400 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Pricing = ({ onOrderClick }: { onOrderClick: () => void }) => {
  const plans = [
    {
      name: 'Single Jar',
      price: 'Rs. 50',
      unit: '/ jar',
      features: ['20L Premium Jar', 'Standard Delivery', 'Pay on Delivery'],
      popular: false,
    },
    {
      name: 'Monthly Subscription',
      price: 'Rs. 1,200',
      unit: '/ month',
      features: ['30 Jars per month', 'Priority Delivery', 'Free Jar Cleaning', 'Monthly Billing'],
      popular: true,
    },
    {
      name: 'Tanker Supply',
      price: 'Rs. 2,500',
      unit: '/ 5000L',
      features: ['Bulk Water Supply', 'Same Day Delivery', 'Quality Certified', 'Volume Discount'],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Pricing</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Transparent & Affordable</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`card relative flex flex-col ${plan.popular ? 'border-primary ring-4 ring-primary/5' : ''}`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                Most Popular
              </div>
            )}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                <span className="text-slate-500">{plan.unit}</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={onOrderClick}
              className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const OrderModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    waterType: '',
    quantity: '',
    address: '',
    deliveryTime: '',
    payment: 'COD'
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully! We will contact you shortly.');
    onClose();
    setStep(1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Quick Order</h3>
                  <p className="text-slate-500 text-sm">Step {step} of 4</p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X className="w-6 h-6 text-slate-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">Select Water Type</label>
                    <div className="grid grid-cols-2 gap-4">
                      {['Jar Water', 'Tanker Supply', 'Bulk Bottles', 'Emergency'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, waterType: type });
                            nextStep();
                          }}
                          className={`p-4 rounded-2xl border-2 text-left transition-all ${formData.waterType === type ? 'border-primary bg-blue-50 text-primary' : 'border-slate-100 hover:border-slate-200'}`}
                        >
                          <div className="font-bold">{type}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">Quantity</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 5 Jars or 5000L"
                      className="w-full p-4 rounded-xl border-2 border-slate-100 focus:border-primary outline-none mb-6"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      required
                    />
                    <button type="button" onClick={nextStep} className="btn-primary w-full">Continue</button>
                    <button type="button" onClick={prevStep} className="w-full mt-4 text-slate-500 font-bold">Back</button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">Delivery Details</label>
                    <input 
                      type="text" 
                      placeholder="Full Delivery Address"
                      className="w-full p-4 rounded-xl border-2 border-slate-100 focus:border-primary outline-none mb-4"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                    />
                    <select 
                      className="w-full p-4 rounded-xl border-2 border-slate-100 focus:border-primary outline-none mb-6"
                      value={formData.deliveryTime}
                      onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })}
                      required
                    >
                      <option value="">Select Delivery Time</option>
                      <option value="ASAP">As soon as possible</option>
                      <option value="Morning">Morning (8 AM - 12 PM)</option>
                      <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening">Evening (4 PM - 8 PM)</option>
                    </select>
                    <button type="button" onClick={nextStep} className="btn-primary w-full">Continue</button>
                    <button type="button" onClick={prevStep} className="w-full mt-4 text-slate-500 font-bold">Back</button>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">Payment Method</label>
                    <div className="space-y-3 mb-8">
                      {['Cash on Delivery', 'Mobile Wallet (eSewa/Khalti)', 'Bank Transfer'].map((method) => (
                        <label key={method} className="flex items-center gap-3 p-4 rounded-xl border-2 border-slate-100 cursor-pointer hover:bg-slate-50">
                          <input 
                            type="radio" 
                            name="payment" 
                            checked={formData.payment === method}
                            onChange={() => setFormData({ ...formData, payment: method })}
                          />
                          <span className="font-medium text-slate-700">{method}</span>
                        </label>
                      ))}
                    </div>
                    <button type="submit" className="btn-primary w-full">Place Order Now</button>
                    <button type="button" onClick={prevStep} className="w-full mt-4 text-slate-500 font-bold">Back</button>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="section-padding grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-primary p-2 rounded-lg">
              <Droplets className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-slate-900">
              Mr. <span className="text-primary">Pani</span>
            </span>
          </div>
          <p className="text-slate-500 leading-relaxed mb-6">
            Nepal's most trusted water delivery network. Providing pure, certified safe drinking water to your doorstep since 2012.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            {[1, 2, 3].map(i => (
              <div key={i} className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all cursor-pointer">
                <Star className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'About Us', 'Services', 'Pricing', 'Quality Control'].map(link => (
              <li key={link}>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Services</h4>
          <ul className="space-y-4">
            {['Jar Delivery', 'Tanker Supply', 'Bulk Water', 'Emergency Supply', 'Commercial'].map(link => (
              <li key={link}>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-slate-500">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Kathmandu, Nepal</span>
            </li>
            <li className="flex items-center gap-3 text-slate-500">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <span>+977 1-4XXXXXX</span>
            </li>
            <li className="flex items-center gap-3 text-slate-500">
              <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span>WhatsApp: +977 98XXXXXXXX</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-slate-200 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Mr. Pani Water Supply. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/9779800000000" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
  >
    <MessageCircle className="w-8 h-8" />
    <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl shadow-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
      Chat with us
    </span>
  </a>
);

// --- Main App ---

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const openOrderModal = () => setIsOrderModalOpen(true);
  const closeOrderModal = () => setIsOrderModalOpen(false);

  return (
    <div className="min-h-screen">
      <Header onOrderClick={openOrderModal} />
      
      <main>
        <Hero onOrderClick={openOrderModal} />
        <TrustIndicators />
        <Services onOrderClick={openOrderModal} />
        
        <section id="quality" className="bg-blue-600 py-20 text-white">
          <div className="section-padding grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-blue-200 font-bold tracking-wider uppercase text-sm mb-3">Quality Guaranteed</h2>
              <h3 className="text-4xl font-bold mb-8">Certified Pure. Lab Tested.</h3>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                We don't just deliver water; we deliver health. Every drop of Mr. Pani water undergoes a rigorous 7-stage purification process and is tested daily in our state-of-the-art laboratory.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  'ISO 9001:2015 Certified',
                  'Daily Lab Testing',
                  '7-Stage Purification',
                  'BPA-Free Jars',
                  'UV & Ozone Treated',
                  'Mineral Balanced'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-white/20 p-1 rounded-full">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Lab Testing" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block">
                <div className="text-blue-600 font-black text-5xl mb-1">99.9%</div>
                <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Purity Rating</div>
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />
        
        <section className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">What Our Customers Say</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sita Sharma', role: 'Housewife', quote: 'The most reliable water delivery I have found in Kathmandu. Always on time and the water tastes great.' },
              { name: 'Rajesh Gupta', role: 'Restaurant Owner', quote: 'Mr. Pani handles our bulk supply perfectly. Their tanker service is professional and the pricing is transparent.' },
              { name: 'Anil Thapa', role: 'Office Manager', quote: 'The subscription model is a lifesaver for our office. We never have to worry about running out of water.' },
            ].map((t, i) => (
              <div key={i} className="card">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img src={`https://picsum.photos/seed/customer${i}/100/100`} alt={t.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Pricing onOrderClick={openOrderModal} />

        <section className="bg-blue-50 py-24">
          <div className="section-padding text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Need Water Today?</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Order in less than 2 minutes. Our express delivery team is ready to serve you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={openOrderModal} className="btn-primary text-xl px-12 py-5">
                Order Online Now
              </button>
              <a href="tel:+97714XXXXXX" className="btn-secondary text-xl px-12 py-5 flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" /> Call Now
              </a>
            </div>
            <div className="mt-8 text-slate-500 font-medium">
              Order before 4 PM for same-day delivery!
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <OrderModal isOpen={isOrderModalOpen} onClose={closeOrderModal} />
    </div>
  );
}
