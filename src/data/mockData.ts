import { Destination, Flight, Hotel, Activity, Deal, Review } from '../types';

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Maasai Mara",
    location: "Narok County",
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Experience the greatest wildlife spectacle on Earth in the Maasai Mara National Reserve. Home to the Great Migration, where millions of wildebeest and zebras traverse the savannah in an ancient dance of survival.",
    highlights: ["Great Migration", "Big Five Safari", "Maasai Culture", "Hot Air Balloon"],
    duration: "4-7 days",
    groupSize: "2-12 people",
    rating: 4.9,
    price: "From $1,200",
    category: 'safari'
  },
  {
    id: 2,
    name: "Mount Kenya",
    location: "Central Kenya",
    image: "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Conquer Africa's second-highest peak and discover pristine alpine landscapes. Mount Kenya offers world-class trekking through diverse ecosystems, from bamboo forests to glacial valleys.",
    highlights: ["Peak Climbing", "Alpine Lakes", "Unique Flora", "Mountain Wildlife"],
    duration: "5-8 days",
    groupSize: "4-8 people",
    rating: 4.8,
    price: "From $950",
    category: 'mountain'
  },
  {
    id: 3,
    name: "Diani Beach",
    location: "South Coast",
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Relax on pristine white sand beaches along the Indian Ocean. Diani Beach offers luxury beach resorts, water sports, and vibrant coral reefs perfect for diving and snorkeling.",
    highlights: ["White Sand Beaches", "Coral Reefs", "Water Sports", "Luxury Resorts"],
    duration: "3-10 days",
    groupSize: "2-20 people",
    rating: 4.7,
    price: "From $750",
    category: 'beach'
  },
  {
    id: 4,
    name: "Amboseli",
    location: "Kajiado County",
    image: "https://images.pexels.com/photos/2562992/pexels-photo-2562992.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Witness majestic elephants against the backdrop of Mount Kilimanjaro. Amboseli National Park offers stunning views and incredible wildlife photography opportunities.",
    highlights: ["Elephant Herds", "Kilimanjaro Views", "Photography", "Maasai Villages"],
    duration: "2-4 days",
    groupSize: "2-15 people",
    rating: 4.8,
    price: "From $850",
    category: 'safari'
  },
  {
    id: 5,
    name: "Lamu Island",
    location: "Lamu Archipelago",
    image: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Step back in time on this UNESCO World Heritage site. Lamu Island preserves centuries of Swahili culture with ancient architecture, traditional dhow sailing, and pristine beaches.",
    highlights: ["Swahili Culture", "Ancient Architecture", "Dhow Sailing", "Cultural Heritage"],
    duration: "3-6 days",
    groupSize: "2-10 people",
    rating: 4.6,
    price: "From $680",
    category: 'cultural'
  },
  {
    id: 6,
    name: "Lake Nakuru",
    location: "Rift Valley",
    image: "https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Marvel at millions of flamingos creating a pink spectacle on the alkaline waters. Lake Nakuru National Park is a bird lover's paradise and rhino sanctuary.",
    highlights: ["Flamingo Flocks", "Rhino Sanctuary", "Bird Watching", "Rift Valley Views"],
    duration: "1-3 days",
    groupSize: "2-12 people",
    rating: 4.5,
    price: "From $420",
    category: 'safari'
  }
];

export const flights: Flight[] = [
  {
    id: 1,
    airline: "Kenya Airways",
    from: "New York (JFK)",
    to: "Nairobi (NBO)",
    departure: "10:30 AM",
    arrival: "11:45 PM +1",
    duration: "15h 15m",
    price: 1250,
    stops: 1,
    class: 'economy'
  },
  {
    id: 2,
    airline: "Emirates",
    from: "London (LHR)",
    to: "Nairobi (NBO)",
    departure: "2:15 PM",
    arrival: "6:30 AM +1",
    duration: "12h 15m",
    price: 950,
    stops: 1,
    class: 'economy'
  },
  {
    id: 3,
    airline: "Qatar Airways",
    from: "Dubai (DXB)",
    to: "Nairobi (NBO)",
    departure: "8:45 AM",
    arrival: "1:20 PM",
    duration: "4h 35m",
    price: 650,
    stops: 0,
    class: 'business'
  }
];

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "Angama Mara",
    location: "Maasai Mara",
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.9,
    price: 1200,
    amenities: ["Infinity Pool", "Spa", "Game Drives", "Fine Dining", "Butler Service"],
    description: "Perched high above the Great Rift Valley, Angama Mara offers unparalleled views of the Maasai Mara.",
    category: 'luxury'
  },
  {
    id: 2,
    name: "Giraffe Manor",
    location: "Nairobi",
    image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.8,
    price: 800,
    amenities: ["Giraffe Encounters", "Historic Manor", "Gardens", "Fine Dining"],
    description: "A unique boutique hotel where endangered Rothschild giraffes roam the grounds.",
    category: 'boutique'
  },
  {
    id: 3,
    name: "Alfajiri Villas",
    location: "Diani Beach",
    image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.7,
    price: 950,
    amenities: ["Private Beach", "Infinity Pool", "Water Sports", "Spa", "Butler Service"],
    description: "Exclusive beachfront villas offering ultimate privacy and luxury on the Indian Ocean.",
    category: 'beach'
  }
];

export const activities: Activity[] = [
  {
    id: 1,
    name: "Hot Air Balloon Safari",
    location: "Maasai Mara",
    image: "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Soar above the savannah at sunrise and witness the Great Migration from a bird's eye view.",
    duration: "3 hours",
    price: 450,
    rating: 4.9,
    category: 'safari',
    includes: ["Hotel pickup", "Champagne breakfast", "Flight certificate", "Game drive"]
  },
  {
    id: 2,
    name: "Maasai Village Visit",
    location: "Kajiado",
    image: "https://images.pexels.com/photos/2562992/pexels-photo-2562992.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Experience authentic Maasai culture, traditional dances, and learn about ancient customs.",
    duration: "4 hours",
    price: 120,
    rating: 4.6,
    category: 'cultural',
    includes: ["Cultural guide", "Traditional lunch", "Craft demonstrations", "Photography"]
  },
  {
    id: 3,
    name: "Dhow Sailing Adventure",
    location: "Lamu Island",
    image: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Sail the ancient waters of the Indian Ocean in a traditional dhow boat.",
    duration: "6 hours",
    price: 180,
    rating: 4.7,
    category: 'adventure',
    includes: ["Traditional dhow", "Seafood lunch", "Snorkeling gear", "Sunset viewing"]
  }
];

export const deals: Deal[] = [
  {
    id: 1,
    title: "Maasai Mara Safari Package",
    description: "5 days luxury safari including flights, accommodation, and game drives",
    image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800",
    originalPrice: 3500,
    discountPrice: 2800,
    discount: 20,
    validUntil: "2024-03-31",
    type: 'package'
  },
  {
    id: 2,
    title: "Diani Beach Getaway",
    description: "7 nights at luxury beachfront resort with all meals included",
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800",
    originalPrice: 2200,
    discountPrice: 1650,
    discount: 25,
    validUntil: "2024-04-15",
    type: 'hotel'
  },
  {
    id: 3,
    title: "Mount Kenya Expedition",
    description: "8-day guided climbing expedition with all equipment included",
    image: "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800",
    originalPrice: 1800,
    discountPrice: 1440,
    discount: 20,
    validUntil: "2024-05-01",
    type: 'activity'
  }
];

export const reviews: Review[] = [
  {
    id: 1,
    userName: "Sarah Johnson",
    userAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    title: "Unforgettable Safari Experience",
    content: "The Maasai Mara safari exceeded all expectations. The wildlife viewing was incredible, and our guide was knowledgeable and passionate. Angama Mara provided luxury beyond imagination.",
    date: "2024-01-15",
    location: "Maasai Mara",
    verified: true,
    helpful: 24
  },
  {
    id: 2,
    userName: "Michael Chen",
    userAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    title: "Perfect Beach Holiday",
    content: "Diani Beach was paradise. Crystal clear waters, pristine beaches, and exceptional service at Alfajiri Villas. The snorkeling was world-class.",
    date: "2024-01-08",
    location: "Diani Beach",
    verified: true,
    helpful: 18
  },
  {
    id: 3,
    userName: "Emma Thompson",
    userAvatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 4,
    title: "Cultural Immersion at its Best",
    content: "Lamu Island offered an authentic glimpse into Swahili culture. The architecture, food, and people were fascinating. A truly unique experience.",
    date: "2023-12-22",
    location: "Lamu Island",
    verified: true,
    helpful: 15
  }
];