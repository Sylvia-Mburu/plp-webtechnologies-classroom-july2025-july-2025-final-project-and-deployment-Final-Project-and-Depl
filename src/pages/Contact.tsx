import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    travelDates: '',
    groupSize: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-6">
            Contact & Support
          </h1>
          <p className="text-xl text-amber-100/80 max-w-3xl leading-relaxed">
            Let us help you plan your perfect Kenyan adventure. Our travel experts are here to assist you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-serif text-amber-300 mb-8">Get in Touch</h2>
              <p className="text-amber-100/80 text-lg mb-8 leading-relaxed">
                Our experienced travel consultants are ready to help you create unforgettable memories in Kenya. 
                Whether you're planning a safari adventure, beach getaway, or cultural expedition, we're here to assist.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
                    <p className="text-amber-200 mb-1">+254 700 123 456</p>
                    <p className="text-amber-200">+1 (555) 123-4567</p>
                    <p className="text-amber-100/60 text-sm mt-2">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
                    <p className="text-amber-200 mb-1">info@kenyaluxury.com</p>
                    <p className="text-amber-200">bookings@kenyaluxury.com</p>
                    <p className="text-amber-100/60 text-sm mt-2">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Office Locations</h3>
                    <p className="text-amber-200 mb-2">Nairobi, Kenya</p>
                    <p className="text-amber-100/60 text-sm">Westlands Business District</p>
                    <p className="text-amber-100/60 text-sm">ABC Place, 5th Floor</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                    <p className="text-amber-200 mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-amber-200 mb-1">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-amber-200">Sunday: 10:00 AM - 2:00 PM</p>
                    <p className="text-amber-100/60 text-sm mt-2">East Africa Time (EAT)</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Chat</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                  <Phone className="w-5 h-5" />
                  <span>Schedule Call</span>
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-900/20">
              <h2 className="text-3xl font-serif text-amber-300 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-amber-200 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-amber-200 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-amber-200 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-amber-200 text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 appearance-none"
                    >
                      <option value="" className="bg-gray-800">Select a subject</option>
                      <option value="safari" className="bg-gray-800">Safari Inquiry</option>
                      <option value="beach" className="bg-gray-800">Beach Holiday</option>
                      <option value="cultural" className="bg-gray-800">Cultural Tour</option>
                      <option value="adventure" className="bg-gray-800">Adventure Travel</option>
                      <option value="custom" className="bg-gray-800">Custom Package</option>
                      <option value="support" className="bg-gray-800">Customer Support</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-amber-200 text-sm font-medium mb-2">
                      Preferred Travel Dates
                    </label>
                    <input
                      type="text"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                      placeholder="e.g., March 2024"
                    />
                  </div>

                  <div>
                    <label className="block text-amber-200 text-sm font-medium mb-2">
                      Group Size
                    </label>
                    <select
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 appearance-none"
                    >
                      <option value="" className="bg-gray-800">Select group size</option>
                      <option value="1-2" className="bg-gray-800">1-2 people</option>
                      <option value="3-4" className="bg-gray-800">3-4 people</option>
                      <option value="5-8" className="bg-gray-800">5-8 people</option>
                      <option value="9+" className="bg-gray-800">9+ people</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-amber-200 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/30 border border-amber-900/30 rounded-lg text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 resize-none"
                    placeholder="Tell us about your dream Kenyan adventure..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;