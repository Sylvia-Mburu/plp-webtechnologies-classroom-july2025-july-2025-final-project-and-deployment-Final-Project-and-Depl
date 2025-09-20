import React from 'react';
import { MapPin, Star, Clock, Users } from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  onClick: (destination: Destination) => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onClick }) => {
  return (
    <div
      className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-700 hover:scale-105 hover:-translate-y-2"
      onClick={() => onClick(destination)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${destination.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Category Badge */}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-amber-600/80 backdrop-blur-sm text-white text-xs font-medium rounded-full capitalize">
          {destination.category}
        </span>
      </div>

      {/* Rating Badge */}
      <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
        <Star className="w-3 h-3 text-amber-400 fill-current" />
        <span className="text-white text-xs font-medium">{destination.rating}</span>
      </div>
      
      {/* Card Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="backdrop-blur-sm bg-black/30 rounded-xl p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
            {destination.name}
          </h3>
          <div className="flex items-center text-amber-200 mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{destination.location}</span>
          </div>
          
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
            <p className="text-amber-100/80 text-sm mb-4 line-clamp-2">
              {destination.description.substring(0, 100)}...
            </p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-amber-200 text-xs">
                <Clock className="w-3 h-3 mr-1" />
                <span>{destination.duration}</span>
              </div>
              <div className="flex items-center text-amber-200 text-xs">
                <Users className="w-3 h-3 mr-1" />
                <span>{destination.groupSize}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-amber-300 font-semibold">{destination.price}</span>
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl shadow-xl shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow duration-500" />
      </div>
    </div>
  );
};

export default DestinationCard;