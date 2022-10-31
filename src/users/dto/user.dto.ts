export class UserDto {
  name: string;
  email: string;
  password: string;

  rconfirmHash: string;
  role: string;
  restoreHash?: string;
  isActive: boolean;
  avatar?: string;
}
