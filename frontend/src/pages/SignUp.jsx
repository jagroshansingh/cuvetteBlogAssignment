import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  let api = import.meta.env.VITE_REACT_APP_URL;
  let keep = {
    email: "",
    password: "",
    cpassword: "",
  };
  const [cred, setCred] = React.useState(keep);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCred({
      ...cred,
      [e.target.name == "email"
        ? "email"
        : e.target.name == "password"
        ? "password"
        : "cpassword"]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (cred.email == "" || cred.password == "" || cred.cpassword == "") {
      alert("Empty Credentials!");
    } else if (cred.password !== cred.cpassword) {
      alert("Password doesn't match");
    } else {
      axios({
        method: "post",
        url: `${api}/auth/signup`,
        data: cred,
      })
        .then((res) => {
          alert(res.data.message);
          if (res.data.message == "User registered successfully") navigate("/");
        })
        .catch((err) => console.log(err));
    }
    setCred(keep);
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          SIGN-UP here
        </h2>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={cred.email}
                  autoComplete="email"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={cred.password}
                  autoComplete="current-password"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  value={cred.cpassword}
                  autoComplete="current-password"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <span
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              onClick={() => navigate("/signIn")}
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
