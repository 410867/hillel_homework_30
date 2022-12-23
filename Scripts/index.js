import { categoryList } from './CategoryRepository.js';
import { findByCategory } from './ProductRepository.js';

const shop = document.querySelector('.shop');
const categories = document.querySelector('.categories');
const listOfGoods = document.querySelector('.list_of_goods');
const item = document.querySelector('.item-block');
const notifications = document.querySelector('.notifications');

renderCategoryList();
categories.addEventListener('click', ({ target }) => {
    item.innerHTML = ``;
    if(target.matches('button')) {
        const listCategory = document.querySelectorAll('button');
        listCategory.forEach((category) => {
            category.classList.remove('color_category');
        });

        if(target.textContent === 'Смартфони') {
            renderListPhones();
        }

        if(target.textContent === 'Ноутбуки') {
            renderListLaptops()
        }

        if(target.textContent === 'Планшети') {
            renderListTablets()
        }

        target.classList.toggle('color_category');
    }
});

function renderCategoryList() {
    categoryList(0).forEach((category) => {
        const item = document.createElement('button');
        item.classList.add('category');
        item.innerText = `${category.title}`;
        categories.append(item);
    });
}

function renderListPhones() {
    listOfGoods.innerHTML = `<ul class="list"></ul>`;
    const list = document.querySelector('.list');
    listOfGoods.classList.add('overflow');
    list.classList.remove('hide');
    list.innerHTML = '';

    findByCategory(1).forEach(
        ({
             isStoredInFacility,
             photo,
             brand,
             model,
             haveDiscount,
             price,
             color,
             country,
             os,
             memory,
         }) => {
            const dataItem = {
                isStoredInFacility: isStoredInFacility,
                photo: photo,
                brand: brand,
                model: model,
                haveDiscount: haveDiscount,
                price: price,
                color: color,
                country: country,
                os: os,
                memory: memory,
            };
            const itemLi = document.createElement('li');
            itemLi.classList.add('item-li');

            itemLi.innerHTML = `
                ${haveDiscount ? '<div class="discount">Discount</div>' : ''}
                <img src=${photo}  alt="photo" class="image"/>
                <div class="content">
                    <h3>${brand} - ${model}</h3>
                    <p class="${!isStoredInFacility && 'through'}">${price} ₴</p>
                    <div class="flex">color: <span class="color" style="background-color: ${color}"></span></div>
                    <div class="flex">Country: ${country}</div>
                    <div class="flex">Memory: ${memory}GB</div>
                    <div class="flex">OS: ${os}</div>
                </div>`;
            list.append(itemLi);

            itemLi.addEventListener('click', (event) => {
                renderItemPhone(dataItem);
            });
        });
}
function renderListLaptops() {
    listOfGoods.innerHTML = `<ul class="list"></ul>`;
    const list = document.querySelector('.list');
    listOfGoods.classList.add('overflow');
    list.classList.remove('hide');
    list.innerHTML = '';

    findByCategory(2).forEach(
        ({
             isStoredInFacility,
             photo,
             brand,
             name,
             haveDiscount,
             price,
             color,
             country,
             os,
             memory,

             screenSize,
             processorType,
             RAM,
             videoProcessor,
         }) => {
            const dataItem = {
                isStoredInFacility: isStoredInFacility,
                photo: photo,
                brand: brand,
                name: name,
                haveDiscount: haveDiscount,
                price: price,
                color: color,
                country: country,
                os: os,
                memory: memory,
                screenSize: screenSize,
                processorType: processorType,
                RAM: RAM,
                videoProcessor: videoProcessor,
            };
            const itemLi = document.createElement('li');
            itemLi.classList.add('item-li');

            itemLi.innerHTML = `
                ${haveDiscount ? '<div class="discount">Discount</div>' : ''}
                <img src=${photo}  alt="photo"/>
                <div class="content">
                    <h3>${brand} - ${name}</h3>
                    <p class="${!isStoredInFacility && 'through'}">${price} ₴</p>
                    <div class="flex">color: <span class="color" style="background-color: ${color}"></span></div>
                    <div class="flex">Country: ${country}</div>
                    <div class="flex">Memory: ${memory}GB</div>
                    <div class="flex">OS: ${os}</div>
                </div>`;
            list.append(itemLi);
            itemLi.addEventListener('click', (event) => {
                renderItemLaptop(dataItem);
            });
        });
}
function renderListTablets() {
    listOfGoods.innerHTML = `<ul class="list"></ul>`;
    const list = document.querySelector('.list');
    listOfGoods.classList.add('overflow');
    list.classList.remove('hide');
    list.innerHTML = '';

    findByCategory(3).forEach(
        ({
             isStoredInFacility,
             photo,
             brand,
             name,
             haveDiscount,
             price,
             color,
             country,
             os,
             memory,

             screenSize,
             processor,
             RAM,
         }) => {
            const dataItem = {
                isStoredInFacility: isStoredInFacility,
                photo: photo,
                brand: brand,
                name: name,
                haveDiscount: haveDiscount,
                price: price,
                color: color,
                country: country,
                os: os,
                memory: memory,
                screenSize: screenSize,
                processor: processor,
                RAM: RAM,
            };
            const itemLi = document.createElement('li');
            itemLi.classList.add('item-li');

            itemLi.innerHTML = `
                ${haveDiscount ? '<div class="discount">Discount</div>' : ''}
                <img src=${photo}  alt="photo"/>
                <div class="content">
                    <h3>${brand} - ${name}</h3>
                    <p class="${!isStoredInFacility && 'through'}">${price} ₴</p>
                    <div class="flex">color: <span class="color" style="background-color: ${color}"></span></div>
                    <div class="flex">Country: ${country}</div>
                    <div class="flex">Memory: ${memory}GB</div>
                    <div class="flex">OS: ${os}</div>
                </div>`;
            list.append(itemLi);
            itemLi.addEventListener('click', (event) => {
                renderItemTablet(dataItem);
            });
        });
}

function renderItemPhone(dataItem) {
    item.innerHTML = `
        <img src=${dataItem.photo}  alt="photo" class="image_item-block"/>
        <div class="content content_item-block">
            <h3>${dataItem.brand} - ${dataItem.model}</h3>
            <p class="${!dataItem.isStoredInFacility && 'through'}">${dataItem.price} ₴</p>
            <div class="flex">color: <span class="color" style="background-color: ${dataItem.color}"></span></div>
            <div class="flex">Country: ${dataItem.country}</div>
            <div class="flex">Memory: ${dataItem.memory}GB</div>
            <div class="flex">OS: ${dataItem.os}</div>
            <div class="button"><button type="button" class="btn btn-dark btn-buy">Купити</button></div>
        </div>`;

    const buttonBuy = document.querySelector('.btn-buy');

    buttonBuy.addEventListener('click', (event) => {
        listOfGoods.innerHTML = `<ul class="list hide"></ul>`;
        item.innerHTML = ``;
        renderNotification(`Дякаємо за покупку: ${dataItem.brand} - ${dataItem.model}`, 5000);
    });
}
function renderItemLaptop(dataItem) {
    item.innerHTML = `
        <img src=${dataItem.photo}  alt="photo" class="image_item-block"/>
        <div class="content content_item-block">
            <h3>${dataItem.brand} - ${dataItem.name}</h3>
            <p class="${!dataItem.isStoredInFacility && 'through'}">${dataItem.price} ₴</p>
            <div class="flex">Screen size: ${dataItem.screenSize}</div>
            <div class="flex">Processor type: ${dataItem.processorType}</div>
            <div class="flex">RAM: ${dataItem.RAM}GB</div>
            <div class="flex">Video processor: ${dataItem.videoProcessor}</div>
            <div class="flex">color: <span class="color" style="background-color: ${dataItem.color}"></span></div>
            <div class="flex">Country: ${dataItem.country}</div>
            <div class="flex">Memory: ${dataItem.memory}GB</div>
            <div class="flex">OS: ${dataItem.os}</div>
            <div class="button"><button type="button" class="btn btn-dark btn-buy">Купити</button></div>
        </div>`;

    const buttonBuy = document.querySelector('.btn-buy');

    buttonBuy.addEventListener('click', (event) => {
        listOfGoods.innerHTML = `<ul class="list hide"></ul>`;
        item.innerHTML = ``;
        renderNotification(`Дякаємо за покупку: ${dataItem.brand} - ${dataItem.name}`, 5000);
    });
}
function renderItemTablet(dataItem) {
    item.innerHTML = `
        <img src=${dataItem.photo}  alt="photo" class="image_item-block"/>
        <div class="content content_item-block">
            <h3>${dataItem.brand} - ${dataItem.name}</h3>
            <p class="${!dataItem.isStoredInFacility && 'through'}">${dataItem.price} ₴</p>
            <div class="flex">Screen size: ${dataItem.screenSize}</div>
            <div class="flex">Processor type: ${dataItem.processor}</div>
            <div class="flex">RAM: ${dataItem.RAM}GB</div>
            <div class="flex">color: <span class="color" style="background-color: ${dataItem.color}"></span></div>
            <div class="flex">Country: ${dataItem.country}</div>
            <div class="flex">Memory: ${dataItem.memory}GB</div>
            <div class="flex">OS: ${dataItem.os}</div>
            <div class="button"><button type="button" class="btn btn-dark btn-buy">Купити</button></div>
        </div>`;

    const buttonBuy = document.querySelector('.btn-buy');

    buttonBuy.addEventListener('click', (event) => {
        listOfGoods.innerHTML = `<ul class="list hide"></ul>`;
        item.innerHTML = ``;
        renderNotification(`Дякаємо за покупку: ${dataItem.brand} - ${dataItem.name}`, 5000);
    });
}

notifications.addEventListener('click', ({ target }) => {
    if(target.matches('.btn-close')) {
        target.closest('.notification').remove();
    }
});
function renderNotification(text, time) {
    const notificationElement = document.createElement('li');
    notificationElement.classList.add('notification');
    notificationElement.innerHTML = `<p class="notification-text">${text}</p>
        <button class="btn btn-close">X</button>`;
    notifications.append(notificationElement);

    setInterval(() => {
        notificationElement.remove();
    }, time);
}
