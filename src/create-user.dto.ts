export class CreateUserDto {
  email: string;
  name: string;
  password: string;
  roleId: number;
  role?: {
    connect?: {
      id: number;
    };
  };
}
