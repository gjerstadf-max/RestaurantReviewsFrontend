import React, { useState } from "react";

export default function AddRestaurantForm({ onAdd }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, rating: parseInt(rating) })
    });

    if (response.ok) {
      const newRestaurant = await response.json();
      onAdd(newRestaurant);  // Update UI
      setName("");
      setRating("");
    } else {
      alert("Error adding restaurant");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Restaurant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
        min="1"
        max="5"
      />
      <button type="submit">Add Restaurant</button>
    </form>
  );
}
