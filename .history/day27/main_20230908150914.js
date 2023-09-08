window.addEventListener("load", function (e) {
  const $ = document.querySelector.bind(document);

  const tableProduct = $(".table-product");
  const tableOrder = $(".table-order");

  const products = [
    { id: 1, nameproduct: "sản phẩm 1", price: 1000 },
    { id: 2, nameproduct: "sản phẩm 2", price: 2000 },
    { id: 3, nameproduct: "sản phẩm 3", price: 3000 },
    { id: 4, nameproduct: "sản phẩm 4", price: 4000 },
  ];
  products &&
    products.forEach((product, index) => {
      var html = `
         <tbody>
           <tr>
             <td width="5%" style="text-align: center;">${index + 1}</td>
             <td>${product.nameproduct}</td>
             <td width="5%" style="text-align: center;">${
               product.price.toLocaleString() + "đ"
             }</td>
             <td width="20%">
             <input type="number" name="" id="" value=1>
             </td>
             <td class="td-add-order" width="20%" style="text-align: center;"> <button class="btn-add-order">thêm vào giỏ</button></td>
           </tr>
         </tbody>`;
      tableProduct.insertAdjacentHTML("beforeend", html);
    });
});
