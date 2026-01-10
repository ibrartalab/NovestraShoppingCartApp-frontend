import axiosInstance from "../config/axios/axiosInstance";
import type { AuthLoginPayload, AuthResponse, AuthSignupPayload } from "../features/auth/types";

// Function to handle user signup
export async function signUp(payload: AuthSignupPayload) {
  console.log("API CALL STARTING. Payload:", payload); // Check this in browser console
  const response = await axiosInstance.post(
    "/Auth/register",
    JSON.stringify(payload)
  );
  console.log("API CALL SUCCESS. Response:", response); // Check this in browser console
  return response;
}

// Do the same for login if it also throws the "request is required" error
export async function login(payload: AuthLoginPayload) {
  const response = await axiosInstance.post<AuthResponse>(
    "/Auth/login",
    payload // Wrap the payload here
  );
  return response;
}
