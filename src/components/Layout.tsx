import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Heart, 
  ShoppingBag,
  MapPin,
  Plane,
  Building,
  Compass,
  Tag,
  Star,
  Phone,
  Info
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: MapPin },
    { name: 'Destinations', href: '/destinations', icon: Compass },
    { name: 'Flights', href: '/flights', icon: Plane },
    { name: 'Hotels', href: '/hotels', icon: Building },
    { name: 'Activities', href: '/activities', icon: Compass },
    { name: 'Deals', href: '/deals', icon: Tag },
    { name: 'Reviews', href: '/reviews', icon: Star },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'About', href: '/about', icon: Info },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-black" />
              </div>
              <span className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                Kenya Luxury
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.slice(0, 6).map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-amber-300 bg-amber-900/20'
                        : 'text-amber-100 hover:text-amber-300 hover:bg-amber-900/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* User Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-amber-100 hover:text-amber-300 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-amber-100 hover:text-amber-300 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <Link
                to="/account"
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-lg transition-all duration-300"
              >
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">Account</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-amber-100 hover:text-amber-300 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-amber-900/20">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-amber-300 bg-amber-900/20'
                        : 'text-amber-100 hover:text-amber-300 hover:bg-amber-900/10'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-amber-900/20">
                <Link
                  to="/account"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg"
                >
                  <User className="w-5 h-5" />
                  <span>My Account</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 border-t border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <span className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                  Kenya Luxury
                </span>
              </div>
              <p className="text-amber-100/80 text-lg leading-relaxed mb-6">
                Discover the soul of Africa through extraordinary adventures. We craft bespoke luxury travel experiences that connect you with Kenya's breathtaking landscapes, incredible wildlife, and rich cultural heritage.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-amber-900/20 hover:bg-amber-900/40 rounded-lg flex items-center justify-center text-amber-300 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </button>
                <button className="w-10 h-10 bg-amber-900/20 hover:bg-amber-900/40 rounded-lg flex items-center justify-center text-amber-300 transition-colors">
                  <span className="text-sm font-bold">t</span>
                </button>
                <button className="w-10 h-10 bg-amber-900/20 hover:bg-amber-900/40 rounded-lg flex items-center justify-center text-amber-300 transition-colors">
                  <span className="text-sm font-bold">in</span>
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif text-amber-300 mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.slice(0, 5).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-amber-100/80 hover:text-amber-300 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif text-amber-300 mb-6">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/contact" className="text-amber-100/80 hover:text-amber-300 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-amber-100/80 hover:text-amber-300 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-amber-100/80 hover:text-amber-300 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-amber-100/80 hover:text-amber-300 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-amber-900/20 mt-12 pt-8 text-center">
            <p className="text-amber-100/60">
              © 2024 Kenya Luxury Travel. All rights reserved. Crafted with passion for extraordinary journeys.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;