import { useState } from "react";
import PLANTS from "./data";
import DisplayPlants from "./displaydetails/DisplayPlants";
import DisplayCart from "./displaydetails/DisplayCart";

export default function App() {
  const [count] = useState(0);
  const [plants] = useState(PLANTS);
  const [cart, setCart] = useState([]);
  console.log(plants);
  return (
    <>
      <h1>Proper Plants</h1>
      <DisplayPlants plants={plants} setCart={setCart} />
      <DisplayCart plant={cart} />
    </>
  );
}
