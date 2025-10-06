import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Category from "./Category";
import { products } from "../products";
import { CiStar } from "react-icons/ci";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import RelatedPage from "./RelatedProducts";

const ProductDetailPage = () => {
  const { slug } = useParams();

  // Find product by slug
  const product = products.find((p) => p.slug === slug);

  // State for main image
  const [mainImage, setMainImage] = useState(product ? product.images[0] : "");

  if (!product) {
    return (
      <div>
        <Category />
        <h2 className="text-center mt-10 text-2xl font-semibold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Category />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 p-4 md:p-8 mt-8">
        {/* ✅ Product Images */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
          <img
            className="w-full max-w-md rounded-lg shadow-md mb-4 object-contain"
            src={mainImage}
            alt={product.name}
          />

          {/* ✅ Thumbnails */}
          <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
            {product.images.map((img, index) => (
              <img
                key={index}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
                  mainImage === img ? "border-blue-600" : "border-transparent"
                } hover:border-blue-800 transition`}
                src={img}
                alt={`${product.name}-${index}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* ✅ Product Details */}
        <div className="w-full lg:w-1/2 space-y-5">
          <h1 className="font-bold text-2xl md:text-4xl">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <CiStar className="text-yellow-500 text-2xl" />
            <span className="text-lg md:text-xl">{product.rating}</span>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700 text-base md:text-lg">{product.description}</p>
          </div>

          {/* Price */}
          <p className="text-xl md:text-2xl text-red-700 font-semibold">
            Price: <span className="text-black">₹{product.price}</span>
          </p>

          {/* Shipping Date */}
          <p className="text-sm text-red-600">Delivery Tomorrow</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="w-full sm:w-auto px-10 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-600 transition">
              Buy Now
            </button>
            <button className="w-full sm:w-auto px-10 py-3 border-2 border-blue-800 text-blue-800 rounded-lg hover:bg-blue-100 transition">
              Add to Cart
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 space-y-3">
            <ul className="space-y-2 text-base md:text-lg text-gray-700">
              <li className="flex items-center gap-2">
                <IoIosCheckmarkCircleOutline className="text-green-500 text-xl" />
                Order before 15:00 for same-day dispatch
              </li>
              <li className="flex items-center gap-2">
                <IoIosCheckmarkCircleOutline className="text-green-500 text-xl" />
                Easy return within 10 days if you're not satisfied
              </li>
              <li className="flex items-center gap-2">
                <IoIosCheckmarkCircleOutline className="text-green-500 text-xl" />
                2-year warranty: peace of mind for your purchase
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ✅ Related Products */}
      <div className="mt-10 px-4 md:px-8">
        <RelatedPage />
      </div>
    </div>
  );
};

export default ProductDetailPage;
