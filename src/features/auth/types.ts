// This file defines the types related to user management in the application.

export interface User {
  id: number;
  fullName: string;
  userName: string;
  email: string;
  createdAt: string;
}
export interface AuthLoginPayload {
  email: string;
  password: string;
}

export interface AuthSignupPayload {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  phoneNumber?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
