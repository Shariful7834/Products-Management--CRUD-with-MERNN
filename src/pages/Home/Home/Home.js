import React from "react";
import { toast } from "react-hot-toast";

const Home = () => {
  const handleAddProduct = (event) => {
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
    console.log(productInfo);
    fetch("http://localhost:5000/addproducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Product Added successful");
        form.reset();
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 shadow-xl">
        <form className="p-5" onSubmit={handleAddProduct}>
          <h1 className="text-3xl">ADD PRODUCTS</h1>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="productName"
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
    </div>
  );
};

export default Home;
