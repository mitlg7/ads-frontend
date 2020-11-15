export interface Ad{
  id: number;
  userId: number;
  name: string;
  address: string;
  description: string;
  cost: number;
  date?: any;
  adStatus: string;
  adCategory: string;
  adType: string;
  photos: string[];
}
