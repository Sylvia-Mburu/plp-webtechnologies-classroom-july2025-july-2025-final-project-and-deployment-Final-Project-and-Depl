export interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
  highlights: string[];
  duration: string;
  groupSize: string;
  rating: number;
  price: string;
  category: 'safari' | 'beach' | 'mountain' | 'cultural' | 'adventure';
}

export interface Flight {
  id: number;
  airline: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  stops: number;
  class: 'economy' | 'business' | 'first';
}

export interface Hotel {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  price: number;
  amenities: string[];
  description: string;
  category: 'luxury' | 'boutique' | 'safari' | 'beach' | 'eco';
}

export interface Activity {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
  duration: string;
  price: number;
  rating: number;
  category: 'safari' | 'cultural' | 'adventure' | 'wildlife' | 'scenic';
  includes: string[];
}

export interface Deal {
  id: number;
  title: string;
  description: string;
  image: string;
  originalPrice: number;
  discountPrice: number;
  discount: number;
  validUntil: string;
  type: 'flight' | 'hotel' | 'package' | 'activity';
}

export interface Review {
  id: number;
  userName: string;
  userAvatar: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  location: string;
  verified: boolean;
  helpful: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  memberSince: string;
  totalTrips: number;
}

export interface Booking {
  id: number;
  type: 'flight' | 'hotel' | 'activity' | 'package';
  title: string;
  date: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  price: number;
  details: any;
}