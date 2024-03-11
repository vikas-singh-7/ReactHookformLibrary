import React, { useState } from "react";
import "./Form3.css"; // Assuming you've named your CSS file Form3.css

import { useForm } from "react-hook-form";

const Form3 = () => {
  const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const Submitme = (formData) => {
    console.log("hey");
    setloading(true);
    setTimeout(() => {
      setloading(false);
      reset();
      alert(
        `hello mr ${formData.firstname} ${formData.lastname} you password is ${formData.password}`
      );
      console.log(formData);
    }, 2000);
  };
  return (
    <div className="flex justify-center items-center h-[80vh] w-full rounded-md bg-green-500">
      <div className="h-[80%] w-[60%] bg-teal-400 flex justify-center items-center rounded-lg border-2 border-black">
        <form
          onSubmit={handleSubmit(Submitme)}
          action=""
          className="flex flex-col gap-5 items-center justify-center p-5"
        >
          <div className="form-group">
            <label htmlFor="firstname" className="label">
              Firstname
              {errors.firstname && <p>please fill a valid firstname</p>}
              {errors.firstname && errors.firstname.type === "validate" && (
                <p>{errors.firstname.message}</p>
              )}
            </label>{" "}
            <input
              {...register("firstname", {
                required: true,
                validate: (value) =>
                  value == "vikas" || `firstname inst correct`,
              })}
              type="text"
              id="firstname"
              className="input-field"
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname" className="label">
              Lastname
              {errors.lastname && <p>enter a valid lastname</p>}
            </label>{" "}
            <input
              {...register("lastname", {
                required: true,
                validate: (value) =>
                  value == "singh" || `lastname inst correct`,
              })}
              type="text"
              id="lastname"
              className="input-field"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">
              Password
              {errors.password && <p>enter a valid password</p>}
            </label>{" "}
            <input
              {...register("password", {
                required: true,
                validate: (value) =>
                  value == "vikas@123" || "password isnt correct",
              })}
              type="password"
              id="password"
              className="input-field"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#CA7558] rounded-md px-8 py-2 text-semibold text-lg relative right-6"
            >
              {loading ? "please wait" : "submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form3;
