import React from "react";

export default function RestaurantList({ restaurants }) {
  if (!restaurants || restaurants.length === 0) {
    return <p>No restaurants found.</p>;
  }

  return (
    <ul>
      {restaurants.map((r) => (
        <li key={r.id}>
          {r.name} - {r.rating} ⭐
        </li>
      ))}
    </ul>
  );
}
