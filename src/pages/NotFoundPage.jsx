import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
     <div className="text-center">
      <h1 className="display-3 text-danger">404</h1>
      <p className="lead">Oops! Page not found.</p>
      <Link to="/" className="btn btn-success">Go Home</Link>
    </div>
  )
}

export default NotFoundPage