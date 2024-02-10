import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const baseURL = process.env.API_KEY;

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      username,
      password,
    };

    try {
      await axios.post(baseURL, data, {
        headers: { "Content-Type": "application/json" },
      });
      // const res = await axios.post(baseURL, data, {
      //   headers: { "Content-Type": "application/json" },
      // });

      setIsLoading(false);

      toast.success("Registration Successful!");
      setUsername("");
      setPassword("");
      // console.log("Login Successful!", res.data);

      // Navigate("/blog");
    } catch (error) {
      setIsLoading(false);

      if ((error as AxiosError)?.response?.status === 409) {
        toast.error("Username already exists!");
      }
      console.log("Error Registering ", error);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col min-h-screen bg-primary  items-center justify-center">
        <h1> Register </h1>
        <form
          className="flex flex-col  space-y-3"
          onSubmit={register}
          method="POST"
        >
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter Username!!"
              required
              className="border px-2 py-1 rounded-md "
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter Password!!"
              required
              className="border px-2 py-1 rounded-md "
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="bg-secondary text-white py-1 px-2 ">
            {isLoading ? <Loading /> : "Register"}
          </button>

          <div className="text-xs">
            Already have an account?
            <Link to="/blog" className="ml-1">
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
