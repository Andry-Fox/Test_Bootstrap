let div_card_menu = document.createElement('div');
div_card_menu.id = "burgerStrongHotMenu";
div_card_menu.className = "card card-menu";

let img_card = document.createElement('img')
img_card.src = "images/burgimgs.png";
img_card.className = "card-img-top";

let div_card = document.createElement('div');
div_card.className = "card-body";
div_card.id = "cardBody";

let card_title = document.createElement('h5')
card_title.className = "card-title";
card_title.innerHTML = "Lorem ipsum dolor"

let button_card_menu = document.createElement('button');
button_card_menu.type = "button";
button_card_menu.id = "button_card_menu";
button_card_menu.className = "btn btn-custom rounded-pill btn-warning position-absolute top-50 start-50 translate-middle";
button_card_menu.innerHTML = "Add to basket";
button_card_menu.dataset.bsToggle="modal";
button_card_menu.dataset.bsTarget="#exampleModal";

let card_text = document.createElement('p')
card_text.className = "card-text";
card_text.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam aliquam facere nesciunt."

function addcard () {
first.append(div_card_menu);
burgerStrongHotMenu.prepend(img_card);
burgerStrongHotMenu.append(div_card);
cardBody.prepend(card_title);
card_title.after(card_text);
cardBody.append(button_card_menu);
}


// div_card_menu.innerHTML = Наполнение 