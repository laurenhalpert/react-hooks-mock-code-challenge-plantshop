import React, {useState} from "react";
import EditPrice from "./EditPrice";

function PlantCard({plant}) {
  const [isStocked, setIsStocked] = useState(true);
  const [isEdited, setIsEdited] = useState(false);
  function handleClick(){
    setIsStocked(!isStocked)
  }

  
  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isStocked ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <EditPrice plant={plant} isEdited={isEdited} setIsEdited={setIsEdited}/>
      
    </li>
  );
}

export default PlantCard;
