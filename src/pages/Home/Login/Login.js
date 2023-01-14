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
        <h1 className="text-3xl">ADD PRODUCTS</h1>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            {...register("productName")}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Price</span>
          </label>
          <input
            type="text"
            {...register("productPrice")}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Quantity</span>
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
            value="Add Product"
            className="btn btn-primary w-full "
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
