import { useMemo, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router";
import { Loader } from "../components/Loader";
import type { AuthSignupPayload } from "../features/auth/types";

const initialState: AuthSignupPayload = {
  fullName: "ibrar khan",
  userName: "user",
  email: "root@gmail.com",
  password: "root1234",
  phoneNumber: "1234567890",
};

const SignUpForm = () => {
  const { signup, loading } = useAuth();
  const [formData, setFormData] = useState<AuthSignupPayload>({
    ...initialState,
  });
  const navigate = useNavigate();

  //function to handle input changes
  const handleInputChange = useMemo(() => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      // Validate the input value
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  }, []);

  //if loading return loader
  if (loading) {
    return <Loader />;
  }

  //function to handle signup
  // This function will be called when the user clicks the "Get Started" button
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Logic to handle signup
    if (formData.userName.trim() === "" || formData.password.trim() === "") {
      alert("Username and password cannot be empty");
      return;
    }
    // Call the signup function from useAuth hook
    const response = await signup(formData);
    console.log("Signup response data:", response);
    if (response?.status == 200) {
      // Redirect to dashboard after successful signup
      navigate(`/login`);
    }
  };

  return (
    <>
      <div className="auth-signup_form flex justify-center items-center mt-24">
        <div className="form_container ">
          <form action="" className="form_fields " onSubmit={handleSignUp}>
            <div className="email_password_confirm-password  flex flex-col *:w-80">
              <h1 className="text-lg font-medium text-center">
                Create Your Account
              </h1>
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                styleClass="text-black h-8"
              />
              <Input
                label="Username"
                placeholder="Enter your username"
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                styleClass="text-black h-8"
              />
              <Input
                label="Email"
                placeholder="Enter your email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                styleClass="text-black h-8"
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                styleClass="text-black h-8"
              />
              <Input
                label="Phone Number"
                placeholder="Enter your phone number"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                styleClass="text-black h-8"
              />
              <Button
                type="submit"
                title="Get Started"
                styleClass={`text-white font-semibold h-12 mt-4 bg-indigo-600 hover:bg-indigo-400 w-full rounded-md`}
                disabled={false}
                onClick={() => {}}
              />
              <p className="text-sm text-center font-normal mt-4">
                Have an account already{" "}
                <Link to={"/login"} className="underline text-indigo-600">
                  login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
