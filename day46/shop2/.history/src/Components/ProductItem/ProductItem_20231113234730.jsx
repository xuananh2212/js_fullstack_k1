import { clsx } from 'clsx'
import styles from './ProductItem.module.scss'
import { BsCartPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
export default function ProductItem({ product }) {
     const dispatch = useDispatch();
     const counter = useSelector((state) => state.carts);
     const navigate = useNavigate();
     console.log(product);
     const { _id, name, image, price } = product;
     return (
          <div
               className={clsx(styles.ProductItem)}
          >
               <div
                    className={clsx(styles.imgWrap)}
                    onClick={async () => {
                         navigate(`/${_id}`);
                    }}
               >
                    <img src={image} alt={name} />
               </div>
               <div className={clsx(styles.content)}>
                    <h3 className={clsx(styles.nameProduct)}>
                         {name}
                    </h3>
                    <div className={clsx(styles.contentBottom)}>
                         <span className={styles.price}>$ {price.toLocaleString()}</span>
                         <button
                              onClick={ }
                              className={clsx(styles.btnAddCart)}>
                              <BsCartPlus />
                              Add cart
                         </button>
                    </div>
               </div>

          </div>

     )
}
