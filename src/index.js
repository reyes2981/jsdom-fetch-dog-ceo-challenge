const container = document.querySelector('#dog-image-container');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

function getImages() {
fetch(imgUrl)
.then(response => response.json())
.then(images => {
    const imgs = images.message;
    let imgsArray = createImgElement(imgs)
    renderImgs(imgsArray)
    })
}

function createImgElement(imgs) {
    return imgs.map((img) => {
        let i = `<img src=${img}>`;
        console.log(i);
        return i;
    })
}

function renderImgs(imgsArray) {
    imgsArray.forEach(element => {
        renderElement(element)
    })
}

function renderElement(element) {
    container.innerHTML += element;
}

getImages()