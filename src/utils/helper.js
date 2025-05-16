import IPhone from '../assets/images/iohone.jpeg'
import Sumsung from '../assets/images/samsung.jpeg'
import OnePlus from '../assets/images/images.jpeg'


export const products = [
    {
        id: 1,
        img :IPhone,
        name:
            "iPhone 15",
        price: "$999",
        description: "Apple's latest phone"
    },
    {
        id: 2,
        img: Sumsung,

        name: "Samsung Galaxy S24",
        price: "$899",
        description: "High-end Android phone"
    },
    {
        id: 3,
        img: OnePlus,

        name: "OnePlus 12",
        price: "$699",
        description: "Flagship killer phone"
    },
];
  
export const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Product', path: '/product' },
    { name: 'Contact', path: '/contact' },
];
// Aisa routing system jo apne aap network ya website ke routes ko badalta rahe, jab bhi network ya data ke conditions change ho.

