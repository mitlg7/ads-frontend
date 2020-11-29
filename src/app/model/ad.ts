import {AdStatus} from './adStatus';

export interface Ad{
  id: number;
  username: string;
  name: string;
  address: string;
  description: string;
  cost: number;
  date?: any;
  adStatus: AdStatus;
  adCategory: string;
  adType: string;
  photo: string;
}
