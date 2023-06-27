import { BookingInterface } from 'interfaces/booking';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface PurohitInterface {
  id?: string;
  user_id: string;
  organization_id: string;
  availability: boolean;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    booking?: number;
  };
}

export interface PurohitGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
}
