import React, {useState} from "react"

function EditPrice ({ plant, isEdited, setIsEdited}) {
    const [planty, setPlanty]= useState(plant)

    function handleChange(e) {
        fetch(`http://localhost:6001/plants/${plant.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({price: e.target.value})
        })
        .then(r=>r.json())
        .then(data=> setPlanty(data))
    }
    return(
        <form id="editPlant">
            <label for="editPrice">Edit Price: </label>
            <input type="text" onChange={handleChange} value={planty.price} name="price" id="editPrice"></input>
        </form>
    )
}

export default EditPrice