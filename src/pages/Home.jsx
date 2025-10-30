import React from 'react'
import "./Home.css"

import Hero from '../components/Hero';

import ProductCard from '../components/ProductCard';


const Home = () => {
  const featuredProducts = [

    { id: 1, name: "Aloe Vera Face Cream", price: 5000, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761812129/vecteezy_cosmetic-cream-on-a-wooden-table-with-aloe-vera-and-blurred_43372788_doioi3.jpg", imgClass: "cream-img" },
    { id: 2, name: "Shea Butter Lotion", price: 4500, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761812458/vecteezy_bottle-with-pump-on-pink-background-for-personal-care-concept_65824415_hsxqxc.jpg", imgClass: "lotion-img" },
    { id: 3, name: "Green Tea Toner", price: 3500, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761803807/vecteezy_aromatic-spray-bottle-with-mint-leaves-and-flowers-flat-lay_69632698_pvmiig.jpg", imgClass: "toner-img" },
    { id: 4, name: "Coconut Oil Moisturizer", price: 5500, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761812444/vecteezy_coconut-oil-jar-with-fresh-coconut-and-tropical-flowers_69738785_gvtzuj.jpg", imgClass: "coconut-img" },
    { id: 5, name: "Herbal Shampoo", price: 6000, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761812789/istockphoto-1320934166-1024x1024_qz1k2e.jpg", imgClass: "herbal-img" },
    { id: 6, name: "Baby Moisturizer", price: 4000, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761804429/vecteezy_decorative-jar-with-lid-containing-creamy-cosmetic-product_65288181_fdtxey.jpg", imgClass: "baby-img" },
    { id: 7, name: "Turmeric Glow Cream", price: 5200, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761803237/turmeric-powder_ya3a8j.jpg", imgClass: "turmeric-img" },
    { id: 8, name: "Rose Water Toner", price: 3000, image: 'https://res.cloudinary.com/dlnylsx6r/image/upload/v1761751394/3d-rendering-personal-care-products-fondant-pink_gthjz4.jpg', imgClass: "rosewater-img" },
    { id: 9, name: "Charcoal Detox Mask", price: 6500, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761751847/adult-woman-applying-skin-care-treatment_oebplp.jpg", imgClass: "charcoal-img" },
    { id: 10, name: "Avocado Hair Cream", price: 4800, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761812924/istockphoto-960327142-1024x1024_tmuj5m.jpg", imgClass: "avocado-img" },
    { id: 11, name: "Lemon Face Scrub", price: 3700, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761776424/eco-avocado-cream-spa-treatment-concept_zmutdw.jpg", imgClass: "lemon-img" },
    { id: 12, name: "Vitamin C Serum", price: 7200, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761801792/istockphoto-2170136988-1024x1024_ltxfcu.jpg", imgClass: "vitamin-img" },
    { id: 13, name: "Papaya Whitening Soap", price: 2800, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761813097/istockphoto-1317246845-1024x1024_vhn2pp.jpg", imgClass: "papaya-img" },
    { id: 14, name: "Honey Lip Balm", price: 1500, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761813252/istockphoto-1363904728-1024x1024_qslmcc.jpg", imgClass: "honey-img" },
    { id: 15, name: "Lavender Body Oil", price: 5300, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761754756/close-up-elegant-beauty-selfcare-treatment_f9dwkx.jpg", imgClass: "lavender-img" },
    { id: 16, name: "Neem Face Wash", price: 4100, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761813412/istockphoto-915318694-1024x1024_j2jc2r.jpg", imgClass: "neem-img" },
    { id: 17, name: "Aloe Hair Gel", price: 3400, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761777645/high-angle-hand-holding-cream-container_ypw97v.jpg", imgClass: "aloehair-img" },
    { id: 18, name: "Cucumber Eye Cream", price: 6000, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761777027/face-mask-with-cucumber-slices-dark-background_dazc6f.jpg", imgClass: "cucumber-img" },
    { id: 19, name: "Herbal Whitening Lotion", price: 6500, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761802140/moisturizing-cream-rocks-bath-salts_veqsup.jpg", imgClass: "herbalwhite-img" },
    { id: 20, name: "Tea Tree Acne Cream", price: 5700, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761801669/istockphoto-1315014822-1024x1024_z2kudh.jpg", imgClass: "teatree-img" },
    { id: 21, name: "Carrot Brightening Lotion", price: 5000, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761802445/skincare-products_klrp9o.jpg", imgClass: "carrot-img" },
    { id: 22, name: "Mint Cooling Gel", price: 3800, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761777437/hand-cream-tube-mockup_1_rjdtya.jpg", imgClass: "mint-img" },
    { id: 23, name: "Herbal Foot Cream", price: 4200, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761753414/beautiful-young-woman-using-day-cream-home_vabssk.jpg", imgClass: "footcream-img" },
    { id: 24, name: "Argan Hair Serum", price: 7200, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761753246/arrangement-natural-argan-oil-dropper_u9newh.jpg", imgClass: "argan-img" },
    { id: 25, name: "Neem & Aloe Soap", price: 2500, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761752584/aloe-vera-cosmetic-cream-white-surface_cghnro.jpg", imgClass: "neemaloe-img" },
    { id: 26, name: "Rose Clay Mask", price: 5900, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761801240/hot-rose-tea-table_cdxmbr.jpg", imgClass: "roseclay-img" },
    { id: 27, name: "Cocoa Butter Cream", price: 5000, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761802386/nuts-arrangement-with-copy-space_dgmzeh.jpg", imgClass: "cocoa-img" },
    { id: 28, name: "Aloe Hand Sanitizer", price: 2500, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761753035/aloe-vera-leaves-with-beauty-cream-bottle_pewhir.jpg", imgClass: "aloehand-img" },
    { id: 29, name: "Lemon Glow Oil", price: 4800, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761813586/istockphoto-1264245297-1024x1024_jtuolr.jpg", imgClass: "lemonglow-img" },
    { id: 30, name: "Herbal Hair Growth Oil", price: 7000, image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761813721/istockphoto-2236129538-1024x1024_qkrfe7.jpg", imgClass: "hairgrowth-img" },
  ];
  return (

    <div className="text-center">
      <Hero />
      <h1 className="text-success fw-bold">Welcome to MisstressChef Skincare</h1>
      <p className="lead">Your beauty, our priority <img src={"https://res.cloudinary.com/dlnylsx6r/image/upload/v1761801883/leaf_aq6y0m.png"} className='leaf-img-top' alt="leaf-icon" />
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
