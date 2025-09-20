import React, { useState } from 'react';
import { User, MapPin, Calendar, CreditCard, Heart, Settings, LogOut, Plane, Building, Compass } from 'lucide-react';

const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const user = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    memberSince: '2022',
    totalTrips: 3,
    upcomingTrips: 1,
    points: 2450
  };

  const bookings = [
    {
      id: 1,
      type: 'package',
      title: 'Maasai Mara Safari Experience',
      date: '2024-03-15',
      status: 'confirmed',
      price: 2800,
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      type: 'hotel',
      title: 'Diani Beach Resort',
      date: '2024-01-20',
      status: 'completed',
      price: 1650,
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      type: 'activity',
      title: 'Mount Kenya Expedition',
      date: '2023-08-10',
      status: 'completed',
      price: 1440,
      image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const wishlist = [
    {
      id: 1,
      name: 'Lamu Island Cultural Tour',
      image: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 680
    },
    {
      id: 2,
      name: 'Amboseli Elephant Safari',
      image: 'https://images.pexels.com/photos/2562992/pexels-photo-2562992.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 850
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'bookings', label: 'My Trips', icon: MapPin },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-600/20 text-green-400 border-green-600/30';
      case 'pending':
        return 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30';
      case 'cancelled':
        return 'bg-red-600/20 text-red-400 border-red-600/30';
      case 'completed':
        return 'bg-blue-600/20 text-blue-400 border-blue-600/30';
      default:
        return 'bg-gray-600/20 text-gray-400 border-gray-600/30';
    }
  };

  const getBookingIcon = (type: string) => {
    switch (type) {
      case 'flight':
        return <Plane className="w-5 h-5" />;
      case 'hotel':
        return <Building className="w-5 h-5" />;
      case 'activity':
        return <Compass className="w-5 h-5" />;
      default:
        return <MapPin className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        
        <div className="relative z-10 h-full flex items-center px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center space-x-6">
              <div
                className="w-24 h-24 rounded-full bg-cover bg-center border-4 border-amber-600"
                style={{ backgroundImage: `url(${user.avatar})` }}
              />
              <div>
                <h1 className="text-4xl font-serif text-white mb-2">Welcome back, {user.name}</h1>
                <p className="text-amber-200">Member since {user.memberSince} • {user.totalTrips} trips completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Content */}
      <section className="py-12 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-900/20 sticky top-24">
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                          activeTab === tab.id
                            ? 'bg-amber-600/20 text-amber-300 border border-amber-600/30'
                            : 'text-amber-100/80 hover:bg-amber-900/10 hover:text-amber-300'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                  
                  <div className="pt-4 border-t border-amber-900/20">
                    <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-red-400 hover:bg-red-900/10 transition-all duration-300">
                      <LogOut className="w-5 h-5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-900/20">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-amber-300">{user.totalTrips}</p>
                          <p className="text-amber-100/80 text-sm">Trips Completed</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-900/20">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-green-300">{user.upcomingTrips}</p>
                          <p className="text-amber-100/80 text-sm">Upcoming Trips</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-900/20">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-purple-300">{user.points}</p>
                          <p className="text-amber-100/80 text-sm">Loyalty Points</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-900/20">
                    <h2 className="text-2xl font-serif text-amber-300 mb-6">Recent Activity</h2>
                    <div className="space-y-4">
                      {bookings.slice(0, 3).map((booking) => (
                        <div key={booking.id} className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg">
                          <div
                            className="w-16 h-16 rounded-lg bg-cover bg-center"
                            style={{ backgroundImage: `url(${booking.image})` }}
                          />
                          <div className="flex-1">
                            <h3 className="text-white font-medium">{booking.title}</h3>
                            <p className="text-amber-200 text-sm">{booking.date}</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'bookings' && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-serif text-amber-300">My Trips</h2>
                  
                  {bookings.map((booking) => (
                    <div key={booking.id} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-900/20">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                        <div className="relative h-48 lg:h-auto">
                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${booking.image})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          
                          <div className="absolute top-4 left-4">
                            <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                              {booking.status}
                            </div>
                          </div>
                        </div>

                        <div className="lg:col-span-2 p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center space-x-2 mb-2">
                                {getBookingIcon(booking.type)}
                                <h3 className="text-xl font-serif text-white">{booking.title}</h3>
                              </div>
                              <p className="text-amber-200">{booking.date}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-amber-300">${booking.price}</p>
                            </div>
                          </div>

                          <div className="flex space-x-3">
                            <button className="px-4 py-2 border border-amber-600 text-amber-300 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300">
                              View Details
                            </button>
                            {booking.status === 'confirmed' && (
                              <button className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300">
                                Manage Booking
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-serif text-amber-300">My Wishlist</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {wishlist.map((item) => (
                      <div key={item.id} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-900/20">
                        <div className="relative h-48">
                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          
                          <button className="absolute top-4 right-4 p-2 bg-red-600/80 backdrop-blur-sm rounded-full text-white hover:bg-red-700 transition-colors">
                            <Heart className="w-4 h-4 fill-current" />
                          </button>
                        </div>

                        <div className="p-6">
                          <h3 className="text-lg font-serif text-white mb-2">{item.name}</h3>
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-amber-300">From ${item.price}</span>
                            <button className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300">
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-serif text-amber-300">Account Settings</h2>
                  
                  {/* Profile Settings */}
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-900/20">
                    <h3 className="text-xl font-serif text-amber-300 mb-6">Profile Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-amber-200 text-sm font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          defaultValue={user.name}
                          className="w-full px-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-amber-200 text-sm font-medium mb-2">Email Address</label>
                        <input
                          type="email"
                          defaultValue={user.email}
                          className="w-full px-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                        />
                      </div>
                    </div>
                    
                    <button className="mt-6 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-6 py-3 rounded-lg transition-all duration-300">
                      Save Changes
                    </button>
                  </div>

                  {/* Notification Settings */}
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-900/20">
                    <h3 className="text-xl font-serif text-amber-300 mb-6">Notification Preferences</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">Email Notifications</p>
                          <p className="text-amber-100/60 text-sm">Receive updates about your bookings and offers</p>
                        </div>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-amber-600 transition-colors">
                          <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">SMS Notifications</p>
                          <p className="text-amber-100/60 text-sm">Get important updates via text message</p>
                        </div>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors">
                          <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;