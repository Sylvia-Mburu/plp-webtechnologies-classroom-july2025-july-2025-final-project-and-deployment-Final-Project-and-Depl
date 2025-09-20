import React, { useState } from 'react';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import DestinationCard from '../components/DestinationCard';
import Modal from '../components/Modal';
import { destinations } from '../data/mockData';
import { Destination } from '../types';

const Home: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const featuredDestinations = destinations.slice(0, 6);

  const handleSearch = (query: string, destination: string, dates: string, guests: string) => {
    console.log('Search:', { query, destination, dates, guests });
    // Implement search logic
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-orange-900/30" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6 tracking-wide">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-amber-300 animate-pulse">
              KENYA
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-amber-100 mb-12 max-w-4xl leading-relaxed font-light">
            Discover the Soul of Africa Through Extraordinary Adventures
          </p>
          
          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} className="max-w-4xl w-full mb-8" />
          
          <div className="flex items-center space-x-8 text-amber-200">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm uppercase tracking-widest">East Africa</span>
            </div>
            <div className="w-px h-8 bg-amber-400/30" />
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm uppercase tracking-widest">Premium Experiences</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-6">
              Featured Destinations
            </h2>
            <p className="text-xl text-amber-100/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Each destination tells a story of ancient landscapes, extraordinary wildlife, and timeless cultures waiting to be discovered.
            </p>
            <Link
              to="/destinations"
              className="inline-flex items-center space-x-2 text-amber-300 hover:text-amber-200 transition-colors group"
            >
              <span>View All Destinations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onClick={setSelectedDestination}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-6">
              Why Choose Kenya Luxury
            </h2>
            <p className="text-xl text-amber-100/80 max-w-3xl mx-auto leading-relaxed">
              We craft bespoke luxury travel experiences that connect you with Kenya's breathtaking beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-b from-amber-900/10 to-transparent rounded-2xl border border-amber-900/20">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif text-amber-300 mb-4">Luxury Experiences</h3>
              <p className="text-amber-100/80 leading-relaxed">
                Handpicked luxury accommodations and exclusive experiences that exceed expectations.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-b from-amber-900/10 to-transparent rounded-2xl border border-amber-900/20">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif text-amber-300 mb-4">Expert Guides</h3>
              <p className="text-amber-100/80 leading-relaxed">
                Local experts who share their passion and deep knowledge of Kenya's wildlife and culture.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-b from-amber-900/10 to-transparent rounded-2xl border border-amber-900/20">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white fill-current" />
              </div>
              <h3 className="text-2xl font-serif text-amber-300 mb-4">Personalized Service</h3>
              <p className="text-amber-100/80 leading-relaxed">
                Tailored itineraries designed around your interests, preferences, and travel style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Modal */}
      <Modal isOpen={!!selectedDestination} onClose={() => setSelectedDestination(null)}>
        {selectedDestination && (
          <>
            <div className="relative h-80">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedDestination.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black/50 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">
                  {selectedDestination.name}
                </h2>
                <div className="flex items-center text-amber-300 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-lg">{selectedDestination.location}</span>
                </div>
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(selectedDestination.rating)
                          ? 'fill-current'
                          : 'fill-current opacity-30'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-amber-200">
                    {selectedDestination.rating} / 5.0
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 overflow-y-auto max-h-[calc(90vh-320px)]">
              <p className="text-amber-100/90 text-lg leading-relaxed mb-8">
                {selectedDestination.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-black/30 rounded-xl p-6">
                  <span className="text-amber-400 font-medium block mb-2">Duration</span>
                  <p className="text-amber-100">{selectedDestination.duration}</p>
                </div>
                <div className="bg-black/30 rounded-xl p-6">
                  <span className="text-amber-400 font-medium block mb-2">Group Size</span>
                  <p className="text-amber-100">{selectedDestination.groupSize}</p>
                </div>
                <div className="bg-black/30 rounded-xl p-6">
                  <span className="text-amber-400 font-medium block mb-2">Price</span>
                  <p className="text-amber-100 text-xl font-semibold">{selectedDestination.price}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-serif text-amber-300 mb-4">Experience Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  {selectedDestination.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-amber-900/20 to-amber-800/20 rounded-lg p-4 border border-amber-700/30"
                    >
                      <span className="text-amber-200 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 hover:scale-105">
                  Book Experience
                </button>
                <button className="px-8 py-3 border-2 border-amber-600 text-amber-300 rounded-full font-medium hover:bg-amber-600 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Home;