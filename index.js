let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.producto');
    const maxSlides = slides.length - 4; // Mostrar solo 4 productos a la vez

    slideIndex += n;

    if (slideIndex < 0) {
        slideIndex = 0;
    } else if (slideIndex > maxSlides) {
        slideIndex = 0; // Reiniciar al inicio si se llega al final
    }

    const offset = slideIndex * (slides[0].offsetWidth + 20); // Ajusta el offset según el ancho de cada producto

    document.querySelector('.productos').style.transform = `translateX(-${offset}px)`;
}

document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));

// Mover el carrusel automáticamente cada 3 segundos
setInterval(() => {
    moveSlide(1);
}, 3000);





let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartCount.textContent = cart.length;

    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => removeFromCart(item.name);
        li.appendChild(removeButton);
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total;
}

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function checkout() {
    alert('Gracias por tu compra!');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('cart-modal');
    const cartButton = document.getElementById('cart-button');
    const closeButton = document.getElementsByClassName('close')[0];

    cartButton.onclick = function() {
        modal.style.display = 'block';
    }

    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    updateCart();
});