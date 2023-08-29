export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  COSTUMER = 'costumer',
}

export type User = {
  username: string;
  role: ROLES;
}

const nicoUser: User = {
  username: 'nicobytes',
  role: ROLES.SELLER
}
