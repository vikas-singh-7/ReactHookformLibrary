import React from "react";
import { useForm } from "react-hook-form";

const Form2 = () => {
  const {
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Form :P</h2>
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              username
            </label>
            <input
              type="text"
              {...register("username", { required: true })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              password
            </label>
            <input
              {...register("password")}
              type="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="password"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-gray-700 font-bold mb-2"
            >
              male
            </label>
            <input
              {...register("male")}
              type="checkbox"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form2;
