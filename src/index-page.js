import Heading from "./components/heading/heading.js";
import Greet from "./components/hello-word-button/hello-world.js";


Heading();
let helloButtoon = new Greet();
helloButtoon.buttonHello();

if (process.env.NODE_ENV === 'production') {
    console.log('production Mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('development Mode')
}


