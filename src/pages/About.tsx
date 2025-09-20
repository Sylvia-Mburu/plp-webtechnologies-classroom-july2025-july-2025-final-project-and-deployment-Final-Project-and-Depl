import React from 'react';
import { Award, Users, Globe, Heart, Star, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Happy Travelers', value: '10,000+' },
    { icon: Globe, label: 'Years of Experience', value: '15+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Star, label: 'Average Rating', value: '4.9/5' }
  ];

  const team = [
    {
      name: 'Sarah Kimani',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Born and raised in Kenya, Sarah has dedicated her life to showcasing the beauty of her homeland to the world.'
    },
    {
      name: 'David Ochieng',
      role: 'Head of Safari Operations',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 20 years of safari experience, David ensures every wildlife encounter is extraordinary.'
    },
    {
      name: 'Grace Wanjiku',
      role: 'Cultural Experience Director',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Grace specializes in authentic cultural experiences that connect travelers with local communities.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Kenya',
      description: 'We are deeply passionate about sharing the incredible beauty, wildlife, and culture of Kenya with the world.'
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'We maintain the highest standards in luxury travel, ensuring every detail exceeds expectations.'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'We work closely with local communities, ensuring tourism benefits everyone and preserves traditions.'
    },
    {
      icon: Globe,
      title: 'Sustainable Tourism',
      description: 'We are committed to responsible travel practices that protect Kenya\'s natural heritage for future generations.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-8">
            About Us
          </h1>
          <p className="text-2xl md:text-3xl text-amber-100 max-w-4xl leading-relaxed font-light">
            Crafting Extraordinary Kenyan Adventures Since 2009
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-serif text-amber-300 mb-8">Our Story</h2>
              <div className="space-y-6 text-amber-100/80 text-lg leading-relaxed">
                <p>
                  Kenya Luxury was born from a simple yet profound vision: to share the extraordinary beauty and rich cultural heritage of Kenya with discerning travelers from around the world. Founded in 2009 by Sarah Kimani, a passionate Kenyan conservationist and hospitality expert, our company has grown from a small local operation to one of East Africa's most respected luxury travel specialists.
                </p>
                <p>
                  What started as guided tours for friends and family has evolved into a comprehensive luxury travel experience that combines world-class accommodations, expert local knowledge, and authentic cultural encounters. We believe that travel should be transformative, creating lasting memories while contributing positively to local communities and conservation efforts.
                </p>
                <p>
                  Today, we are proud to have facilitated over 10,000 extraordinary journeys, each one carefully crafted to showcase the very best of Kenya while maintaining our commitment to sustainable and responsible tourism practices.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800')"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-white text-sm">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-amber-300 mb-2">{stat.value}</div>
                  <div className="text-amber-100/80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif text-amber-300 mb-6">Our Values</h2>
            <p className="text-xl text-amber-100/80 max-w-3xl mx-auto leading-relaxed">
              These core principles guide everything we do and shape every experience we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-900/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif text-amber-300 mb-4">{value.title}</h3>
                  <p className="text-amber-100/80 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif text-amber-300 mb-6">Meet Our Team</h2>
            <p className="text-xl text-amber-100/80 max-w-3xl mx-auto leading-relaxed">
              Our passionate team of Kenya experts is dedicated to creating unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-900/20 hover:border-amber-700/40 transition-all duration-300">
                <div className="relative h-64">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif text-white mb-2">{member.name}</h3>
                  <p className="text-amber-300 font-medium mb-4">{member.role}</p>
                  <p className="text-amber-100/80 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-amber-900/20 to-amber-800/20 rounded-3xl p-12 border border-amber-700/30">
            <MapPin className="w-16 h-16 text-amber-400 mx-auto mb-8" />
            <h2 className="text-4xl font-serif text-amber-300 mb-8">Our Mission</h2>
            <p className="text-xl text-amber-100/90 leading-relaxed mb-8">
              "To create transformative luxury travel experiences that showcase Kenya's extraordinary natural beauty, 
              rich cultural heritage, and incredible wildlife while contributing to conservation efforts and supporting 
              local communities. We believe that exceptional travel should leave a positive impact on both our guests 
              and the destinations they visit."
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;