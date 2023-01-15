import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleAddProduct = (data) => {
    console.log(data);
  };
  return (
    <div className="w-96 mx-auto">
      <form className="p-5" onSubmit={handleSubmit(handleAddProduct)}>
        <h1 className="text-3xl">RESISTER USER </h1>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text"> Name</span>
          </label>
          <input
            type="text"
            {...register("name")}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email")}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            {...register("quantity")}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mt-5">
          <input
            type="submit"
            value="Register User"
            className="btn btn-primary w-full "
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
