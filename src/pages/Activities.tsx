import React, { useState } from 'react';
import { Compass, MapPin, Star, Clock, Users, Search, Filter } from 'lucide-react';
import { activities } from '../data/mockData';

const Activities: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');

  const categories = [
    { value: 'all', label: 'All Activities' },
    { value: 'safari', label: 'Safari' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'wildlife', label: 'Wildlife' },
    { value: 'scenic', label: 'Scenic' }
  ];

  const filteredActivities = activities
    .filter(activity => 
      (selectedCategory === 'all' || activity.category === selectedCategory) &&
      (searchQuery === '' || activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       activity.location.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price - b.price;
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
            Activities & Tours
          </h1>
          <p className="text-xl text-amber-100/80 max-w-3xl leading-relaxed">
            Immerse yourself in unforgettable experiences that showcase Kenya's natural wonders and rich culture.
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
                  placeholder="Search activities..."
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
                  {filteredActivities.length} activit{filteredActivities.length !== 1 ? 'ies' : 'y'} found
                </span>
              </div>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <div
                key={activity.id}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-900/20 hover:border-amber-700/40 transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${activity.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber-600/80 backdrop-blur-sm text-white text-xs font-medium rounded-full capitalize">
                      {activity.category}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-amber-400 fill-current" />
                    <span className="text-white text-xs font-medium">{activity.rating}</span>
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-4 right-4">
                    <span className="text-2xl font-bold text-amber-300">${activity.price}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {activity.name}
                  </h3>
                  
                  <div className="flex items-center text-amber-300 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{activity.location}</span>
                  </div>

                  <p className="text-amber-100/80 text-sm mb-4 leading-relaxed">
                    {activity.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-amber-200 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(activity.rating)
                              ? 'text-amber-400 fill-current'
                              : 'text-amber-400/30 fill-current'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-amber-300 mb-2">Includes:</h4>
                    <div className="space-y-1">
                      {activity.includes.slice(0, 2).map((item, index) => (
                        <div key={index} className="flex items-center text-amber-200 text-xs">
                          <div className="w-1 h-1 bg-amber-400 rounded-full mr-2" />
                          <span>{item}</span>
                        </div>
                      ))}
                      {activity.includes.length > 2 && (
                        <div className="text-amber-300 text-xs">
                          +{activity.includes.length - 2} more
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 px-4 py-2 border border-amber-600 text-amber-300 rounded-full text-sm font-medium hover:bg-amber-600 hover:text-white transition-all duration-300">
                      Details
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="w-12 h-12 text-amber-400" />
              </div>
              <h3 className="text-2xl font-serif text-amber-300 mb-4">No activities found</h3>
              <p className="text-amber-100/80 max-w-md mx-auto">
                Try adjusting your search criteria or browse all activities to discover amazing experiences.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Activities;