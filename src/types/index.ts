export interface WeddingInfo {
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
}

export interface RSVPForm {
  name: string;
  email: string;
  attending: boolean;
  guestCount: number;
  comments?: string;
  dietaryRestrictions?: string;
}

export interface CountdownData {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} 