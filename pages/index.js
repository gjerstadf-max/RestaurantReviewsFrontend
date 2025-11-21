import React, { useEffect, useState } from "react";
import RestaurantList from "../components/RestaurantList";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants`)
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.error("API fetch error:", err));
  }, []);

  return (
    <div>
      <h1>Restaurant Reviews</h1>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}
