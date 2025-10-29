import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-success text-white text-center py-5">
      <div className="container">
        <h1 className="display-4 fw-bold">Glow Naturally with MisstressChef</h1>
        <p className="lead mb-4">
          Discover premium skincare made with love. Shop 100% natural products for radiant skin.
        </p>
        <Link to="/shop" className="btn btn-light btn-lg text-success fw-bold">
          Shop Now
        </Link>
      </div>
    </section>
  )
}

export default Hero