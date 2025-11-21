import React, { useEffect, useState } from "react";
import RestaurantList from "../components/RestaurantList";
import AddRestaurantForm from "../components/AddRestaurantForm";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants`)
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.error("API fetch error:", err));
  }, []);

  const handleAdd = (newRestaurant) => {
    setRestaurants((prev) => [...prev, newRestaurant]);
  };

  return (
    <div>
      <h1>Restaurant Reviews</h1>
      <AddRestaurantForm onAdd={handleAdd} />
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}
