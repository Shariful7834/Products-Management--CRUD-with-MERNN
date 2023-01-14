import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const product = useLoaderData();

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const ProductPrice = form.price.value;
    const quantity = form.quantity.value;
    console.log(productName, ProductPrice, quantity);

    const productInfo = {
      productName,
      ProductPrice,
      quantity,
    };
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: "PUT",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Product Updated Successfully");
        }
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 shadow-xl">
        <form className="p-5" onSubmit={handleUpdateProduct}>
          <h1 className="text-3xl">UPDATE PRODUCTS</h1>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="productName"
              defaultValue={product.productName}
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
              name="price"
              defaultValue={product.ProductPrice}
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
              name="quantity"
              defaultValue={product.quantity}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="mt-5">
            <input
              type="submit"
              value="Update Product"
              className="btn btn-primary w-full "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
