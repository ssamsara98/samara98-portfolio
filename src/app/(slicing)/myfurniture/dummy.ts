import chair1Img from '~/assets/myfurniture/chair1.png';
import chair2Img from '~/assets/myfurniture/chair2.png';
import chair3Img from '~/assets/myfurniture/chair3.png';
import lampImg from '~/assets/myfurniture/lamp.png';
import sofaImg from '~/assets/myfurniture/sofa.png';
import tableImg from '~/assets/myfurniture/table.png';
import blogImg from '~/assets/myfurniture/blog.png';

export const services = [
  {
    image: chair1Img,
    type: 'Minimal Design',
    category: 'Classic Softchair',
  },
  {
    image: chair2Img,
    type: 'Modern Design',
    category: 'Elegant Simplechair',
  },
  {
    image: chair3Img,
    type: 'Modern Design',
    category: 'Comfort Chair',
  },
];

export const categories = [
  {
    image: chair1Img,
    name: 'Chair',
    totalProduct: 30,
  },
  {
    image: sofaImg,
    name: 'Sofa',
    totalProduct: 30,
  },
  {
    image: lampImg,
    name: 'Lamp',
    totalProduct: 30,
  },
  {
    image: tableImg,
    name: 'Desk',
    totalProduct: 30,
  },
  {
    image: chair1Img,
    name: 'Chair',
    totalProduct: 30,
  },
  {
    image: sofaImg,
    name: 'Sofa',
    totalProduct: 30,
  },
  {
    image: lampImg,
    name: 'Lamp',
    totalProduct: 30,
  },
  {
    image: tableImg,
    name: 'Desk',
    totalProduct: 30,
  },
];

export const arrivalProducts = [
  {
    image: chair2Img,
    name: 'Chair Minimalist',
    rating: 5,
    totalReview: '19k',
    price: '$600.00',
  },
  {
    image: chair2Img,
    name: 'Chair Minimalist',
    rating: 5,
    totalReview: '19k',
    price: '$600.00',
  },
  {
    image: chair2Img,
    name: 'Chair Minimalist',
    rating: 5,
    totalReview: '19k',
    price: '$600.00',
  },
  {
    image: chair2Img,
    name: 'Chair Minimalist',
    rating: 5,
    totalReview: '19k',
    price: '$600.00',
  },
  {
    image: chair2Img,
    name: 'Chair Minimalist',
    rating: 5,
    totalReview: '19k',
    price: '$600.00',
  },
  {
    image: chair2Img,
    name: 'Chair Minimalist',
    rating: 5,
    totalReview: '19k',
    price: '$600.00',
  },
  {
    image: chair2Img,
    name: 'Chair Minimalist',
    rating: 5,
    totalReview: '19k',
    price: '$600.00',
  },
  {
    image: chair2Img,
    name: 'Chair Minimalist',
    rating: 5,
    totalReview: '19k',
    price: '$600.00',
  },
  {
    image: chair2Img,
    name: 'Chair Minimalist',
    rating: 5,
    totalReview: '19k',
    price: '$600.00',
  },
  {
    image: chair2Img,
    name: 'Chair Minimalist',
    rating: 5,
    totalReview: '19k',
    price: '$600.00',
  },
];

export const hotDeals = [
  {
    image: chair3Img,
    name: 'Sofa Premium Comfort',
    normalPrice: '$700.00',
    discountedPrice: '$500.00',
  },
  {
    image: chair3Img,
    name: 'Sofa Premium Comfort',
    normalPrice: '$700.00',
    discountedPrice: '$500.00',
  },
];

export const blogs = [...new Array(10)].map(
  () =>
    // [...new Array(4)].map(() =>
    ({
      title: 'How To Make A Room Look Neat',
      date: '22 November 2021',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.....',
      image: blogImg,
    }),
  // ),
);

export const links = [
  {
    title: 'Services',
    contents: ['House Plant', 'Garden Plant', 'Vase', 'House Plant'],
  },
  {
    title: 'Information',
    contents: ['Office Hours', 'Requirements', 'About us'],
  },
  {
    title: 'Helpfull Link',
    contents: ['Service', 'Support', 'Terms & Condition', 'Privacy Policy'],
  },
  {
    title: 'Address',
    contents: ['Jl Gatot Subroto\nNo. 123 Blok. A23\nMalang, Jawa Timur'],
  },
];
