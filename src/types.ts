export interface Facility {
  id: string;
  name: string;
  description: string;
  bgClass: string; // Tailwinds color
  iconName: string;
  imageUrl: string;
}

export interface ActivityPhoto {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface FeeItem {
  id: string;
  component: string;
  nominal: number;
  description: string;
  isOneTime: boolean;
}

export interface ProgramFee {
  programName: string;
  subTitle: string;
  items: FeeItem[];
}

export interface Testimonial {
  id: string;
  parentName: string;
  childName: string;
  role: string; // e.g. "Bunda dari Rafandra (Kelas TK A)"
  quote: string;
  rating: number;
  avatarUrl: string;
}

export interface NavItem {
  label: string;
  targetId: string;
}
