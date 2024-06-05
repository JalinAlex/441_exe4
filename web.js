//Alex Zheng Qiuyang
// Function to set the username and password in a cookie
function setUserInfo738() {
    const usernameInput = document.getElementById('usernameInput').value.trim();
    const passwordInput = document.getElementById('passwordInput').value.trim();
    if (usernameInput !== '' && passwordInput !== '') {
        setCookie738('username', usernameInput, 30); // Set cookie with name "username" lasting 30 days
        setCookie738('password', passwordInput, 30);
        alert(`"${usernameInput}" has been set in the cookie.`);
        location.assign("login.html");
    } else {
        alert('Please enter a valid username or password.');
    }
}

function setCookie738(cookieName, cookieValue, expirationDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}



// Function to compare the username and password with the cookie
function getUserInfo738() {
    const username = getCookie738('username');
    const password = getCookie738('password');
    if (username !== '' || password !== '') {
        var usernameInput = document.getElementById('usernameInput').value;
        var passwordInput = document.getElementById('passwordInput').value;

        if (usernameInput == username && passwordInput == password) {
            location.assign("shopping.html");
        }
        else {
            alert('Username or Password entered incorrectly.');
        }
    } else {
        alert('Username cookie or Password cookie not found.');
    }
}

function getCookie738(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}



//Shopping cart code
let cart = [];

function renderCart738() {
    const cartElement = document.getElementById('items');
    cartElement.innerHTML = ''; // #items initialize
    let totalPrice = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('li');

        // Set text in the cart item
        itemElement.classList.add('item');
        itemElement.textContent = `${item.name} - AUD ${item.price} * ${item.number}`;

        // Set remove button in the cart item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeItem738(item);
        itemElement.appendChild(removeButton);

        // Add the item to #items
        cartElement.appendChild(itemElement);
        totalPrice += item.price * item.number;
    });

    //Change total text in time
    document.getElementById('total').textContent = `Total: AUD ${totalPrice}`;

    //Clear input value
    var inputs = document.querySelectorAll(".number");
    inputs.forEach(input => {
        input.value = null;
    });
}

function addItem738(itemName, itemPrice, currentButton) {
    var itemNumber = currentButton.parentElement.querySelector('.number').value;

    if (itemName && itemPrice && itemNumber != 0) {
        cart.push({ name: itemName, price: itemPrice, number: itemNumber });
        renderCart738();
    }
}

function removeItem738(item) {
    const index = cart.indexOf(item);
    if (index !== -1) {
        cart.splice(index, 1);
        renderCart738();
    }
}

function checkout738() {
    alert(`Thank you for your purchase! ${document.getElementById('total').textContent}`);
    clearCart738();
}

function clearCart738() {
    cart = [];
    renderCart738();
}