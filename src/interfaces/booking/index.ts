import { RitualInterface } from 'interfaces/ritual';
import { PurohitInterface } from 'interfaces/purohit';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  ritual_id: string;
  purohit_id: string;
  customer_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  ritual?: RitualInterface;
  purohit?: PurohitInterface;
  user?: UserInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  ritual_id?: string;
  purohit_id?: string;
  customer_id?: string;
  status?: string;
}
