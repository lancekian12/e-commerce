import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import { customer1, customer2 } from "../assets/images";
import bigShoe1 from "../assets/images/motion_sensor.png";
import bigShoe2 from "../assets/images/motion_sensor_2.png";
import bigShoe3 from "../assets/images/motion_sensor_3.png";
import sensor2 from "../assets/images/second.png";
import sensor3 from "../assets/images/third.png";
import sensor4 from "../assets/images/fourth.png";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
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
    price: "$200.20",
  },
  {
    imgURL: sensor2,
    name: "Motion Sensor 2",
    price: "$210.20",
  },
  {
    imgURL: sensor3,
    name: "Motion Sensor 3",
    price: "$220.20",
  },
  {
    imgURL: sensor4,
    name: "Motion Sensor 4",
    price: "$230.20",
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
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
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
