export enum UserRole {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
}

export class UserDto {
  name: string;
  email: string;
  password: string;

  rconfirmHash?: string;
  role?: UserRole;
  restoreHash?: string;
  isActive?: boolean;
  avatar?: string;
}
