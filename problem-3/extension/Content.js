//reverse function
function reverseString(str) {
	var splitString = str.split("");
	
	var reverseArray = splitString.reverse();
	
	var joinArray = reverseArray.join("");
	
	return joinArray;
}

//array of images
let elephantImages = [
    "https://media.istockphoto.com/photos/mother-and-baby-picture-id154345663?k=20&m=154345663&s=612x612&w=0&h=PuNoUgGSbIhPafzqUvKplLozB0vmmy_-e8g9KgAMa1o=",
    "https://media.istockphoto.com/photos/african-elephant-loxodonta-africana-calf-masai-mara-park-in-kenya-picture-id1262780463?k=20&m=1262780463&s=612x612&w=0&h=IAG7qNpUfLN3XB7mmOgSWhLYrpENUCGEBuUhmGW-RIE=",
    "https://media.istockphoto.com/photos/elephant-splashing-with-water-picture-id154192102?k=20&m=154192102&s=612x612&w=0&h=LXTlmCUjhI9ArdXuGAo_TmN-zL0YEv9s98c4OkPzGY4=",
    "https://media.istockphoto.com/photos/two-young-elephants-picture-id1329486568?k=20&m=1329486568&s=612x612&w=0&h=VYvbKZAHBYdLl_F6ZxgbLXfEoBJwtRawzZWlVUJn21Y=",
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * elephantImages.length)
    imgs[i].src = elephantImages[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "I love elephants!";
	headers[i].style.fontFamily = 'Courier New';
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This website is now about elephants.";
}
//reverses the button text
const button = document.getElementsByTagName("button");
for (let i = 0; i < button.length; i++){
	button[i].innerText = reverseString(button[i].innerText);
}
//changes the background colour of div
const div = document.getElementsByTagName("div");
for (let i = 0; i < div.length; i++){
	div[i].style.backgroundColor = '#ff69b4';
}
//changes the style of the text in the footer
const footer = document.getElementsByTagName("footer");
for (let i = 0; i < footer.length; i++) {
	footer[i].style.fontFamily = 'Brush Script MT';
}

