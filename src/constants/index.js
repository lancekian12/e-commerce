import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import bigShoe1 from "../assets/images/motion_sensor.png";
import bigShoe2 from "../assets/images/motion_sensor_2.png";
import bigShoe3 from "../assets/images/motion_sensor_3.png";
import sensor2 from "../assets/images/second.png";
import sensor3 from "../assets/images/third.png";
import sensor4 from "../assets/images/fourth.png";
import lancekian from "../assets/images/lancekian.jpg";
import sarlito from "../assets/images/sarlito.jpg";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about-us", label: "Quality" },
  { href: "#service", label: "Features" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: bigShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: bigShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: bigShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: bigShoe1,
    name: "Motion Sensor 1",
  },
  {
    imgURL: sensor2,
    name: "Motion Sensor 2",
  },
  {
    imgURL: sensor3,
    name: "Motion Sensor 3",
  },
  {
    imgURL: sensor4,
    name: "Motion Sensor 4",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: lancekian,
    customerName: "Lance Kian Flores",
    rating: 4.5,
    feedback: "Sobrang galing ng pagkabit at quality talaga ang motion sensor",
  },
  {
    imgURL: sarlito,
    customerName: "Sarlito Tayag",
    rating: 4.5,
    feedback:
      "One of the best quality na motion sensor na nabili ko at sobrang bait ng nagkakabit at pogi pa ",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Motion Sensor 1", link: "/" },
      { name: "Motion Sensor 2", link: "/" },
      { name: "Smart Motion Sensor", link: "/" },
      { name: "Wireless Motion Sensor", link: "/" },
      { name: "Advanced Motion Sensor", link: "/" },
      { name: "Motion Detection System", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        name: "kimdc246@gmail.com",
        link: "mailto:kimdc246@gmail.com",
      },
      { name: "09628781583", link: "tel:09628781583" },
    ],
  },
];

export const socialMedia = [
  {
    src: facebook,
    alt: "facebook logo",
    link: "https://www.facebook.com/kimdaniel11",
  },
  {
    src: twitter,
    alt: "twitter logo",
    link: "https://www.twitter.com/yourprofile",
  },
  {
    src: instagram,
    alt: "instagram logo",
    link: "https://www.instagram.com/kimdanyel/",
  },
];
