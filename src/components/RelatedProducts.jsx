import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../products";
import { CiStar } from "react-icons/ci";

const RelatedPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find current product
  const currentProduct = products.find((p) => p.slug === slug);

  if (!currentProduct) {
    return <p className="text-center mt-10 text-lg">Product not found</p>;
  }

  // Filter related products by category (excluding current one)
  const relatedProducts = products.filter(
    (p) => p.category === currentProduct.category && p.slug !== currentProduct.slug
  );

  return (
    <div className="mt-5 px-10">
      <h2 className="text-3xl font-bold mb-8">Related Products</h2>

      {relatedProducts.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {relatedProducts.map((product) => (
            <div
              key={product.slug}
              onClick={() => navigate(`/product/${product.slug}`)}
              className="cursor-pointer  rounded-lg p-3 shadow hover:shadow-xl transition"
            >
              <img
                src={product.image || product.images?.[0]}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-s font-semibold">{product.name}</h3>
              <p className="text-xs text-gray-600 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-red-700 font-bold text-sm">₹{product.price}</p>
                <div className="flex items-center gap-1 text-sm">
                  <CiStar className="text-yellow-500 " />
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-lg">No related products found.</p>
      )}
    </div>
  );
};

export default RelatedPage;
