import React from "react";
import AddProduct from "../../components/Admin/Products/AddProduct";

const AdminDashboard = () => {
  return (
    <div>
      <div className="px-20 py-20">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p>
          Welcome to the admin dashboard. Here you can manage products, view
          orders, and handle user accounts.
        </p>
        <AddProduct />
      </div>
    </div>
  );
};

export default AdminDashboard;
