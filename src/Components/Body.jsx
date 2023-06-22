import { PRODUCTS } from "../Data/products";
import Product from "./Product";
const Body = () => {
  return (
    <div className="body">
      <div className="ShopTitle">
        <h1>ShopFinity</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => {
            return (
                <Product data={product} key={product.id}/>
            )
        })}
      </div>
    </div>
  );
};

export default Body;
