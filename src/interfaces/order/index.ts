import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  status: string;
  delivery_person_id: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  delivery_person_id?: string;
  restaurant_id?: string;
}
