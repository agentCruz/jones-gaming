import { Timestamp } from "firebase/firestore";

export type UserDto = {
  id: string;
  username: string;
  email: string;
  phone: string;
  image: string;
  played: number;
  updatedAt: Timestamp;
  createdAt: Timestamp;
};

export type CreateUserDto = Omit<UserDto, "id" | "image" | "updatedAt" | "createdAt"| "played">;
export type UpdateUserDto = Partial<UserDto>;
