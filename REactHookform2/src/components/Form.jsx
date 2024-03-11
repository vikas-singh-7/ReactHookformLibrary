import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    setloading(!loading);
    setTimeout(() => {
      console.log(data);
      setloading(false);
    }, 2000);
  };
  return (
    <div className="flex h-[50vh]  bg-violet-400 justify-center items-center">
      <div className="h-[70%]   bg-orange-500 flex justify-center items-center">
        <form action="" onSubmit={handleSubmit(submit)}>
          <div className="grid grid-col-12 p-2  ">
            <div className="col-span-12 rounded-md bg-green-300">
              <label htmlFor="">username</label>{" "}
              <input
                className="h-[3rem] rounded-lg border-2 border-violet-300 bg-violet-200 outline-none hover:bg-violet-400 transition-all duration-[.5s] placeholder:text-black placeholder:text-semibold"
                type="text"
                name=""
                id=""
                placeholder="username"
                {...register("username", { required: true })}
              />
              {errors.username && <p>please fill valid username</p>}
            </div>
            <div className="col-span-12 rounded-md bg-green-300">
              <label htmlFor="">password</label>{" "}
              <input
                className="h-[3rem] rounded-lg border-2 border-violet-300 bg-violet-200 outline-none hover:bg-violet-400 transition-all duration-[.5s] placeholder:text-black placeholder:text-semibold"
                type="password"
                name=""
                id=""
                placeholder="password"
                {...register("password", { required: true })}
              />
              {errors.password && <p>please enter a valid password</p>}
            </div>
          </div>
          <button className="rounded-lg py-2 px-10 bg-green-500" type="submit">
            {loading ? "pleasewait" : "submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
