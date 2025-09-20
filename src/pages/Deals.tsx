import React from 'react';
import { Tag, Clock, MapPin, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { deals } from '../data/mockData';

const Deals: React.FC = () => {
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  const getDealTypeColor = (type: string) => {
    const colors = {
      flight: 'bg-blue-600/80',
      hotel: 'bg-green-600/80',
      package: 'bg-purple-600/80',
      activity: 'bg-orange-600/80'
    };
    return colors[type as keyof typeof colors] || 'bg-amber-600/80';
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-6">
            Deals & Offers
          </h1>
          <p className="text-xl text-amber-100/80 max-w-3xl leading-relaxed">
            Discover exclusive deals and limited-time offers for your dream Kenyan adventure.
          </p>
        </div>
      </section>

      {/* Deals Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-amber-300 mb-4">Limited Time Offers</h2>
            <p className="text-amber-100/80 text-lg max-w-2xl mx-auto">
              Take advantage of these exclusive deals and save on your luxury Kenyan experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deals.map((deal) => (
              <div
                key={deal.id}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-900/20 hover:border-amber-700/40 transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${deal.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Deal Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 ${getDealTypeColor(deal.type)} backdrop-blur-sm text-white text-xs font-medium rounded-full capitalize`}>
                      {deal.type}
                    </span>
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      -{deal.discount}%
                    </div>
                  </div>

                  {/* Savings */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-green-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Save ${deal.originalPrice - deal.discountPrice}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {deal.title}
                  </h3>

                  <p className="text-amber-100/80 text-sm mb-4 leading-relaxed">
                    {deal.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-amber-200/60 text-lg line-through">
                        ${deal.originalPrice}
                      </span>
                      <span className="text-2xl font-bold text-amber-300">
                        ${deal.discountPrice}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-200 text-sm mb-6">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Valid until {formatDate(deal.validUntil)}</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white py-3 px-6 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                    <span>Claim Deal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-amber-900/20 to-amber-800/20 rounded-2xl p-8 border border-amber-700/30 text-center">
            <h3 className="text-3xl font-serif text-amber-300 mb-4">Never Miss a Deal</h3>
            <p className="text-amber-100/80 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about exclusive offers, flash sales, and limited-time promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deals;