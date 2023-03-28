import React, {useState} from "react";

function NewPlantForm({onNewPlant}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    const newPlantObj= {
      name: name,
      image: image,
      price: price
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlantObj)
    })
    .then(r=>r.json())
    .then(newPlant=> onNewPlant(newPlant))
  }
  function handleChange(e, vari, setVar) {
    setVar(e.target.value)
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={(e, vari, setVar)=>handleChange(e, name, setName)} type="text" name="name" placeholder="Plant name" value={name}/>
        <input onChange={(e, vari, setVar) => handleChange(e, image, setImage)}  type="text" name="image" placeholder="Image URL" value={image}/>
        <input onChange={(e, vari, setVar) => handleChange(e, price, setPrice)}  type="number" name="price" step="0.01" placeholder="Price" value={price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
