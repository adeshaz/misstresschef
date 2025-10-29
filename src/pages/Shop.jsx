import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import imgpart3 from "../components/multimedia/vecteezy_cosmetic-cream-on-a-wooden-table-with-aloe-vera-and-blurred_43372788.jpg";
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
const Shop = () => {
  // const allProducts = [
  //  { id: 1, name: "Aloe Vera Face Cream", price: 5000,category: "Skincare", image: imgpart3,imgClass: "cream-img" },
  //      { id: 2, name: "Shea Butter Lotion", price: 4500,category: "Body", image: imgpart4,imgClass: "lotion-img"  },
  //      { id: 3, name: "Green Tea Toner", price: 3500,category: "Skincare", image: imgpart5,imgClass: "toner-img"  },
  //      {id: 4, name: "Coconut Oil Moisturizer", price: 5500,category: "Body", image: imgpart6,imgClass: "coconut-img" },
  //   { id: 5, name: "Herbal Shampoo", price: 6000, category: "Haircare", image: imgpart7,imgClass:"herbal-img" },
  //   { id: 6, name: "Baby Moisturizer", price: 4000, category: "Baby & Mom", image: imgpart8,imgClass:"baby-img" },
  // ];
  const allProducts = [
  // 🌿 Skincare
  { id: 1, name: "Aloe Vera Face Cream", price: 5000, category: "Skincare", image: imgpart3, imgClass: "cream-img" },
  { id: 3, name: "Green Tea Toner", price: 3500, category: "Skincare", image: imgpart5, imgClass: "toner-img" },
  { id: 7, name: "Turmeric Glow Cream", price: 5200, category: "Skincare", image: imgpart40, imgClass: "turmeric-img" },
  { id: 8, name: "Rose Water Toner", price: 3000, category: "Skincare", image: imgpart9, imgClass: "rosewater-img" },
  { id: 9, name: "Charcoal Detox Mask", price: 6500, category: "Skincare", image: imgpart10, imgClass: "charcoal-img" },
  { id: 11, name: "Lemon Face Scrub", price: 3700, category: "Skincare", image: imgpart12, imgClass: "lemon-img" },
  { id: 12, name: "Vitamin C Serum", price: 7200, category: "Skincare", image: imgpart13, imgClass: "vitamin-img" },
  { id: 16, name: "Neem Face Wash", price: 4100, category: "Skincare", image: imgpart17, imgClass: "neem-img" },
  { id: 18, name: "Cucumber Eye Cream", price: 6000, category: "Skincare", image: imgpart19, imgClass: "cucumber-img" },
  { id: 20, name: "Tea Tree Acne Cream", price: 5700, category: "Skincare", image: imgpart21, imgClass: "teatree-img" },
  { id: 26, name: "Rose Clay Mask", price: 5900, category: "Skincare", image: imgpart27, imgClass: "roseclay-img" },
  { id: 25, name: "Neem & Aloe Soap", price: 2500, category: "Skincare", image: imgpart26, imgClass: "neemaloe-img" },

  // 🧴 Body
  { id: 2, name: "Shea Butter Lotion", price: 4500, category: "Body", image: imgpart4, imgClass: "lotion-img" },
  { id: 4, name: "Coconut Oil Moisturizer", price: 5500, category: "Body", image: imgpart6, imgClass: "coconut-img" },
  { id: 13, name: "Papaya Whitening Soap", price: 2800, category: "Body", image: imgpart14, imgClass: "papaya-img" },
  { id: 14, name: "Honey Lip Balm", price: 1500, category: "Body", image: imgpart15, imgClass: "honey-img" },
  { id: 15, name: "Lavender Body Oil", price: 5300, category: "Body", image: imgpart16, imgClass: "lavender-img" },
  { id: 19, name: "Herbal Whitening Lotion", price: 6500, category: "Body", image: imgpart20, imgClass: "herbalwhite-img" },
  { id: 21, name: "Carrot Brightening Lotion", price: 5000, category: "Body", image: imgpart22, imgClass: "carrot-img" },
  { id: 22, name: "Mint Cooling Gel", price: 3800, category: "Body", image: imgpart23, imgClass: "mint-img" },
  { id: 23, name: "Herbal Foot Cream", price: 4200, category: "Body", image: imgpart24, imgClass: "footcream-img" },
  { id: 27, name: "Cocoa Butter Cream", price: 5000, category: "Body", image: imgpart28, imgClass: "cocoa-img" },
  { id: 29, name: "Lemon Glow Oil", price: 4800, category: "Body", image: imgpart29, imgClass: "lemonglow-img" },
  { id: 28, name: "Aloe Hand Sanitizer", price: 2500, category: "Body", image: imgpart32, imgClass: "aloehand-img" },

  // 💆‍♀️ Haircare
  { id: 5, name: "Herbal Shampoo", price: 6000, category: "Haircare", image: imgpart7, imgClass: "herbal-img" },
  { id: 10, name: "Avocado Hair Cream", price: 4800, category: "Haircare", image: imgpart11, imgClass: "avocado-img" },
  { id: 17, name: "Aloe Hair Gel", price: 3400, category: "Haircare", image: imgpart18, imgClass: "aloehair-img" },
  { id: 24, name: "Argan Hair Serum", price: 7200, category: "Haircare", image: imgpart25, imgClass: "argan-img" },
  { id: 30, name: "Herbal Hair Growth Oil", price: 7000, category: "Haircare", image: imgpart31, imgClass: "hairgrowth-img" },

  // 👶 Baby & Mom
  { id: 6, name: "Baby Moisturizer", price: 4000, category: "Baby & Mom", image: imgpart8, imgClass: "baby-img" },
];


  const [products, setProducts] = useState(allProducts);
  const [category, setCategory] = useState("All");

  const filterByCategory = (cat) => {
    setCategory(cat);
    if (cat === "All") {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter((item) => item.category === cat));
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">Shop Our Products</h2>

      <div className="text-center mb-4">
        {["All", "Skincare", "Body", "Haircare", "Baby & Mom"].map((cat) => (
          <button
            key={cat}
            className={`btn me-2 mb-2 ${
              category === cat ? "btn-success text-white" : "btn-outline-success"
            }`}
            onClick={() => filterByCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <p className="text-center">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
