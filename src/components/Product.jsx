import PropTypes from "prop-types";
const Product = ({ product }) => {
    // eslint-disable-next-line no-unused-vars
    const {product_title, product_image, category, price, description, Specification, availability, rating, warranty_period} = product;
  return (
    <div className="card bg-slate-200 shadow-xl">
      <figure className="px-5 pt-5">
        <img
          src={product_image}
          alt={product_title}
          className="rounded-xl"
        />
      </figure>
      <div className="p-5 space-y-3">
        <h2 className="card-title">{product_title}</h2>
        <p>Price : {price} $</p>
        <div className="card-actions">
          <button className="btn btn-sm rounded-full border-[#9538E2] text-[#9538E2] btn-outline">View Details</button>
        </div>
      </div>
    </div>
  );
};
Product.propTypes = {
  product: PropTypes.object,
};
export default Product;