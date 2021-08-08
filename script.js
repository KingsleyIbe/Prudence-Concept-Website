// let imagePosition = 0;
// const images =document.getElementsByClassName('carousel-image');
// const allImage = images.length;

// document.
//     getElementById('carousel-button--next')
//     .addEventListener("click", function(){
//         moveToNextImage();
//     });

// document.
//     getElementById('carousel-button--prev')
//     .addEventListener("click", function(){
//         moveToPrevImage();
//     });

//     function updateImagePosition(){
//         for (let image of images){
//         image.classList.remove('carousel-image--visible');
//         image.classList.add('carousel-image--hidden');
//         }
//         images[imagePosition].classList.add('carousel-image--visible');
//     }

// function moveToNextImage(){

//     if (imagePosition == allImage-1){
//         imagePosition=0;
//     }
//     else{
//         imagePosition++;
//     }
//     updateImagePosition();
// }

// function moveToPrevImage(){

//     if (imagePosition == 0){
//         imagePosition= allImage - 1;
//     }
//     else{
//         imagePosition--;
//     }  
//     updateImagePosition();
// }

var quotes = [
    '\"Photography is the story I fail to put into words.\" – Destin Sparks',
    '\"When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.\"  – Ansel Adams',
    '\"When I photograph I make love.\” – Alfred Stieglitz',
    '\"The negative is the equivalent of the composer’s score and the print the performance.\” – Ansel Adams',
    '\"There is one thing the photo must contain – the humanity of the moment.\” – Robert Frank',
    '\"Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.\” – Aaron Siskind',
    '\"If you are out there shooting, things will happen for you. If you’re not out there, you’ll only hear about it.\” –  Jay Maisel',
    '\"If you are out there shooting, things will happen for you. If you’re not out there, you’ll only hear about it.\” – Jay Maisel',
    '\"When you photograph people in color, you photograph their clothes. But when you photograph people in Black and white, you photograph their souls!\”'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementsByClassName('displayQuote').innerHTML = quotes[randomNumber];

}