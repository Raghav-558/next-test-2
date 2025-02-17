"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

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
  const [error, setError] = useState(false);
  const [data, setData] = useState<FormData[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const emailSyntax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(true);

    if (emailSyntax.test(formData.email) && formData.password.length >= 6) {
      if (data.some((entry) => entry.email === formData.email)) {
        alert("Email already exists");
        return;
      }

      setData([...data, formData]);
      setFormData(form);
      setError(false);
    }
  };

  const handleDelete = (email: string) => {
    setData(data.filter((entry) => entry.email !== email));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="flex items-center justify-center flex-col py-[60px]">
      <div className="max-w-[1172px] px-4 mx-auto w-full">
        <form
          onSubmit={handleClick}
          noValidate
          className="flex flex-col gap-2 max-w-[320px] mx-auto"
        >
          <label htmlFor="firstName" className="block text-white">
            First Name
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            id="firstName"
            className="outline-none py-2 px-3 rounded-md mt-1 text-black"
          />

          <label htmlFor="email" className="block text-white">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
            className="outline-none py-2 px-3 rounded-md mt-1 text-black"
          />
          {error && formData.email.length === 0 ? (
            <p className="text-red-600 pt-2">Email is required</p>
          ) : !emailSyntax.test(formData.email) && formData.email.length > 0 ? (
            <p className="text-red-600 pt-2">Enter valid email</p>
          ) : (
            ""
          )}

          <label htmlFor="phone" className="block text-white">
            Phone
          </label>
          <input
            type="number"
            value={formData.phone}
            onChange={handleChange}
            id="phone"
            className="outline-none py-2 px-3 rounded-md mt-1 text-black"
          />

          <label htmlFor="password" className="block text-white">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            id="password"
            className="outline-none py-2 px-3 rounded-md mt-1 text-black"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="bg-blue-500 text-white py-1 px-2 rounded-md mt-1 hover:bg-blue-700 transition-all duration-300"
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>

          <label htmlFor="confirmPassword" className="block text-white">
            Confirm Password
          </label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            id="confirmPassword"
            className="outline-none py-2 px-3 rounded-md mt-1 text-black"
          />
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-green-700 transition-all duration-300"
          >
            Submit
          </button>
        </form>

        <div className="mt-8 w-full overflow-x-auto">
          <h2 className="text-white mb-4 text-center text-xl font-bold">Submitted Data</h2>
          <table className="table-auto w-full text-white">
            <thead>
              <tr>
                <th className="px-4 py-2 whitespace-nowrap">First Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Password</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={index} className="bg-gray-700">
                  <td className="border px-4 py-2 text-white">
                    {entry.firstName}
                  </td>
                  <td className="border px-4 py-2 text-white">{entry.email}</td>
                  <td className="border px-4 py-2 text-white">{entry.phone}</td>
                  <td className="border px-4 py-2 text-white">
                    {entry.password}
                  </td>
                  <td className="border px-4 py-2 text-white">
                    <button
                      onClick={() => handleDelete(entry.email)}
                      className="bg-red-500 text-white py-1 px-2 rounded-md"
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
