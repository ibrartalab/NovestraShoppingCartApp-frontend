import React from 'react'
import Input from '../../Input'
import { convertFileToBase64 } from "../../../utils/fileHelper";
import { createProduct } from '../../../features/product/productSlice';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { useAppDispatch } from '../../../hooks/redux/reduxHooks';

const AddProduct = () => {
    const [formData, setFormData] = React.useState({
      name: "",
      category: "",
      price: "",
      stock: "",
      description: "",
      imageUrl: "",
    });

    const axiosPrivate = useAxiosPrivate();
    const dispatch = useAppDispatch();

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files[0]){
            const file = e.target.files[0];

            if(file.size > 2 * 1024 * 1024){
                alert("File size exceeds 2MB");
                return;
            }

            const base64String = await convertFileToBase64(file);
            setFormData((prev) => ({...prev, imageUrl: base64String}));
        }
    };



    const handleProductSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle product submission logic here
        const payload = {
            name: formData.name,
            category: formData.category,
            price: parseFloat(formData.price),
            stock: parseInt(formData.stock, 10),
            description: formData.description,
            imageUrl: formData.imageUrl,
        };

        try {
            await dispatch(createProduct({ payload, axiosPrivate })).unwrap();
        } catch (error: unknown) {
            return error;
        }
    }
  return (
    <div>
        AddProduct
        <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        <form className="space-y-2" onSubmit={handleProductSubmit}>
            <div className='flex gap-4'>
            <Input
                label="Product Name"
                type="text"
                name="name"
                styleClass="w-full border border-gray-300 p-2 rounded"
                id="name"
                onChange={(e) => {
                    setFormData({...formData, name: e.target.value});
                }}
                errorMessage=""
                value={formData.name}
            />
            <Input
                label="Category"
                type="text"
                name="category"
                styleClass="w-full border border-gray-300 p-2 rounded"
                id="category"
                onChange={(e) => {
                    setFormData({...formData, category: e.target.value});
                }}
                errorMessage=""
                value={formData.category}
            />
            </div>
            <div className='flex gap-4'>
            <Input
                label="Price"
                type="text"
                name="price"
                styleClass="w-full border border-gray-300 p-2 rounded"
                id="price"
                onChange={(e) => {
                    setFormData({...formData, price: e.target.value});
                }}
                errorMessage=""
                value={formData.price}
            />
            <Input
                label="Stock Quantity"
                type="text"
                name="stock"
                styleClass="w-full border border-gray-300 p-2 rounded"
                id="stock"
                onChange={(e) => {
                    setFormData({...formData, stock: e.target.value});
                }}
                errorMessage=""
                value={formData.stock}
            />
            </div>
            <div className='flex gap-4'>
            <Input
                label="Description"
                type="text"
                name="description"
                styleClass="w-full h-20 border border-gray-300 p-2 rounded"
                id="description"
                onChange={(e) => {
                    setFormData({...formData, description: e.target.value});
                }}
                errorMessage=""
                value={formData.description}
            />
            <Input
                label="Upload Image"
                type="file"
                name="imageUrl"
                styleClass="w-full h-20 border border-gray-300 p-2 rounded"
                id="imageUrl"
                onChange={handleImageChange}
                errorMessage=""
                accept=".png, .jpg, .jpeg"    
                // value=""
            />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">Add Product</button>
        </form>
        </div>
    </div>
  )
}

export default AddProduct