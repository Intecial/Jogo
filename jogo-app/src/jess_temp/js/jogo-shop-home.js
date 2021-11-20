const productContainers = [...document.querySelectorAll('.product-container')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const postBtn = [...document.querySelectorAll('.post-btn')];

productContainers.forEach((item,i)=> {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    postBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })

})