import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2 className="text-success">Contact Us</h2>
      <form className="mt-3">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Write your message"></textarea>
        </div>
        <button type="submit" className="btn btn-success">Send</button>
      </form>
    </div>
   
  )
}

export default Contact