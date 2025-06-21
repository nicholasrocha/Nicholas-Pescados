function addToCart(id) {
  const card = document.querySelector(`.fish-card[data-id="${id}"]`);
  const kgInput = card.querySelector('.kg-input');
  const kg = parseFloat(kgInput.value);

  fetch('http://localhost:8080/orders', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ fish_id: id, kg })
  }).then(() => loadCart());
}

function loadCart() {
  fetch('http://localhost:8080/orders')
    .then(res => res.json())
    .then(orders => {
      const cartList = document.getElementById('cart-list');
      cartList.innerHTML = '';
      let total = 0;
      orders.forEach(order => {
        total += order.total_price;
        const div = document.createElement('div');
        div.innerHTML = `
          ${order.name} - ${order.kg}kg (R$${order.total_price.toFixed(2)}) 
          <button onclick="removeItem(${order.id})">X</button>
        `;
        cartList.appendChild(div);
      });
      const totalDiv = document.createElement('div');
      totalDiv.innerHTML = `<strong>Total: R$${total.toFixed(2)}</strong>`;
      cartList.appendChild(totalDiv);
    });
}

function removeItem(id) {
  fetch(`http://localhost:8080/orders/${id}`, { method: 'DELETE' })
    .then(() => loadCart());
}

document.getElementById('clear-cart').onclick = () => {
  fetch('http://localhost:8080/orders', { method: 'DELETE' })
    .then(() => loadCart());
};

loadCart();
