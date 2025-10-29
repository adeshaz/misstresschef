import React from 'react'
import "./Home.css"
import imgpart1 from '../components/multimedia/leaf.png';
import Hero from '../components/Hero';
import imgpart3 from "../components/multimedia/vecteezy_cosmetic-cream-on-a-wooden-table-with-aloe-vera-and-blurred_43372788.jpg";
import ProductCard from '../components/ProductCard';
import imgpart4 from '../components/multimedia/vecteezy_bottle-with-pump-on-pink-background-for-personal-care-concept_65824415.jpg';
import imgpart5 from '../components/multimedia/vecteezy_aromatic-spray-bottle-with-mint-leaves-and-flowers-flat-lay_69632698.jpg'; 
import imgpart6 from '../components/multimedia/vecteezy_coconut-oil-jar-with-fresh-coconut-and-tropical-flowers_69738785.jpeg';
import imgpart7 from '../components/multimedia/vecteezy_bottle-of-green-liquid-surrounded-by-daisies_46406146.jpeg'
import imgpart8 from '../components/multimedia/vecteezy_decorative-jar-with-lid-containing-creamy-cosmetic-product_65288181.jpeg'


import imgpart40 from "../components/multimedia/turmeric-powder.jpg"
import imgpart9 from "../components/multimedia/3d-rendering-personal-care-products-fondant-pink.jpg"
import imgpart10 from "../components/multimedia/adult-woman-applying-skin-care-treatment.jpg"
import imgpart11 from "../components/multimedia/eco-avocado-cream-spa-treatment-concept.jpg"
import imgpart12 from "../components/multimedia/top-view-lemons-basket-with-white-cloth-bowl-salt-half-lemon-wooden-surface-vertical.jpg"
import imgpart13 from "../components/multimedia/istockphoto-2170136988-1024x1024.jpg"
import imgpart14 from "../components/multimedia/fresh-papaya-cut-into-half-put-dark-floor.jpg"
import imgpart15 from "../components/multimedia/close-up-bowl-filled-with-honey-table.jpg"
import imgpart16 from "../components/multimedia/close-up-elegant-beauty-selfcare-treatment.jpg"
import imgpart17 from "../components/multimedia/top-view-spa-salt-with-candles-table.jpg"
import imgpart18 from "../components/multimedia/high-angle-hand-holding-cream-container.jpg"
import imgpart19 from "../components/multimedia/face-mask-with-cucumber-slices-dark-background.jpg"
import imgpart20 from "../components/multimedia/moisturizing-cream-rocks-bath-salts.jpg"
import imgpart21 from "../components/multimedia/istockphoto-1315014822-1024x1024.jpg"
import imgpart22 from "../components/multimedia/skincare-products.jpg"
import imgpart23 from "../components/multimedia/hand-cream-tube-mockup (1).jpg"

import imgpart24 from "../components/multimedia/beautiful-young-woman-using-day-cream-home.jpg"
import imgpart25 from "../components/multimedia/arrangement-natural-argan-oil-dropper.jpg" 
import imgpart26 from "../components/multimedia/aloe-vera-cosmetic-cream-white-surface.jpg"
import imgpart27 from "../components/multimedia/hot-rose-tea-table.jpg"
import imgpart28 from "../components/multimedia/nuts-arrangement-with-copy-space.jpg"
import imgpart32 from "../components/multimedia/aloe-vera-leaves-with-beauty-cream-bottle.jpg"
import imgpart29 from '../components/multimedia/some-lemon-juice-with-half-lemon-piece-sack-basket-wooden-surface-high-angle-view-space-text.jpg';
import imgpart31 from '../components/multimedia/ecofriendly-beauty-product.jpg';

const Home = () => {
  const featuredProducts =[
   
   { id: 1, name: "Aloe Vera Face Cream", price: 5000, image: imgpart3, imgClass: "cream-img" },
  { id: 2, name: "Shea Butter Lotion", price: 4500, image: imgpart4, imgClass: "lotion-img" },
  { id: 3, name: "Green Tea Toner", price: 3500, image: imgpart5, imgClass: "toner-img" },
  { id: 4, name: "Coconut Oil Moisturizer", price: 5500, image: imgpart6, imgClass: "coconut-img" },
  { id: 5, name: "Herbal Shampoo", price: 6000, image: imgpart7, imgClass: "herbal-img" },
  { id: 6, name: "Baby Moisturizer", price: 4000, image: imgpart8, imgClass: "baby-img" },
  { id: 7, name: "Turmeric Glow Cream", price: 5200, image: imgpart40, imgClass: "turmeric-img" },
  { id: 8, name: "Rose Water Toner", price: 3000, image: imgpart9, imgClass: "rosewater-img" },
  { id: 9, name: "Charcoal Detox Mask", price: 6500, image: imgpart10, imgClass: "charcoal-img" },
  { id: 10, name: "Avocado Hair Cream", price: 4800, image: imgpart11, imgClass: "avocado-img" },
  { id: 11, name: "Lemon Face Scrub", price: 3700, image: imgpart12, imgClass: "lemon-img" },
  { id: 12, name: "Vitamin C Serum", price: 7200, image: imgpart13, imgClass: "vitamin-img" },
  { id: 13, name: "Papaya Whitening Soap", price: 2800, image: imgpart14, imgClass: "papaya-img" },
  { id: 14, name: "Honey Lip Balm", price: 1500, image: imgpart15, imgClass: "honey-img" },
  { id: 15, name: "Lavender Body Oil", price: 5300, image: imgpart16, imgClass: "lavender-img" },
  { id: 16, name: "Neem Face Wash", price: 4100, image: imgpart17, imgClass: "neem-img" },
  { id: 17, name: "Aloe Hair Gel", price: 3400, image: imgpart18, imgClass: "aloehair-img" },
  { id: 18, name: "Cucumber Eye Cream", price: 6000, image: imgpart19, imgClass: "cucumber-img" },
  { id: 19, name: "Herbal Whitening Lotion", price: 6500, image: imgpart20, imgClass: "herbalwhite-img" },
  { id: 20, name: "Tea Tree Acne Cream", price: 5700, image: imgpart21, imgClass: "teatree-img" },
  { id: 21, name: "Carrot Brightening Lotion", price: 5000, image: imgpart22, imgClass: "carrot-img" },
  { id: 22, name: "Mint Cooling Gel", price: 3800, image: imgpart23, imgClass: "mint-img" },
  { id: 23, name: "Herbal Foot Cream", price: 4200, image: imgpart24, imgClass: "footcream-img" },
  { id: 24, name: "Argan Hair Serum", price: 7200, image: imgpart25, imgClass: "argan-img" },
  { id: 25, name: "Neem & Aloe Soap", price: 2500, image: imgpart26, imgClass: "neemaloe-img" },
  { id: 26, name: "Rose Clay Mask", price: 5900, image: imgpart27, imgClass: "roseclay-img" },
  { id: 27, name: "Cocoa Butter Cream", price: 5000, image: imgpart28, imgClass: "cocoa-img" },
  { id: 28, name: "Aloe Hand Sanitizer", price: 2500, image: imgpart32, imgClass: "aloehand-img" },
  { id: 29, name: "Lemon Glow Oil", price: 4800, image: imgpart29, imgClass: "lemonglow-img" },
  { id: 30, name: "Herbal Hair Growth Oil", price: 7000, image: imgpart31, imgClass: "hairgrowth-img" },
];
  return (
    
    <div className="text-center">
      <Hero />
      <h1 className="text-success fw-bold">Welcome to MisstressChef Skincare</h1>
      <p className="lead">Your beauty, our priority <img src={imgpart1} className='leaf-img-top' alt="leaf-icon" />
       </p>
       <section className="container py-5">
         <h2 className="text-center mb-4 fw-bold">Featured Products</h2>
         <div className="row">
           {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
         ))}
       </div>
      </section>
    </div>
  )
}

export default Home



// import React from "react";
// import Hero from "../components/Hero";
// import ProductCard from "../components/ProductCard";

// import img1 from "../assets/product1.jpg";
// import img2 from "../assets/product2.jpg";
// import img3 from "../assets/product3.jpg";
// import img4 from "../assets/product4.jpg";

// const Home = () => {
//   const featuredProducts = [
//     { id: 1, name: "Aloe Vera Face Cream", price: 5000, image: img1 },
//     { id: 2, name: "Green Tea Toner", price: 3500, image: img2 },
//     { id: 3, name: "Shea Butter Lotion", price: 4500, image: img3 },
//     { id: 4, name: "Vitamin C Serum", price: 8000, image: img4 },
//   ];

//   return (
//     <div>
//       <Hero />

//       <section className="container py-5">
//         <h2 className="text-center mb-4 fw-bold">Featured Products</h2>
//         <div className="row">
//           {featuredProducts.map((product) => (
//             <ProductCard key={product.id} {...product} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
