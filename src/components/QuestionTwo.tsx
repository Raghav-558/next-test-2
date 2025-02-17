"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

interface FormData {
  firstName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const LoginForm: React.FC = () => {
  const form: FormData = {
    firstName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState<FormData>(form);
  const [error, setError] = useState<{ [key: string]: string | null }>({});
  const [data, setData] = useState<FormData[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const emailSyntax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]{10}$/;

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: { [key: string]: string | null } = {};

    if (formData.firstName.length === 0) {
      errors.firstName = "First name is required";
    }

    if (formData.email.length === 0) {
      errors.email = "Email is required";
    } else if (!emailSyntax.test(formData.email)) {
      errors.email = "Enter valid email";
    }

    if (formData.phone.length === 0) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Enter a valid 10-digit phone number";
    }

    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (data.some((obj) => obj.email === formData.email)) {
      errors.email = "Email already exists";
    }

    setError(errors);

    if (Object.keys(errors).length === 0) {
      setData([...data, formData]);
      setFormData(form);
    }
  };

  const handleDelete = (email: string) => {
    setData(data.filter((obj) => obj.email !== email));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setError({ ...error, [id]: null });
  };

  return (
    <div className="flex items-center justify-center flex-col py-[60px]">
      <div className="max-w-[1172px] px-4 mx-auto w-full">
        <form
          onSubmit={handleClick}
          noValidate
          className="flex flex-col gap-2 max-w-[380px] mx-auto"
        >
          <label htmlFor="firstName" className="block text-white">
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            id="firstName"
            className="outline-none py-3 px-3 rounded-md mt-1 text-black text-lg"
          />
          {error.firstName && (
            <p className="text-red-600 pt-2">{error.firstName}</p>
          )}

          <label htmlFor="email" className="block text-white">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            id="email"
            className="outline-none py-3 px-3 rounded-md mt-1 text-black text-lg"
          />
          {error.email && <p className="text-red-600 pt-2">{error.email}</p>}

          <label htmlFor="phone" className="block text-white">
            Phone
          </label>
          <input
            type="number"
            value={formData.phone}
            placeholder="Phone Number"
            onChange={handleChange}
            id="phone"
            className="outline-none py-3 px-3 rounded-md mt-1 text-black text-lg"
          />
          {error.phone && <p className="text-red-600 pt-2">{error.phone}</p>}

          <label htmlFor="password" className="block text-white">
            Password
          </label>
          <div className="flex justify-between items-center py-3 px-3 bg-white rounded-md mt-1">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              id="password"
              className="outline-none  text-black text-lg"
            />

            <button
              className="bg-white"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Image
                  className="pointer-events-none"
                  src={"/assets/images/webp/show.webp"}
                  alt="show-image"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  className="pointer-events-none"
                  src={"/assets/images/webp/hide.webp"}
                  alt="hide-image"
                  width={20}
                  height={20}
                />
              )}
            </button>
          </div>
          {error.password && (
            <p className="text-red-600 pt-2">{error.password}</p>
          )}
          <label htmlFor="confirmPassword" className="block text-white">
            Confirm Password
          </label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            id="confirmPassword"
            className="outline-none py-3 px-3 rounded-md mt-1 text-black text-lg"
          />
          {error.confirmPassword && (
            <p className="text-red-600 pt-2">{error.confirmPassword}</p>
          )}
          <button
            type="submit"
            className="bg-green-500 text-white py-3 px-4 rounded-md mt-2 hover:bg-green-700 transition-all duration-300"
          >
            Submit
          </button>
        </form>

        <div className="mt-8 w-full overflow-x-auto">
          <h2 className="text-white mb-4 text-center text-xl font-bold">
            Submitted Data
          </h2>
          <table className="table-auto w-full text-white">
            <thead>
              <tr>
                <th className="px-3 py-3 text-center whitespace-nowrap">
                  First Name
                </th>
                <th className="px-3 py-3 text-center">Email</th>
                <th className="px-3 py-3 text-center">Phone</th>
                <th className="px-3 py-3 text-center">Password</th>
                <th className="px-3 py-3 text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((obj, i) => (
                <tr key={i} className="bg-gray-700">
                  <td className="border px-4 py-3 text-center text-white">
                    {obj.firstName}
                  </td>
                  <td className="border px-4 py-3 text-center text-white">
                    {obj.email}
                  </td>
                  <td className="border px-4 py-3 text-center text-white">
                    {obj.phone}
                  </td>
                  <td className="border px-4 py-3 text-center text-white">
                    {obj.password}
                  </td>
                  <td className="border px-4 py-3 text-center text-white">
                    <button
                      onClick={() => handleDelete(obj.email)}
                      className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-800 transition-all duration-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
