import "./plants.css";

const PlantDetails = ({ plants, setCart }) => {
  return (
    <div className="plant-container">
      {plants.map((plant) => (
        <section className="plant-details" key={plant.id}>
          {plant.image} {plant.name}
          <button onClick={() => setCart(plant)}>Add to cart</button>
        </section>
      ))}
    </div>
  );
};

export default PlantDetails;
