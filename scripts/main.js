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

function addItem() {
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


function addItemToHot() {
    let div_card_menu_hot = document.createElement('div');
    div_card_menu_hot.className = "card card-menu";

    let img_card_hot = document.createElement('img')
    img_card_hot.src = "images/burgimgs.png";
    img_card_hot.className = "card-img-top";

    let div_card_hot = document.createElement('div');
    div_card_hot.className = "card-body";

    let card_title_hot = document.createElement('h5')
    card_title_hot.className = "card-title";
    card_title_hot.innerHTML = "Lorem ipsum dolor"

    let button_card_menu_hot = document.createElement('button');
    button_card_menu_hot.type = "button";
    button_card_menu_hot.className = "btn btn-custom rounded-pill btn-warning position-absolute top-50 start-50 translate-middle";
    button_card_menu_hot.innerHTML = "Add to basket";

    let card_text_hot = document.createElement('p')
    card_text_hot.className = "card-text";
    card_text_hot.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam aliquam facere nesciunt."

    div_card_menu_hot.prepend(img_card_hot);
    div_card_menu_hot.append(div_card_hot);
    div_card_hot.prepend(card_title_hot);
    card_title_hot.after(card_text_hot);
    div_card_hot.append(button_card_menu_hot);
    hot.append(div_card_menu_hot);
}

function goCount() {
    let count = document.getElementById('hot_count')
    for (let i = count.value; i > 0; i--) {
        addItemToHot()
    }
};






$(function () {
    $('#hot-button').click(function () {
        let count = document.getElementById('hot_count')
        for (let i = count.value; i > 0; i--) {
            $('#hot').append(' <div class="card card-menu"><img src="images/burgimgs.png" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Lorem, ipsum dolor.</h5><p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosamaliquam facere nesciunt.</p><button type="button"class="btn btn-custom rounded-pill btn-warning position-absolute top-50 start-50 translate-middle"data-bs-toggle="modal" data-bs-target="#exampleModal">Add to basket</button></div>')
        }
    })
})
// div_card_menu.innerHTML = Наполнение 