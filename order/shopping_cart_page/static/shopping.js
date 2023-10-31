document.addEventListener('DOMContentLoaded', () => {
  const cartWrapper = document.querySelector('.card-grid');
  const purchaseBtn = document.querySelector('.purchase-button');

  // Функция для отображения или скрытия кнопки в зависимости от содержимого корзины
  function updatePurchaseButtonVisibility() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cartItems.length > 0) {
      purchaseBtn.style.display = "block"; // Показать кнопку
    } else {
      purchaseBtn.style.display = "none"; // Скрыть кнопку
    }
  }

  // Обновление кнопки при загрузке страницы
  updatePurchaseButtonVisibility();

  // Получите список товаров из локального хранилища
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Переберите товары и отобразите их на странице корзины
  cartItems.forEach(productInfo => {
    const cartItemHTML = `
      <div class="card" data-id="${productInfo.id}">
        <img class='product-img' src="${productInfo.image}" alt="Изображение товара">
        <h3 class='card-title'>${productInfo.title}</h3>
        <hr>
        <h3 class='product-price'>${productInfo.price}</h3>
        <button class="remove-from-cart">Удалить из корзины</button>
      </div>
    `;

    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
  });

  // Добавьте обработчик события для удаления товара из корзины
  cartWrapper.addEventListener('click', event => {
    if (event.target.classList.contains('remove-from-cart')) {
      const card = event.target.closest('.card');
      const productId = card.dataset.id;

      // Найдите и удалите товар из списка корзины в локальном хранилище
      const updatedCartItems = cartItems.filter(product => product.id !== productId);

      // Обновите список товаров в локальном хранилище
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

      // Удалите карточку товара из отображения на странице корзины
      cartWrapper.removeChild(card);
      // перезагружаем страницу после каждого удаления во избежание бага
      location.reload();

      // Обновление кнопки после удаления товара
      updatePurchaseButtonVisibility();
    }
  });

  // Добавьте обработчик события для оформления заказа
  purchaseBtn.addEventListener('click', function() {
    purchaseBtn.textContent = "Заказ оформлен!";
    setTimeout(() => {
      purchaseBtn.textContent = "Оформить заказ";
    }, 2000);
  });
});
