import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./ProductDetails.css";

import imgpart3 from "../components/multimedia/vecteezy_cosmetic-cream-on-a-wooden-table-with-aloe-vera-and-blurred_43372788.jpg";
import imgpart4 from "../components/multimedia/vecteezy_bottle-with-pump-on-pink-background-for-personal-care-concept_65824415.jpg";
import imgpart5 from "../components/multimedia/vecteezy_aromatic-spray-bottle-with-mint-leaves-and-flowers-flat-lay_69632698.jpg";
import imgpart6 from "../components/multimedia/vecteezy_coconut-oil-jar-with-fresh-coconut-and-tropical-flowers_69738785.jpeg";
import imgpart7 from "../components/multimedia/vecteezy_bottle-of-green-liquid-surrounded-by-daisies_46406146.jpeg";
import imgpart8 from "../components/multimedia/vecteezy_decorative-jar-with-lid-containing-creamy-cosmetic-product_65288181.jpeg";

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
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const products = [
  //   { id: 1, name: "Aloe Vera Face Cream", price: 5000, image: imgpart3 },
  //   { id: 2, name: "Shea Butter Lotion", price: 4500, image: imgpart4 },
  //   { id: 3, name: "Green Tea Toner", price: 3500, image: imgpart5 },
  //   { id: 4, name: "Coconut Oil Moisturizer", price: 5500, image: imgpart6 },
  //   { id: 5, name: "Herbal Shampoo", price: 6000, image: imgpart7 },
  //   { id: 6, name: "Baby Moisturizer", price: 4000, image: imgpart8 },
  // ];

  const products = [
  {
    id: 1,
    name: "Aloe Vera Face Cream",
    price: 5000,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761812129/vecteezy_cosmetic-cream-on-a-wooden-table-with-aloe-vera-and-blurred_43372788_doioi3.jpg" ,
    description: "Deeply hydrates and soothes sensitive skin, reducing redness and dryness.",
    suitableFor: "All skin types, including sensitive skin",
    effects: "Moisturizing, soothing, and cooling effect.",
    usage: "Ideal for daily use, especially after sun exposure.",
    ageGroup: "13 years and above",
  },
  {
    id: 2,
    name: "Shea Butter Lotion",
    price: 4500,
    image:  "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761812458/vecteezy_bottle-with-pump-on-pink-background-for-personal-care-concept_65824415_hsxqxc.jpg",
    description: "Rich in vitamins A and E, it nourishes and protects dry skin.",
    suitableFor: "Pregnant women, dry and rough skin users",
    effects: "Softens, smoothens, and evens skin tone.",
    usage: "Use after bath for long-lasting moisture.",
    ageGroup: "All ages",
  },
  {
    id: 3,
    name: "Green Tea Toner",
    price: 3500,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761803807/vecteezy_aromatic-spray-bottle-with-mint-leaves-and-flowers-flat-lay_69632698_pvmiig.jpg",
    description: "Cleanses pores and removes excess oil while maintaining skin balance.",
    suitableFor: "Oily and acne-prone skin",
    effects: "Tightens pores, reduces acne, and refreshes skin.",
    usage: "Apply with cotton after cleansing.",
    ageGroup: "15 years and above",
  },
  {
    id: 4,
    name: "Coconut Oil Moisturizer",
    price: 5500,
    image:"https://res.cloudinary.com/dlnylsx6r/image/upload/v1761812444/vecteezy_coconut-oil-jar-with-fresh-coconut-and-tropical-flowers_69738785_gvtzuj.jpg",
    description: "Natural coconut oil formula for deep hydration and glow.",
    suitableFor: "All skin types",
    effects: "Softens, protects, and enhances skin glow.",
    usage: "Massage on damp skin after shower.",
    ageGroup: "All ages",
  },
  {
    id: 5,
    name: "Herbal Shampoo",
    price: 6000,
    image:"https://res.cloudinary.com/dlnylsx6r/image/upload/v1761812789/istockphoto-1320934166-1024x1024_qz1k2e.jpg",
    description: "Made from natural herbs that strengthen hair roots.",
    suitableFor: "All hair types",
    effects: "Reduces dandruff, prevents hair breakage.",
    usage: "Apply on wet hair, lather, and rinse thoroughly.",
    ageGroup: "10 years and above",
  },
  {
    id: 6,
    name: "Baby Moisturizer",
    price: 4000,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761804429/vecteezy_decorative-jar-with-lid-containing-creamy-cosmetic-product_65288181_fdtxey.jpg",
    description: "Gentle baby formula with natural oils and aloe for soft baby skin.",
    suitableFor: "Babies and toddlers",
    effects: "Prevents dryness and keeps baby’s skin smooth.",
    usage: "Apply after baby’s bath.",
    ageGroup: "0–3 years",
  },

{
    id: 7,
    name: "Turmeric Glow Cream",
    price: 5200,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761803237/turmeric-powder_ya3a8j.jpg",
    description: "Brightening cream infused with turmeric and honey to enhance natural glow.",
    effects: "Reduces dark spots and blemishes.",
    suitableFor: "All skin tones.",
    usage: "Apply twice daily for even tone.",
    ageGroup: "15 years and above",
  },
  {
    id: 8,
    name: "Rose Water Toner",
    price: 3000,
    image:'https://res.cloudinary.com/dlnylsx6r/image/upload/v1761751394/3d-rendering-personal-care-products-fondant-pink_gthjz4.jpg',
    description: "Refreshing rose water that balances skin pH and hydrates instantly.",
    effects: "Adds glow, tightens pores.",
    suitableFor: "All skin types.",
    usage: "Spray or apply after cleansing.",
    ageGroup: "All ages",
  },
  {
    id: 9,
    name: "Charcoal Detox Mask",
    price: 6500,
    image:"https://res.cloudinary.com/dlnylsx6r/image/upload/v1761751847/adult-woman-applying-skin-care-treatment_oebplp.jpg",
    description: "Detoxifying face mask with activated charcoal that removes dirt and oil.",
    effects: "Clears blackheads and purifies pores.",
    suitableFor: "Oily and combination skin.",
    usage: "Use 2–3 times a week.",
    ageGroup: "16 years and above",
  },
  {
    id: 10,
    name: "Avocado Hair Cream",
    price: 4800,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761812924/istockphoto-960327142-1024x1024_tmuj5m.jpg",
    description: "Avocado oil formula that nourishes dry hair and restores shine.",
    effects: "Moisturizes scalp and softens strands.",
    suitableFor: "Dry and brittle hair.",
    usage: "Apply to damp hair before styling.",
    ageGroup: "10 years and above",
  },
  {
    id: 11,
    name: "Lemon Face Scrub",
    price: 3700,
    image:"https://res.cloudinary.com/dlnylsx6r/image/upload/v1761776424/eco-avocado-cream-spa-treatment-concept_zmutdw.jpg",
    description: "Mild scrub with lemon extract for brighter and clearer skin.",
    effects: "Removes dead cells and fades dark spots.",
    suitableFor: "Normal to oily skin.",
    usage: "Use 2–3 times weekly.",
    ageGroup: "15 years and above",
  },
  {
    id: 12,
    name: "Vitamin C Serum",
    price: 7200,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761801792/istockphoto-2170136988-1024x1024_ltxfcu.jpg",
    description: "Antioxidant serum that fights dullness and promotes collagen production.",
    effects: "Brightens and firms skin.",
    suitableFor: "All skin types.",
    usage: "Apply after cleansing, before moisturizer.",
    ageGroup: "18 years and above",
  },
  {
    id: 13,
    name: "Papaya Whitening Soap",
    price: 2800,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761813097/istockphoto-1317246845-1024x1024_vhn2pp.jpg",
    description: "Natural soap with papaya enzymes for clearer and brighter skin.",
    effects: "Lightens dark areas and removes blemishes.",
    suitableFor: "All skin types.",
    usage: "Use morning and night.",
    ageGroup: "13 years and above",
  },
  {
    id: 14,
    name: "Honey Lip Balm",
    price: 1500,
    image:"https://res.cloudinary.com/dlnylsx6r/image/upload/v1761813252/istockphoto-1363904728-1024x1024_qslmcc.jpg",
    description: "Organic honey lip balm that nourishes and prevents cracks.",
    effects: "Smooth, soft, and hydrated lips.",
    suitableFor: "All ages.",
    usage: "Apply when lips feel dry.",
    ageGroup: "All ages",
  },
  {
    id: 15,
    name: "Lavender Body Oil",
    price: 5300,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761754756/close-up-elegant-beauty-selfcare-treatment_f9dwkx.jpg",
    description: "Relaxing lavender oil that moisturizes and calms the body.",
    effects: "Improves sleep and skin texture.",
    suitableFor: "Dry and normal skin.",
    usage: "Apply after bath or before bed.",
    ageGroup: "10 years and above",
  },
  {
    id: 16,
    name: "Neem Face Wash",
    price: 4100,
    image:"https://res.cloudinary.com/dlnylsx6r/image/upload/v1761813412/istockphoto-915318694-1024x1024_j2jc2r.jpg",
    description: "Purifying cleanser with neem extract that clears acne and dirt.",
    effects: "Prevents pimples and keeps skin clean.",
    suitableFor: "Oily and acne-prone skin.",
    usage: "Use twice daily.",
    ageGroup: "14 years and above",
  },
  {
    id: 17,
    name: "Aloe Hair Gel",
    price: 3400,
    image:"https://res.cloudinary.com/dlnylsx6r/image/upload/v1761777645/high-angle-hand-holding-cream-container_ypw97v.jpg",
    description: "Non-sticky aloe gel that nourishes scalp and strengthens hair.",
    effects: "Adds shine and prevents dryness.",
    suitableFor: "All hair types.",
    usage: "Apply evenly to scalp and hair.",
    ageGroup: "All ages",
  },
  {
    id: 18,
    name: "Cucumber Eye Cream",
    price: 6000,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761777027/face-mask-with-cucumber-slices-dark-background_dazc6f.jpg",
    description: "Cooling eye cream that reduces puffiness and dark circles.",
    effects: "Brightens under eyes and refreshes look.",
    suitableFor: "Adults with tired eyes.",
    usage: "Apply gently under eyes at night.",
    ageGroup: "18 years and above",
  },
  {
    id: 19,
    name: "Herbal Whitening Lotion",
    price: 6500,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761802140/moisturizing-cream-rocks-bath-salts_veqsup.jpg",
    description: "Blend of natural herbs and milk proteins for radiant skin.",
    effects: "Lightens dark patches and improves tone.",
    suitableFor: "All skin tones.",
    usage: "Apply twice daily.",
    ageGroup: "13 years and above",
  },
  {
    id: 20,
    name: "Tea Tree Acne Cream",
    price: 5700,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761801669/istockphoto-1315014822-1024x1024_z2kudh.jpg",
    description: "Anti-acne cream with tea tree oil and salicylic acid.",
    effects: "Clears pimples and prevents new breakouts.",
    suitableFor: "Acne-prone skin.",
    usage: "Apply on affected area twice daily.",
    ageGroup: "15 years and above",
  },
  {
    id: 21,
    name: "Carrot Brightening Lotion",
    price: 5000,
    image:  "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761802445/skincare-products_klrp9o.jpg",
    description: "Rich in carrot oil and vitamins to rejuvenate dull skin.",
    effects: "Improves glow and tone.",
    suitableFor: "Normal to dry skin.",
    usage: "Use daily for radiant results.",
    ageGroup: "13 years and above",
  },
  {
    id: 22,
    name: "Mint Cooling Gel",
    price: 3800,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761777437/hand-cream-tube-mockup_1_rjdtya.jpg",
    description: "Soothing mint gel that cools sunburned skin.",
    effects: "Relieves heat and redness.",
    suitableFor: "All skin types.",
    usage: "Apply after sun exposure.",
    ageGroup: "All ages",
  },
  {
    id: 23,
    name: "Herbal Foot Cream",
    price: 4200,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761753414/beautiful-young-woman-using-day-cream-home_vabssk.jpg",
    description: "Cream infused with mint and neem to heal cracked heels.",
    effects: "Softens rough feet.",
    suitableFor: "Adults with dry or cracked feet.",
    usage: "Apply at night and wear socks.",
    ageGroup: "16 years and above",
  },
  {
    id: 24,
    name: "Argan Hair Serum",
    price: 7200,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761753246/arrangement-natural-argan-oil-dropper_u9newh.jpg",
    description: "Lightweight serum with Moroccan argan oil for frizz control.",
    effects: "Adds shine and smoothness.",
    suitableFor: "All hair types.",
    usage: "Apply to damp hair ends.",
    ageGroup: "10 years and above",
  },
  {
    id: 25,
    name: "Neem & Aloe Soap",
    price: 2500,
    image:"https://res.cloudinary.com/dlnylsx6r/image/upload/v1761752584/aloe-vera-cosmetic-cream-white-surface_cghnro.jpg" ,
    description: "Herbal soap with neem and aloe vera for healthy skin.",
    effects: "Prevents acne and rashes.",
    suitableFor: "Oily and sensitive skin.",
    usage: "Use morning and night.",
    ageGroup: "All ages",
  },
  {
    id: 26,
    name: "Rose Clay Mask",
    price: 5900,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761801240/hot-rose-tea-table_cdxmbr.jpg",
    description: "Clay mask enriched with rose and kaolin clay for deep cleansing.",
    effects: "Removes toxins and brightens skin.",
    suitableFor: "Normal to oily skin.",
    usage: "Apply, leave for 15 mins, rinse.",
    ageGroup: "15 years and above",
  },
  {
    id: 27,
    name: "Cocoa Butter Cream",
    price: 5000,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761802386/nuts-arrangement-with-copy-space_dgmzeh.jpg",
    description: "Rich cocoa butter cream for smooth, hydrated skin.",
    effects: "Prevents stretch marks.",
    suitableFor: "Pregnant women and dry skin users.",
    usage: "Apply generously twice daily.",
    ageGroup: "All ages",
  },
  {
    id: 28,
    name: "Aloe Hand Sanitizer",
    price: 2500,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761753035/aloe-vera-leaves-with-beauty-cream-bottle_pewhir.jpg",
    description: "Moisturizing hand sanitizer with aloe vera.",
    effects: "Kills 99.9% germs without dryness.",
    suitableFor: "All skin types.",
    usage: "Use anytime for clean hands.",
    ageGroup: "All ages",
  },
  {
    id: 29,
    name: "Lemon Glow Oil",
    price: 4800,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761813586/istockphoto-1264245297-1024x1024_jtuolr.jpg",
    description: "Lemon-infused oil for radiant and even-toned skin.",
    effects: "Fades spots and nourishes skin.",
    suitableFor: "Dull or uneven skin.",
    usage: "Apply a few drops daily.",
    ageGroup: "13 years and above",
  },
  {
    id: 30,
    name: "Herbal Hair Growth Oil",
    price: 7000,
    image: "https://res.cloudinary.com/dlnylsx6r/image/upload/v1761813721/istockphoto-2236129538-1024x1024_qkrfe7.jpg",
    description: "Blend of castor and neem oil that boosts hair growth.",
    effects: "Strengthens hair roots.",
    suitableFor: "All hair types.",
    usage: "Massage scalp twice weekly.",
    ageGroup: "10 years and above",
  },
];



  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center py-5">Product not found</h2>;
  }
  
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid rounded shadow" />
        </div>


{/* Right: Details */}
        <div className="col-md-6">
          <h2 className="fw-bold">{product.name}</h2>
          <p className="text-success fw-bold fs-4">₦{product.price}</p>

          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Effects:</strong> {product.effects}
          </p>
          <p>
            <strong>Suitable For:</strong> {product.suitableFor}
          </p>
          <p>
            <strong>Usage:</strong> {product.usage}
          </p>
          <p>
            <strong>Age Group:</strong> {product.ageGroup}
          </p>

          <div className="add-goback mt-3">


             <button
               className="CartBtn btn-success me-3"
             onClick={() => dispatch(addToCart(product))}
            >
               <span className="IconContainer">
                <svg
                   xmlns="http://www.w3.org/2000/svg"
                 height="1em"
                 viewBox="0 0 576 512"
                  fill="rgb(17, 17, 17)"         
                           className="cart"
                >
                 <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
              </svg>
             </span>
            <p className="text">Add to Cart</p>
           </button>

            <button className="btn btn-outline-success" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;



















// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice"; // ✅ import from redux
// import "./ProductDetails.css";

// import imgpart3 from "../components/multimedia/vecteezy_cosmetic-cream-on-a-wooden-table-with-aloe-vera-and-blurred_43372788.jpg";
// import imgpart4 from "../components/multimedia/vecteezy_bottle-with-pump-on-pink-background-for-personal-care-concept_65824415.jpg";
// import imgpart5 from "../components/multimedia/vecteezy_aromatic-spray-bottle-with-mint-leaves-and-flowers-flat-lay_69632698.jpg";
// import imgpart6 from "../components/multimedia/vecteezy_coconut-oil-jar-with-fresh-coconut-and-tropical-flowers_69738785.jpeg";
// import imgpart7 from "../components/multimedia/vecteezy_bottle-of-green-liquid-surrounded-by-daisies_46406146.jpeg";
// import imgpart8 from "../components/multimedia/vecteezy_decorative-jar-with-lid-containing-creamy-cosmetic-product_65288181.jpeg";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch(); // ✅ use Redux dispatch

//   const products = [
//     { id: 1, name: "Aloe Vera Face Cream", price: 5000, category: "Skincare", image: imgpart3, imgClass: "cream-img" },
//     { id: 2, name: "Shea Butter Lotion", price: 4500, category: "Body", image: imgpart4, imgClass: "lotion-img" },
//     { id: 3, name: "Green Tea Toner", price: 3500, category: "Skincare", image: imgpart5, imgClass: "toner-img" },
//     { id: 4, name: "Coconut Oil Moisturizer", price: 5500, category: "Body", image: imgpart6, imgClass: "coconut-img" },
//     { id: 5, name: "Herbal Shampoo", price: 6000, category: "Haircare", image: imgpart7, imgClass: "herbal-img" },
//     { id: 6, name: "Baby Moisturizer", price: 4000, category: "Baby & Mom", image: imgpart8, imgClass: "baby-img" },
//   ];

//   const product = products.find((p) => p.id === parseInt(id));

//   if (!product) {
//     return <h2 className="text-center py-5">Product not found</h2>;
//   }

//   return (
//     <div className="container py-5">
//       <div className="row">
//         {/* Product Image */}
//         <div className="col-md-6">
//           <img src={product.image} alt={product.name} className="img-fluid rounded shadow" />
//         </div>

//         {/* Product Info */}
//         <div className="col-md-6">
//           <h2 className="fw-bold">{product.name}</h2>
//           <p className="text-success fw-bold fs-4">₦{product.price}</p>
//           <p>{product.description}</p>

//           <div className="add-goback">
//             {/* ✅ Now uses Redux addToCart */}
//             <button
//               className="CartBtn btn-success me-3"
//               onClick={() => dispatch(addToCart(product))}
//             >
//               <span className="IconContainer">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   height="1em"
//                   viewBox="0 0 576 512"
//                   fill="rgb(17, 17, 17)"
//                   className="cart"
//                 >
//                   <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
//                 </svg>
//               </span>
//               <p className="text">Add to Cart</p>
//             </button>

//             <button className="btn btn-outline-success" onClick={() => navigate(-1)}>
//               Go Back
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

























// import React, { useContext } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import './ProductDetails.css'
// import imgpart3 from "../components/multimedia/vecteezy_cosmetic-cream-on-a-wooden-table-with-aloe-vera-and-blurred_43372788.jpg";
// import imgpart4 from '../components/multimedia/vecteezy_bottle-with-pump-on-pink-background-for-personal-care-concept_65824415.jpg';
// import imgpart5 from '../components/multimedia/vecteezy_aromatic-spray-bottle-with-mint-leaves-and-flowers-flat-lay_69632698.jpg'; 
// import imgpart6 from '../components/multimedia/vecteezy_coconut-oil-jar-with-fresh-coconut-and-tropical-flowers_69738785.jpeg';
// import imgpart7 from '../components/multimedia/vecteezy_bottle-of-green-liquid-surrounded-by-daisies_46406146.jpeg'
// import imgpart8 from '../components/multimedia/vecteezy_decorative-jar-with-lid-containing-creamy-cosmetic-product_65288181.jpeg'
// import { CartContext } from '../context/CartContext';

// const ProductDetails = () => {
  
//     const {id} = useParams()
//     const navigate = useNavigate()
//      const { addToCart } = useContext(CartContext);

//     const products = [
//        { id: 1, name: "Aloe Vera Face Cream", price: 5000,category: "Skincare", image: imgpart3,imgClass: "cream-img" },
//            { id: 2, name: "Shea Butter Lotion", price: 4500,category: "Body", image: imgpart4,imgClass: "lotion-img"  },
//            { id: 3, name: "Green Tea Toner", price: 3500,category: "Skincare", image: imgpart5,imgClass: "toner-img"  },
//            {id: 4, name: "Coconut Oil Moisturizer", price: 5500,category: "Body", image: imgpart6,imgClass: "coconut-img" },
//         { id: 5, name: "Herbal Shampoo", price: 6000, category: "Haircare", image: imgpart7,imgClass:"herbal-img" },
//         { id: 6, name: "Baby Moisturizer", price: 4000, category: "Baby & Mom", image: imgpart8,imgClass:"baby-img" },
//       ];
//       const product = products.find((p) => p.id === parseInt(id))

//       if (!product) {
//     return <h2 className="text-center py-5">Product not found</h2>;
//   }

//       return (
//     <div className="container py-5">
//       <div className="row">
//         {/* Product Image */}
//         <div className="col-md-6">
//           <img src={product.image} alt={product.name} className="img-fluid rounded shadow" />
//         </div>

//         {/* Product Info */}
//         <div className="col-md-6">
//           <h2 className="fw-bold">{product.name}</h2>
//           <p className="text-success fw-bold fs-4">₦{product.price}</p>
//           <p>{product.description}</p>
//    <div className='add-goback'>         
// <button className="CartBtn btn-success me-3" onClick={() => addToCart(product)} >
//   <span className="IconContainer"> 
//     <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
//   </span>
//   <p class="text">Add to Cart</p>
// </button>

//           <button className="btn btn-outline-success" onClick={() => navigate(-1)}>
//             Go Back
//           </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductDetails






// // import React, { useContext } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { CartContext } from "../context/CartContext";

// // import img1 from "../assets/product1.jpg";
// // import img2 from "../assets/product2.jpg";
// // import img3 from "../assets/product3.jpg";
// // import img4 from "../assets/product4.jpg";
// // import img5 from "../assets/product5.jpg";
// // import img6 from "../assets/product6.jpg";

// // const ProductDetails = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
 

  