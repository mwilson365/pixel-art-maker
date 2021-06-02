const $app = document.getElementById('pixelArt');
//the application state
let selectedColor = null;

const $pixelContainer = document.createElement('DIV')
$pixelContainer.className = 'pixel-container'
$app.appendChild($pixelContainer);

const $paletteContainer = document.createElement('DIV')
$paletteContainer.className = 'palette-container'
$app.appendChild($paletteContainer);

function handlePixelClick(event) {
    const $clickedPixel = event.target;
    if (selectedColor){
    $clickedPixel.style.backgroundColor = selectedColor;
    }
}

for (let index = 0; index < 4; index++) {
    const $pixel = document.createElement('DIV');
    $pixel.className = 'pixel';
    $pixel.addEventListener('click',handlePixelClick);
    $pixelContainer.appendChild($pixel);
}

const colors = [
    'red',
    'yellow',
    'green',
    'blue'
];
function handleColorSelect(event){
    const $paletteItem = event.target;
    selectedColor = $paletteItem.style.backgroundColor;
}

for (let i = 0; i < colors.length;  i++) {
 const $paletteItem = document.createElement('DIV');
 $paletteItem.className = 'palette-item';
 $paletteItem.style.backgroundColor = colors[i];
 $paletteItem.addEventListener('click',handleColorSelect)
 $paletteContainer.appendChild($paletteItem);
}