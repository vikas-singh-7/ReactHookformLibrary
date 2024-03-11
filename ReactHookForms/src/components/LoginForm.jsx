import { useForm } from "react-hook-form";
function LoginForm() {
  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log({ ...data, friend: "zara", love: "yes" }); // Output form data to console
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Username Field */}
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          {...register("username", { required: true })}
        />
        {errors.username && <span>This field is required</span>}
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
      </div>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
