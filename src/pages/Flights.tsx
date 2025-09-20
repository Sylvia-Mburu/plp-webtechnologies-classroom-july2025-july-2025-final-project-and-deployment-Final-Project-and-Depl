import React, { useState } from 'react';
import { Plane, Calendar, Users, ArrowRight, Clock, MapPin } from 'lucide-react';
import { flights } from '../data/mockData';

const Flights: React.FC = () => {
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: 'Nairobi (NBO)',
    departure: '',
    return: '',
    passengers: '1',
    class: 'economy'
  });

  const [searchResults, setSearchResults] = useState(flights);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic
    console.log('Searching flights:', searchParams);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-6">
            Flights
          </h1>
          <p className="text-xl text-amber-100/80 max-w-3xl leading-relaxed">
            Find the best flights to Kenya and start your extraordinary African adventure.
          </p>
        </div>
      </section>

      {/* Flight Search */}
      <section className="py-12 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSearch} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-900/20 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="From"
                  value={searchParams.from}
                  onChange={(e) => setSearchParams({...searchParams, from: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="To"
                  value={searchParams.to}
                  onChange={(e) => setSearchParams({...searchParams, to: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                <input
                  type="date"
                  value={searchParams.departure}
                  onChange={(e) => setSearchParams({...searchParams, departure: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                <input
                  type="date"
                  placeholder="Return (optional)"
                  value={searchParams.return}
                  onChange={(e) => setSearchParams({...searchParams, return: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                <select
                  value={searchParams.passengers}
                  onChange={(e) => setSearchParams({...searchParams, passengers: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 appearance-none"
                >
                  <option value="1" className="bg-gray-800">1 Passenger</option>
                  <option value="2" className="bg-gray-800">2 Passengers</option>
                  <option value="3" className="bg-gray-800">3 Passengers</option>
                  <option value="4+" className="bg-gray-800">4+ Passengers</option>
                </select>
              </div>

              <div className="relative">
                <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                <select
                  value={searchParams.class}
                  onChange={(e) => setSearchParams({...searchParams, class: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 appearance-none"
                >
                  <option value="economy" className="bg-gray-800">Economy</option>
                  <option value="business" className="bg-gray-800">Business</option>
                  <option value="first" className="bg-gray-800">First Class</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Search Flights</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Flight Results */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-amber-300 mb-8">Available Flights</h2>
            
            {searchResults.map((flight) => (
              <div key={flight.id} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-900/20 hover:border-amber-700/40 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg flex items-center justify-center">
                        <Plane className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{flight.airline}</h3>
                        <p className="text-amber-200 text-sm capitalize">{flight.class} Class</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">{flight.departure}</p>
                        <p className="text-amber-200 text-sm">{flight.from}</p>
                      </div>
                      
                      <div className="flex-1 relative">
                        <div className="h-px bg-amber-600 relative">
                          <Plane className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-amber-400 bg-black" />
                        </div>
                        <div className="text-center mt-2">
                          <p className="text-amber-200 text-sm">{flight.duration}</p>
                          <p className="text-amber-300 text-xs">
                            {flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">{flight.arrival}</p>
                        <p className="text-amber-200 text-sm">{flight.to}</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center lg:text-right">
                    <p className="text-3xl font-bold text-amber-300 mb-2">${flight.price}</p>
                    <p className="text-amber-200 text-sm mb-4">per person</p>
                    <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105">
                      Select Flight
                    </button>
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

export default Flights;