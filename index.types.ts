export type User = {
  name: string;
  email: string;
  createdAt: string;
  id: number;
}

export interface Order {
  id: number;
  name: string;
  shoesType: string;
  packageType: string;
  paymentMethod: string;
  created_at: string;
  userId: number;
}