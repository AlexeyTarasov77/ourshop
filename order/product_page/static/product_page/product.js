document.querySelectorAll('.card').forEach(card => {
    const addToCartButton = card.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
        addToCartButton.textContent = "Товар добавлен!"
        setTimeout(() => {
            addToCartButton.textContent = 'Добавить в корзину';
          }, 2000); 
    });
  });
  

    
    