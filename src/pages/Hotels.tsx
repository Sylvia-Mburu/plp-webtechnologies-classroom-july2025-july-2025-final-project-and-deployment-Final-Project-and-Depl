import React, { useState } from 'react';
import { Building, MapPin, Star, Wifi, Car, Coffee, Waves, Calendar, Users } from 'lucide-react';
import { hotels } from '../data/mockData';

const Hotels: React.FC = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    checkin: '',
    checkout: '',
    guests: '2',
    rooms: '1'
  });

  const [searchResults, setSearchResults] = useState(hotels);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching hotels:', searchParams);
  };

  const getAmenityIcon = (amenity: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Infinity Pool': <Waves className="w-4 h-4" />,
      'Spa': <Star className="w-4 h-4" />,
      'Fine Dining': <Coffee className="w-4 h-4" />,
      'Butler Service': <Star className="w-4 h-4" />,
      'Game Drives': <Car className="w-4 h-4" />,
      'Private Beach': <Waves className="w-4 h-4" />,
      'Water Sports': <Waves className="w-4 h-4" />,
      'Historic Manor': <Building className="w-4 h-4" />,
      'Gardens': <Star className="w-4 h-4" />,
      'Giraffe Encounters': <Star className="w-4 h-4" />
    };
    return iconMap[amenity] || <Star className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-6">
            Hotels
          </h1>
          <p className="text-xl text-amber-100/80 max-w-3xl leading-relaxed">
            Discover luxury accommodations that perfectly complement your Kenyan adventure.
          </p>
        </div>
      </section>

      {/* Hotel Search */}
      <section className="py-12 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSearch} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-900/20 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Destination"
                  value={searchParams.location}
                  onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                <input
                  type="date"
                  value={searchParams.checkin}
                  onChange={(e) => setSearchParams({...searchParams, checkin: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                <input
                  type="date"
                  value={searchParams.checkout}
                  onChange={(e) => setSearchParams({...searchParams, checkout: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                <select
                  value={searchParams.guests}
                  onChange={(e) => setSearchParams({...searchParams, guests: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 appearance-none"
                >
                  <option value="1" className="bg-gray-800">1 Guest</option>
                  <option value="2" className="bg-gray-800">2 Guests</option>
                  <option value="3" className="bg-gray-800">3 Guests</option>
                  <option value="4+" className="bg-gray-800">4+ Guests</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Search Hotels
              </button>
            </div>
          </form>

          {/* Hotel Results */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif text-amber-300 mb-8">Luxury Accommodations</h2>
            
            {searchResults.map((hotel) => (
              <div key={hotel.id} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-900/20 hover:border-amber-700/40 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${hotel.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-amber-600/80 backdrop-blur-sm text-white text-xs font-medium rounded-full capitalize">
                        {hotel.category}
                      </span>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 text-amber-400 fill-current" />
                      <span className="text-white text-xs font-medium">{hotel.rating}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-serif text-white mb-2">{hotel.name}</h3>
                        <div className="flex items-center text-amber-300 mb-4">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{hotel.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-amber-300">${hotel.price}</p>
                        <p className="text-amber-200 text-sm">per night</p>
                      </div>
                    </div>

                    <p className="text-amber-100/80 mb-6 leading-relaxed">
                      {hotel.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-amber-300 mb-3">Amenities</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {hotel.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center space-x-2 text-amber-200">
                            {getAmenityIcon(amenity)}
                            <span className="text-sm">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(hotel.rating)
                                ? 'text-amber-400 fill-current'
                                : 'text-amber-400/30 fill-current'
                            }`}
                          />
                        ))}
                        <span className="text-amber-200 text-sm ml-2">
                          {hotel.rating} / 5.0
                        </span>
                      </div>

                      <div className="flex space-x-3">
                        <button className="px-6 py-2 border-2 border-amber-600 text-amber-300 rounded-full font-medium hover:bg-amber-600 hover:text-white transition-all duration-300">
                          View Details
                        </button>
                        <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hotels;