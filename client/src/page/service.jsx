import React from "react";
import { Home, Building2, Brush, Sparkles, Trees, CheckCircle, Star, Phone, Mail, Clock } from "lucide-react";

export default function Service() {
  const services = [
    {
      icon: Home,
      title: "Home Cleaning",
      description: "Complete home cleaning including floors, bathrooms, kitchens, and more.",
      features: ["Deep sanitization", "Eco-friendly products", "Flexible scheduling"],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
    },
    {
      icon: Building2,
      title: "Office Cleaning",
      description: "Daily and weekly office cleaning to keep your workspace spotless.",
      features: ["After-hours service", "Professional team", "Custom plans"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Intensive cleaning for moving in/out, renovations, and seasonal refresh.",
      features: ["Move-in/out ready", "Post-renovation", "Seasonal refresh"],
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&h=600&fit=crop"
    },
    {
      icon: Brush,
      title: "Carpet Cleaning",
      description: "Steam cleaning and stain removal for carpets, rugs, and upholstery.",
      features: ["Steam cleaning", "Stain removal", "Fast drying"],
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&h=600&fit=crop"
    },
    {
      icon: Sparkles,
      title: "Window Cleaning",
      description: "Interior & exterior window cleaning for homes and buildings.",
      features: ["Streak-free shine", "High-rise capability", "Screen cleaning"],
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop"
    },
    {
      icon: Trees,
      title: "Outdoor Cleaning",
      description: "Compound sweeping, pressure washing, and outdoor maintenance.",
      features: ["Pressure washing", "Patio cleaning", "Driveway care"],
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      {/* Hero Section with Background Image */}
      <div className="relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1920&h=1080&fit=crop" 
            alt="Cleaning services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-indigo-900/95"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm px-6 py-2 rounded-full border border-yellow-400/30">
              <Star className="text-yellow-400" size={18} fill="currentColor" />
              <span className="text-yellow-200 font-medium">Premium Cleaning Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Spotless Spaces,<br />Happy Places
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Professional, reliable, and eco-friendly cleaning solutions for your home, office, and commercial spaces.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg">
                <CheckCircle className="text-green-400" size={20} />
                <span className="text-sm font-medium">Certified Professionals</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg">
                <CheckCircle className="text-green-400" size={20} />
                <span className="text-sm font-medium">100% Satisfaction</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg">
                <CheckCircle className="text-green-400" size={20} />
                <span className="text-sm font-medium">Eco-Friendly</span>
              </div>
            </div>

            <button className="mt-6 bg-yellow-400 text-blue-900 font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-yellow-300 transition-all hover:scale-105 hover:shadow-2xl">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid with Images */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Our Services</h2>
          <p className="text-xl text-blue-200">Choose from our comprehensive range of cleaning solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-blue-700/50 to-blue-800/50 backdrop-blur-sm rounded-2xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-2 overflow-hidden"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 bg-yellow-400/90 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                  <service.icon className="text-blue-900" size={24} />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-blue-100 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-blue-200">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 font-semibold py-2 rounded-lg transition-all border border-yellow-400/30 hover:border-yellow-400/50">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section with Image */}
      <div className="bg-blue-950/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-yellow-400 mb-6">Why Choose Us?</h2>
              <p className="text-blue-200 text-lg mb-6">
                We're not just another cleaning service. We're your partner in creating healthy, beautiful spaces.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-blue-800/30 p-4 rounded-lg">
                  <Clock className="text-yellow-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-1">Flexible Scheduling</h3>
                    <p className="text-blue-200">Book services at your convenience, including weekends and holidays.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-blue-800/30 p-4 rounded-lg">
                  <CheckCircle className="text-yellow-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-1">Quality Guaranteed</h3>
                    <p className="text-blue-200">100% satisfaction guarantee or we'll make it right, no questions asked.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-blue-800/30 p-4 rounded-lg">
                  <Star className="text-yellow-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-1">Trusted Professionals</h3>
                    <p className="text-blue-200">Fully trained, vetted, and insured cleaning experts you can trust.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1527515545081-5db817172677?w=800&h=1000&fit=crop" 
                alt="Professional cleaning team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-blue-900 p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm font-semibold">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=800&fit=crop" 
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative px-8 py-16 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Ready for a Sparkling Clean Space?
            </h3>
            <p className="text-blue-800 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Book our professional cleaning services today and experience the difference. Fast, reliable, and friendly service at your convenience.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <button className="bg-blue-900 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-800 transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2">
                <Phone size={20} />
                Call Now
              </button>
              <button className="bg-white text-blue-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-50 transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2">
                <Mail size={20} />
                Email Us
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-blue-800 text-sm font-medium">
              <span>📞 Available 24/7</span>
              <span>🚀 Same-day service</span>
              <span>✨ Satisfaction guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}