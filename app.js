const images = [
  { id: 1, img: `./images/image-product-1.jpg` },
  { id: 2, img: `./images/image-product-2.jpg` },
  { id: 3, img: `./images/image-product-3.jpg` },
  { id: 4, img: `./images/image-product-4.jpg` },
];

const thumbnails = document.querySelectorAll(`.thumb-nails`);
const img = document.getElementById(`img-product`);
const first = document.getElementById(`first`);
const second = document.getElementById(`second`);
const third = document.getElementById(`third`);
const fourth = document.getElementById(`fourth`);
const prev = document.getElementById(`prev`);
const navToggle = document.querySelector(`.nav-toggle`);
const link = document.querySelector(`.link`);
const linksCont = document.querySelector(`.links-container`);

navToggle.addEventListener(`click`, function () {
  // link.classList.toggle(`show-a`);
  linksCont.classList.toggle(`show-cont`);
});

target = 0;
window.addEventListener(`DOMContentLoaded`, function () {
  const item = images[target];
  img.src = item.img;
});

function showImage() {
  const simage = images[target];
  img.src = simage.img;
}

first.addEventListener(`click`, function () {
  target = 0;

  showImage(target);
});
second.addEventListener(`click`, function () {
  target = 1;
  showImage(target);
});
third.addEventListener(`click`, function () {
  target = 2;
  showImage(target);
});
fourth.addEventListener(`click`, function () {
  target = 3;
  showImage(target);
});

const minus = document.getElementById(`minus`);
const plus = document.getElementById(`plus`);
const value = document.querySelector(`.value`);
const cartBtn = document.querySelector(`.cart-btn`);
const empty = document.querySelector(`.empty`);
const filled = document.querySelector(`.filled`);
const cartIcon = document.querySelector(`.cart-icon`);
const cart = document.querySelector(`.cart`);
const allCart = document.querySelector(`.all-cart`);

let count = 0;
let kit = 0;

minus.addEventListener(`click`, function () {
  count--;
  kit--;
  if (count < 1) {
    count = 0;
  }
  if (kit < 1) {
    kit = 0;
  }
  value.textContent = count;
  cartIcon.textContent = kit;
  cartIcon.classList.add(`showIcon`);
  if (kit === 0) {
    cartIcon.classList.remove(`showIcon`);
  }
});
plus.addEventListener(`click`, function () {
  count++;
  kit++;
  value.textContent = count;
  cartIcon.textContent = kit;
  cartIcon.classList.add(`showIcon`);
});

cartBtn.addEventListener(`click`, function () {
  count >= 0;
  cartIcon.textContent = count;
  if (cartIcon.textContent > 0) {
    cartIcon.classList.add(`showIcon`);
  } else {
    cartIcon.classList.remove(`showIcon`);
  }
});

allCart.addEventListener(`click`, function () {
  count >= 0;
  kit >= 0;
  value.textContent = count;
  cartIcon.textContent = kit;
  if (kit === 0) {
    empty.classList.toggle(`show-empty`);
    setTimeout(function () {
      empty.classList.remove(`show-empty`);
    }, 1100);
  } else {
    filled.classList.toggle(`show-filled`);
    minus.addEventListener(`click`, function () {
      filled.classList.remove(`show-filled`);
    });
    plus.addEventListener(`click`, function () {
      filled.classList.remove(`show-filled`);
    });
    cartBtn.addEventListener(`click`, function () {
      filled.classList.remove(`show-filled`);
    });
  }

  if (count === 0) {
    cartBtn.addEventListener(`click`, function () {
      filled.classList.remove(`show-filled`);
    });
  }
});

prev.addEventListener(`click`, function () {
  target--;
  if (target < 0) {
    target = images.length - 1;
  }
  showImage(target);
});
next.addEventListener(`click`, function () {
  target++;
  if (target > images.length - 1) {
    target = 0;
  }
  showImage(target);
});
