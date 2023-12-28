import React from "react";

export default function Newsletter() {
  return (
    <div className="newsletter-container">
      <div className="newsletter">
        <h1>Subscribe to get newsletter</h1>
        <input type="email" placeholder="Enter email..." />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
