import React from 'react'
import imgpart1 from '../components/multimedia/leaf.png';
import imgpart30 from '../components/multimedia/mistress chef logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
        <footer
      className="text-white mt-5"
      style={{ backgroundColor: "#0f5132", padding: "20px 0" }}
    >
      <div className="container text-center">
        <div className="row">
          {/* Brand */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">    <img src={imgpart30} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />  MisstressChef</h5>
            <p style={{ fontSize: "14px" }}>
              Natural skincare for healthy glowing skin <img src={imgpart1} className='leaf-img-top' alt="leaf-icon" />
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link className="text-white text-decoration-none" to="/">Home</Link></li>
              <li><Link className="text-white text-decoration-none" to="/about">About</Link></li>
              <li><Link className="text-white text-decoration-none" to="/contact">Contact</Link></li>
            </ul>
          </div>

        {/* Social Media */}
<div className="col-md-4 mb-3">
  <h6 className="fw-bold">Follow Us</h6>
  {/* Share Buttons */}
<div className="col-md-12 mt-3">
  <h6 className="fw-bold">Share Our Store</h6>

  {/* Facebook Share */}
  <a
    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white me-3"
  >
    <i className="fa-brands fa-facebook"></i>
  </a>

  {/* Twitter/X Share */}
  <a
    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check%20out%20MisstressChef%20Skincare!`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white me-3"
  >
    <i className="fa-brands fa-x-twitter"></i>
  </a>

  {/* WhatsApp Share */}
  <a
    href={`https://api.whatsapp.com/send?text=Check%20out%20MisstressChef%20Skincare!%20${encodeURIComponent(window.location.href)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white"
  >
    <i className="fa-brands fa-whatsapp"></i>
  </a>
</div>

  <a href="https://facebook.com/MisstressChefSkincare" target="_blank" rel="noopener noreferrer" className="text-white me-3">
    <i className="fa-brands fa-facebook-f"></i>
  </a>
  <a href="https://instagram.com/MisstressChefSkincare"  target="_blank" rel="noopener noreferrer" className="text-white me-3">
    <i className="fa-brands fa-instagram"></i>
  </a>
  <a href="https://twitter.com/MisstressChefSkin" target="_blank" rel="noopener noreferrer" className="text-white">
    <i className="fa-brands fa-twitter"></i>
  </a>
</div>
 </div>

        <hr className="border-white" />
        <p style={{ fontSize: "13px", marginBottom: "0" }}>
          © {new Date().getFullYear()} MisstressChef Skincare. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer