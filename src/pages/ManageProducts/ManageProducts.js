import React from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    },
  });

  const deleteHandler = (product) => {
    const agree = window.confirm(
      `Do you want to Delete ${product.productName}`
    );
    console.log(agree);
    if (agree) {
      fetch(`http://localhost:5000/products/${product._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Product Deleted successful");
            refetch();
          }
        });
    }
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center mt-16 mb-6">
        Manage Products
      </h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product.productName}</td>
                <td>{product.ProductPrice}</td>
                <td>{product.quantity}</td>
                <td>
                  <button
                    onClick={() => deleteHandler(product)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/updateProduct/${product._id}`}>
                    <button className="btn btn-success">Update Product</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
