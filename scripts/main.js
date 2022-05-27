// let div_card_menu = document.createElement('div');
// div_card_menu.className = "card card-menu";

// let img_card = document.createElement('img')
// img_card.src = "images/burgimgs.png";
// img_card.className = "card-img-top";

// let div_card = document.createElement('div');
// div_card.className = "card-body";

// let card_title = document.createElement('h5')
// card_title.className = "card-title";
// card_title.innerHTML = "Lorem ipsum dolor"

// let button_card_menu = document.createElement('button');
// button_card_menu.type = "button";
// button_card_menu.className = "btn btn-custom rounded-pill btn-warning position-absolute top-50 start-50 translate-middle";
// button_card_menu.innerHTML = "Add to basket";

// let card_text = document.createElement('p')
// card_text.className = "card-text";
// card_text.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam aliquam facere nesciunt."

function addItem () {
    let div_card_menu = document.createElement('div');
    div_card_menu.className = "card card-menu";

    let img_card = document.createElement('img')
    img_card.src = "images/burgimgs.png";
    img_card.className = "card-img-top";

    let div_card = document.createElement('div');
    div_card.className = "card-body";

    let card_title = document.createElement('h5')
    card_title.className = "card-title";
    card_title.innerHTML = "Lorem ipsum dolor"

    let button_card_menu = document.createElement('button');
    button_card_menu.type = "button";
    button_card_menu.className = "btn btn-custom rounded-pill btn-warning position-absolute top-50 start-50 translate-middle";
    button_card_menu.innerHTML = "Add to basket";

    let card_text = document.createElement('p')
    card_text.className = "card-text";
    card_text.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam aliquam facere nesciunt."

    div_card_menu.prepend(img_card);
    div_card_menu.append(div_card);
    div_card.prepend(card_title);
    card_title.after(card_text);
    div_card.append(button_card_menu);
    first.append(div_card_menu);
}

// addcard ()
// addcard ()

// div_card_menu.innerHTML = Наполнение 