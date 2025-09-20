import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (query: string, destination: string, dates: string, guests: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className = '' }) => {
  const [query, setQuery] = useState('');
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query, destination, dates, guests);
  };

  return (
    <form onSubmit={handleSubmit} className={`bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-amber-900/30 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Where to?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-amber-900/30 rounded-lg text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
          />
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
          <input
            type="text"
            placeholder="When?"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-amber-900/30 rounded-lg text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
          />
        </div>
        
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-amber-900/30 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 appearance-none"
          >
            <option value="" className="bg-gray-800">Guests</option>
            <option value="1" className="bg-gray-800">1 Guest</option>
            <option value="2" className="bg-gray-800">2 Guests</option>
            <option value="3-4" className="bg-gray-800">3-4 Guests</option>
            <option value="5+" className="bg-gray-800">5+ Guests</option>
          </select>
        </div>
        
        <button
          type="submit"
          className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
        >
          <Search className="w-5 h-5" />
          <span>Search</span>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;