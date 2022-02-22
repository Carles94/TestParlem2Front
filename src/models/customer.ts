import { Product } from './product';

export interface Customer {
  docType: string;
  docNum: string;
  email: string;
  customerId: string;
  givenName: string;
  familyName1: string;
  phone: string;
  hiredProductList: Product[];
}
