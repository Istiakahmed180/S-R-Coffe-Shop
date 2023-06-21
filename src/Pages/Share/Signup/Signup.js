import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../../Firebase/firebase.config";

const auth = getAuth(app);

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            console.log(error.message);
          });
      } else {
        toast.error("Incorrect Password");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm dark:text-gray-400">
            Sign up to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-12"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Create Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
              <label htmlFor="password" className="text-sm">
                Re-enter Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
          </div>
          <div className="space-y-2">
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="px-6 text-sm text-center dark:text-gray-400">
          Already have an account?
          <Link
            rel="noopener noreferrer"
            to="/login"
            className="hover:underline dark:text-violet-400"
          >
            Log In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Signup;
