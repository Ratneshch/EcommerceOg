import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { products } from "../products";
import { useNavigate } from "react-router-dom";

const ProductPage = ({ searchQuery }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

const filteredProducts = products.filter((product) =>
  product?.name?.toLowerCase().includes(searchQuery.toLowerCase())
);


  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentProducts.length > 0 ? (
          currentProducts.map((product, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border bg-white border-gray-300 rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-200"
            >
              <img
                className="w-full h-48 object-contain mb-4 transform hover:scale-110 transition-transform duration-200 cursor-pointer"
                src={product.image ? product.image : product.images?.[0]}
                alt={product.name}
                onClick={() => navigate(`/product/${product.slug}`)}
              />
              <div>
                <h2 className="font-semibold text-sm mb-1">{product.name}</h2>
                <p className="text-xs mb-4">{product.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-red-800">₹{product.price}</p>
                <div className="flex items-center gap-1">
                  <CiStar className="text-yellow-500 text-lg" />
                  <span className="text-sm font-semibold">{product.rating}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4 text-lg font-medium">
            No products found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {filteredProducts.length > productsPerPage && (
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
