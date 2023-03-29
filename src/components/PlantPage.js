import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onNewPlant, search, setSearch, onDel }) {
  return (
    <main>
      <NewPlantForm onNewPlant={onNewPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={plants} onDel={onDel}/>
    </main>
  );
}

export default PlantPage;
