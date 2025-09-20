import React, { useState } from 'react';
import { Search, Filter, MapPin, Star } from 'lucide-react';
import DestinationCard from '../components/DestinationCard';
import Modal from '../components/Modal';
import { destinations } from '../data/mockData';
import { Destination } from '../types';

const Destinations: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');

  const categories = [
    { value: 'all', label: 'All Destinations' },
    { value: 'safari', label: 'Safari' },
    { value: 'beach', label: 'Beach' },
    { value: 'mountain', label: 'Mountain' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'adventure', label: 'Adventure' }
  ];

  const filteredDestinations = destinations
    .filter(dest => 
      (selectedCategory === 'all' || dest.category === selectedCategory) &&
      (searchQuery === '' || dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       dest.location.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-6">
            Destinations
          </h1>
          <p className="text-xl text-amber-100/80 max-w-3xl leading-relaxed">
            Explore Kenya's most breathtaking destinations, from the legendary Maasai Mara to pristine coastal paradises.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-900/20 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 appearance-none"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value} className="bg-gray-800">
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 appearance-none"
                >
                  <option value="rating" className="bg-gray-800">Sort by Rating</option>
                  <option value="name" className="bg-gray-800">Sort by Name</option>
                  <option value="price" className="bg-gray-800">Sort by Price</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-center">
                <span className="text-amber-200">
                  {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''} found
                </span>
              </div>
            </div>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onClick={setSelectedDestination}
              />
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-12 h-12 text-amber-400" />
              </div>
              <h3 className="text-2xl font-serif text-amber-300 mb-4">No destinations found</h3>
              <p className="text-amber-100/80 max-w-md mx-auto">
                Try adjusting your search criteria or browse all destinations to discover amazing places to visit.
              </p>
            </div>
          )}
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

export default Destinations;