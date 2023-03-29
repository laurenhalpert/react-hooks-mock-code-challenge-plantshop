/*
App
|_Header
|_PlantPage
    |_NewPlantForm
    |_PlantList
        |_PlantCard
    |_Search

*/
import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(r=>r.json())
    .then(plants=> setPlants(plants))
  })
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }
  function handlePlantDeletion(id) {
    setPlants(plants.filter(plant=> plant.id !== id))
  }
  const displayPlants = plants.filter(plant=> plant.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="app">
      <Header />
      <PlantPage onDel={handlePlantDeletion} plants={displayPlants} onNewPlant={handleAddPlant} search={search} setSearch={setSearch}/>
    </div>
  );
}

export default App;
