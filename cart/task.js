const product = Array.from(document.getElementsByClassName('product'));
const cartProducts = Array.from(document.getElementsByClassName('cart__products'))[0];
product.forEach(element => {
    const h3 = element.querySelector('h3');
    const img = element.querySelector('img');
    const dec = Array.from(element.getElementsByClassName("product__quantity-control product__quantity-control_dec"));
    const inc = Array.from(element.getElementsByClassName('product__quantity-control product__quantity-control_inc'));
    const quantity = Array.from(element.getElementsByClassName('product__quantity-value'));
    const productAdd = Array.from(element.getElementsByClassName('product__add'))[0];    
    dec[0].onclick = () => {        
        quantity[0].textContent < 2 ? quantity[0].textContent = 1 : quantity[0].textContent--;
    }
    inc[0].onclick = () => {        
        quantity[0].textContent++;
    }
    productAdd.onclick = () => {
        let id = []
        const cartProduct = Array.from(cartProducts.querySelectorAll('.cart__product'));
        cartProduct.forEach(elem => {
            id.push(elem.dataset.id)
        })
        if (id.includes(element.dataset.id)) {
            let index = id.indexOf(element.dataset.id);            
            cartProduct[index].querySelector('div').textContent = Number(cartProduct[index].querySelector('div').textContent) + Number(quantity[0].textContent);
        } else {
            cartProducts.innerHTML +=`
            <div class="cart__product" data-id=${element.dataset.id}>
                <img class="cart__product-image" src=${img.src}>
                <div class="cart__product-count">${quantity[0].textContent}</div>
            </div>`}           
    }
});