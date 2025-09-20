import React, { useState } from 'react';
import { Star, ThumbsUp, CheckCircle, Filter, Search } from 'lucide-react';
import { format } from 'date-fns';
import { reviews } from '../data/mockData';

const Reviews: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('recent');

  const filteredReviews = reviews
    .filter(review => 
      (ratingFilter === 'all' || review.rating.toString() === ratingFilter) &&
      (searchQuery === '' || 
       review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       review.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
       review.location.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'rating':
          return b.rating - a.rating;
        case 'helpful':
          return b.helpful - a.helpful;
        default:
          return 0;
      }
    });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / reviews.length) * 100
  }));

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy');
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-6">
            Reviews & Ratings
          </h1>
          <p className="text-xl text-amber-100/80 max-w-3xl leading-relaxed">
            Discover what our travelers say about their extraordinary Kenyan adventures.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Overall Rating Summary */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-900/20 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                  <span className="text-6xl font-bold text-amber-300">
                    {averageRating.toFixed(1)}
                  </span>
                  <div>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 ${
                            i < Math.floor(averageRating)
                              ? 'text-amber-400 fill-current'
                              : 'text-amber-400/30 fill-current'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-amber-200">Based on {reviews.length} reviews</p>
                  </div>
                </div>
                <p className="text-amber-100/80 text-lg">
                  Exceptional experiences rated by our valued travelers
                </p>
              </div>

              <div className="space-y-3">
                {ratingDistribution.map(({ rating, count, percentage }) => (
                  <div key={rating} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 w-16">
                      <span className="text-amber-200 text-sm">{rating}</span>
                      <Star className="w-3 h-3 text-amber-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-amber-600 to-amber-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-amber-200 text-sm w-8">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-900/20 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search reviews..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                <select
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 appearance-none"
                >
                  <option value="all" className="bg-gray-800">All Ratings</option>
                  <option value="5" className="bg-gray-800">5 Stars</option>
                  <option value="4" className="bg-gray-800">4 Stars</option>
                  <option value="3" className="bg-gray-800">3 Stars</option>
                  <option value="2" className="bg-gray-800">2 Stars</option>
                  <option value="1" className="bg-gray-800">1 Star</option>
                </select>
              </div>

              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 appearance-none"
                >
                  <option value="recent" className="bg-gray-800">Most Recent</option>
                  <option value="rating" className="bg-gray-800">Highest Rating</option>
                  <option value="helpful" className="bg-gray-800">Most Helpful</option>
                </select>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-8">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-900/20 hover:border-amber-700/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-amber-600"
                      style={{ backgroundImage: `url(${review.userAvatar})` }}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{review.userName}</h3>
                          {review.verified && (
                            <div className="flex items-center space-x-1 text-green-400">
                              <CheckCircle className="w-4 h-4" />
                              <span className="text-xs">Verified</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-amber-200">
                          <span>{review.location}</span>
                          <span>•</span>
                          <span>{formatDate(review.date)}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-amber-400 fill-current'
                                : 'text-amber-400/30 fill-current'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold text-amber-300 mb-3">
                      {review.title}
                    </h4>

                    <p className="text-amber-100/80 leading-relaxed mb-4">
                      {review.content}
                    </p>

                    <div className="flex items-center justify-between">
                      <button className="flex items-center space-x-2 text-amber-200 hover:text-amber-300 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">Helpful ({review.helpful})</span>
                      </button>

                      <button className="text-amber-300 hover:text-amber-200 text-sm transition-colors">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredReviews.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-12 h-12 text-amber-400" />
              </div>
              <h3 className="text-2xl font-serif text-amber-300 mb-4">No reviews found</h3>
              <p className="text-amber-100/80 max-w-md mx-auto">
                Try adjusting your search criteria to find more reviews.
              </p>
            </div>
          )}

          {/* Write Review CTA */}
          <div className="mt-16 bg-gradient-to-r from-amber-900/20 to-amber-800/20 rounded-2xl p-8 border border-amber-700/30 text-center">
            <h3 className="text-3xl font-serif text-amber-300 mb-4">Share Your Experience</h3>
            <p className="text-amber-100/80 mb-6 max-w-2xl mx-auto">
              Help other travelers by sharing your Kenyan adventure. Your review helps us maintain our high standards and assists others in planning their perfect trip.
            </p>
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
              Write a Review
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;