
import './ProductItems.css'
import { AppContext } from '../../App';
import { useContext } from 'react';
export default function ProductItems(
     {
          productId,
          name,
          price,
          image
     }) {
     const { carts, setCarts } = useContext(AppContext);
     const handleAddCart = () => {
          var newCarts = [...carts];
          const cartFind = newCarts.find(cart => cart.productId === productId);
          if (cartFind) {
               cartFind.quantity = cartFind.quantity + 1;
               localStorage.setItem('cart', JSON.stringify(newCarts));
               setCarts(newCarts);
          } else {
               localStorage.setItem('cart',
                    JSON.stringify([...carts,
                    { productId, name, quantity: 1, price }]));
               setCarts([...carts, { productId, name, quantity: 1, price }]);

          }
     }
     return (
          <li className='product-item'>
               <div className="img-wrap">
                    <img
                         src={image}
                         alt={name}
                    />
               </div>
               <h2 className='heading-lv2'>
                    {
                         name
                    }
               </h2>
               <div className="btn-wrap">
                    <span
                         className='price'
                    >{`${price.toLocaleString()} VND`}
                    </span>
                    <button
                         className='btn btn-addCart'
                         onClick={() => handleAddCart()}
                    >
                         Add to cart!
                    </button>
               </div>
          </li>
     )
}
