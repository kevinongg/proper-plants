import PlantDetails from "../components/PlantDetails";

const DisplayPlants = ({ setCart, plants }) => {
  return (
    <section>
      <h2>Plants</h2>
      <PlantDetails plants={plants} setCart={setCart} />
    </section>
  );
};

export default DisplayPlants;
