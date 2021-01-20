
import Header from "../src/parts/header";
import Carousel from "../src/parts/carousel";
import Card from '../src/parts/card'
import Categories from '../src/parts/categories'

import Container from '../controller/container'



let header = new Header();
let categories = new Categories();



let card = new Card();
let card2 = new Card()
card.setPropeties("https://image.freepik.com/free-psd/fashion-sale-instagram-stories_23-2148822424.jpg", "New Brand"," this is new our brand, the best produk ever~",()=>alert("test"));

card2.setPropeties("https://image.freepik.com/free-psd/fashion-sale-instagram-stories_23-2148822424.jpg", "New Brand"," this is new our brand, the best produk ever~",()=>alert("test"));

let carousel = new Carousel();
carousel.setPropeties("https://i.pinimg.com/originals/00/33/9a/00339acf94ccd75fe4205c44daaa6a2a.jpg","https://lh3.googleusercontent.com/proxy/Sf0ir32Wy11pDDI8L9KmEePzMaBqlqBjVND-ozlI15P8Wz6WaE-NqXxBne3ynY80xHOmmyRkCQPZWKkPlk5wFOpAHhu2nIMzGREjvdsVTEC5ze29ib3Qj0UbPL91OBmtfw")



document.getElementById("Navbar").innerHTML = header.navbar();
// document.getElementById("carousel").innerHTML = carousel.carousel();




let container = new Container(document.getElementById("root"));
container.addComponent(carousel,categories,card,card2);
