import React, { useContext } from 'react'
import { AppContext } from '../../App'
import './carts.css'
import OrderItems from '../CartItems/CartItems';
import { handlePostOderAPI } from '../../Utils/handleApi';
export default function Carts() {
     const { carts, setCarts } = useContext(AppContext);
     console.log(setCarts);
     const sumMoney = (() => {
          let sum = 0;
          carts.forEach(cart => {
               sum += cart.quantity * cart.price
          });
          return sum;
     })()
     const handleOrder = () => {
          handlePostOderAPI(carts, setCarts);
     }
     return (
          <div>
               {carts.length > 0
                    ?
                    (<table>
                         <thead>
                              <tr >
                                   <th>STT</th>
                                   <th>Tên sản phẩm</th>
                                   <th>Số lượng</th>
                                   <th>giá </th>
                                   <th>Thành Tiền</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   carts.map(({ productId, quantity, price, name }, index) =>
                                        <OrderItems
                                             key={productId}
                                             name={name}
                                             stt={index}
                                             quantity={quantity}
                                             price={price}
                                        />)
                              }
                         </tbody>
                         <tfoot>
                              <tr>
                                   <td
                                        colSpan="2"
                                   >
                                        Tổng Tiền
                                   </td>
                                   <td
                                        colSpan="2"
                                   >
                                        {sumMoney.toLocaleString() + " VND"}
                                   </td>
                                   <td
                                        style={{ textAlign: "center" }}
                                   >
                                        <button
                                             className='btn btn-orders'
                                             onClick={handleOrder}
                                        >
                                             Thành Toán
                                        </button>
                                   </td>
                              </tr>
                         </tfoot>
                    </table>
                    )

                    :
                    <span style={{ fontSize: 26, fontWeight: 500 }}>chưa có sản phẩn nào</span>}
          </div >
     )
}
