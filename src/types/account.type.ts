export interface Address {
  address: string;
  city: string;
  state: string;
  pin: string | number;
}

export interface BaseAccount {
    name: string;
    address: Address;
    phone: string;
    email: string;
}


export interface Account extends BaseAccount {
    id: string
}