export type Language = 'ar' | 'en';

export interface Room {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  priceUSD: number;
  capacityAr: string;
  capacityEn: string;
  sizeAr: string;
  sizeEn: string;
  viewAr: string;
  viewEn: string;
  featuresAr: string[];
  featuresEn: string[];
  imageUrl: string;
  roomsLeft: number;
  images360: string[];
}

export interface Amenity {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  nameAr: string;
  nameEn: string;
  quoteAr: string;
  quoteEn: string;
  rating: number;
  stayDate: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface BookingDetails {
  checkIn: string;
  checkOut: string;
  roomsCount: number;
  guestsCount: number;
  roomType: string;
  promoCode?: string;
}
