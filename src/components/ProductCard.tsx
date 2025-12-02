import { useNavigate } from "react-router-dom";

const ProductCard = ({product, isPdp=false}) => {
  const router = useNavigate();

  const goToProductPage = (product) => {
    router(`/products/${product.slug}`, {
    state: { product } // Pass product data directly
  });
  }
  return (
    <div className="product-card hover-btn" onClick={()=>goToProductPage(product)} key={product.id}>
      <div className="product-card-img">
        {/* <span className="text-4xl">💊</span> */}
          <img src={`${isPdp ? ".." : "."}/images/${product.images[0]}`} alt={product.name} className="w-full" />
        <div className="overlay"></div>
      </div>
      <div className="product-card-content">
        <h6 className="text-xl font-semibold">{product.name}</h6>
        {
          product.category.length > 0 && (
            <div className="flex items-center justify-center gap-2 my-2">
              {
                product.category.map((cat) => (
                  <p className="px-2 py-1 rounded border border-[#efefef] bg-[#eee] text-sm">{cat}</p>
                ))
              }
            </div>
          )
        }
        <p className="price">{product.price} <del>$200.00</del></p>
      </div>
      <span className="for-border"></span>
    </div>
  )
}
export default ProductCard;