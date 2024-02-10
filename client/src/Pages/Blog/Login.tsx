import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import Loading from "../../components/Loading";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);

  const baseURL = import.meta.env.VITE_API_KEY;

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      username,
      password,
    };

    try {
      const res = await axios.post(`${baseURL}/login`, data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      // const res = await axios.post(baseURL, data, {
      //   headers: { "Content-Type": "application/json" },
      // });

      setIsLoading(false);

      toast.success("Login Successful!");
      setUsername("");
      setPassword("");
      console.log("Login Successful!", res.data);

      if (res.status === 200) {
        setRedirect(true);
      } else {
        toast.error(" Wrong credentials !!");
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Error Regstering", error);
      // toast.error(
      //   "An error occurred while logging in. Please try again later.",
      //   error
      // );
    }
  };

  if (redirect) {
    return <Navigate to={"/blog/home"} />;
  }
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col min-h-screen bg-primary  items-center justify-center">
        <h1 className=""> Login </h1>
        <form
          className="flex flex-col space-y-3"
          onSubmit={register}
          method="POST"
        >
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter Username !!"
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
              className="border px-2 py-1 rounded-md "
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="bg-secondary text-white py-1 px-2">
            {isLoading ? <Loading /> : "Login"}
          </button>
          <div className="text-xs">
            Don't have an account?
            <Link to="/blog/register" className="ml-1">
              Register
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
