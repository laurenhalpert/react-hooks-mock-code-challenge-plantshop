import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onNewPlant, search, setSearch }) {
  return (
    <main>
      <NewPlantForm onNewPlant={onNewPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
