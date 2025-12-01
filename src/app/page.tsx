export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 dark:from-zinc-900 dark:to-zinc-800">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-rose-100 dark:border-zinc-800 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💄</span>
            <span className="text-xl font-semibold text-rose-600 dark:text-rose-400">Beauty Pass</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-zinc-600 hover:text-rose-600 dark:text-zinc-300 dark:hover:text-rose-400 transition-colors">Services</a>
            <a href="#about" className="text-zinc-600 hover:text-rose-600 dark:text-zinc-300 dark:hover:text-rose-400 transition-colors">About</a>
            <a href="#pricing" className="text-zinc-600 hover:text-rose-600 dark:text-zinc-300 dark:hover:text-rose-400 transition-colors">Pricing</a>
            <a href="#contact" className="text-zinc-600 hover:text-rose-600 dark:text-zinc-300 dark:hover:text-rose-400 transition-colors">Contact</a>
          </div>
          <button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Book Now
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
            Your Gateway to
            <span className="text-rose-600 dark:text-rose-400 block">Exclusive Beauty</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto mb-8">
            Discover premium beauty services, exclusive treatments, and personalized experiences at top salons with Beauty Pass.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Get Your Pass
            </button>
            <button className="border-2 border-rose-600 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-zinc-900 dark:text-white mb-12">
            Our Premium Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '✨', title: 'Skin Care', description: 'Professional facials and skin treatments for radiant, healthy skin.' },
              { icon: '💇‍♀️', title: 'Hair Styling', description: 'Expert cuts, coloring, and styling from top professionals.' },
              { icon: '💅', title: 'Nail Art', description: 'Manicures, pedicures, and creative nail designs.' },
              { icon: '💆‍♀️', title: 'Massage & Spa', description: 'Relaxing massages and rejuvenating spa treatments.' },
              { icon: '👁️', title: 'Makeup', description: 'Professional makeup for any occasion, from everyday to glamour.' },
              { icon: '🌸', title: 'Wellness', description: 'Holistic wellness treatments for mind, body, and soul.' },
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-rose-100 dark:border-zinc-700">
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                Why Choose Beauty Pass?
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
                Beauty Pass connects you with the finest beauty salons and spas in your area. Enjoy exclusive discounts, priority booking, and personalized recommendations.
              </p>
              <ul className="space-y-4">
                {[
                  'Access to premium salons',
                  'Exclusive member discounts',
                  'Priority booking',
                  'Personalized recommendations',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400">✓</span>
                    <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-900/40 dark:to-pink-900/40 rounded-3xl h-80 flex items-center justify-center">
              <span className="text-8xl">💄</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-zinc-900 dark:text-white mb-12">
            Choose Your Pass
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Basic', price: '$29', period: '/month', features: ['5 treatments/month', 'Basic discounts', 'Standard booking'] },
              { name: 'Premium', price: '$59', period: '/month', features: ['15 treatments/month', '20% discounts', 'Priority booking', 'Free consultations'], popular: true },
              { name: 'VIP', price: '$99', period: '/month', features: ['Unlimited treatments', '30% discounts', 'VIP booking', 'Personal stylist', 'Exclusive events'] },
            ].map((plan, index) => (
              <div key={index} className={`bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg ${plan.popular ? 'ring-2 ring-rose-600 scale-105' : ''} border border-rose-100 dark:border-zinc-700`}>
                {plan.popular && (
                  <span className="bg-rose-600 text-white text-sm px-3 py-1 rounded-full mb-4 inline-block">Most Popular</span>
                )}
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-rose-600 dark:text-rose-400">{plan.price}</span>
                  <span className="text-zinc-600 dark:text-zinc-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                      <span className="text-rose-600 dark:text-rose-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-medium transition-colors ${plan.popular ? 'bg-rose-600 hover:bg-rose-700 text-white' : 'border-2 border-rose-600 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8">
            Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.
          </p>
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-600"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-600"
              />
            </div>
            <textarea 
              placeholder="Your Message" 
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-rose-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-600"
            ></textarea>
            <button type="submit" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💄</span>
                <span className="text-xl font-semibold text-rose-400">Beauty Pass</span>
              </div>
              <p className="text-zinc-400">Your gateway to exclusive beauty services and premium salon experiences.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#services" className="hover:text-rose-400 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-rose-400 transition-colors">About</a></li>
                <li><a href="#pricing" className="hover:text-rose-400 transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>info@beautypass.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-zinc-400 hover:text-rose-400 transition-colors">Instagram</a>
                <a href="#" className="text-zinc-400 hover:text-rose-400 transition-colors">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-400">
            <p>&copy; 2024 Beauty Pass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
