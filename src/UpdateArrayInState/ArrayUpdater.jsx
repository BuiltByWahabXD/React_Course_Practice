import React, { useState } from "react";

const ArrayUpdater = () => {
  const [foods, setFoods] = useState(["Pizza", "Burger", "Pasta", "Biryani"]);

  function handleAddFood(event) {
    // read input element
    const inputElement = document.getElementById("foodInput");
    const val = (inputElement?.value ?? "").trim();

    if (val === "") {
      alert("Please enter a food item");
      return;
    }

    // guard: avoid immediate duplicate (protects against accidental double-call)
    if (foods.length > 0 && foods[foods.length - 1] === val) {
      console.warn("Duplicate add prevented");
      return;
    }

    setFoods((f) => [...f, val]);

    // clear input
    if (inputElement) inputElement.value = "";
  }

  function handleRemoveFood(index) {
    setFoods((f) => f.filter((_, i) => i !== index));
  }

  return (
    <div style={{ alignItems: "center", display: "flex", flexDirection: "column", marginTop: "50px" }}>
      <h2>List Of Food : </h2>
      <div style={{ display: "flex", flexDirection: "column", width: "200px", gap: "10px", marginTop: "20px" }}>
        {foods.map((food, index) => (
          <div
            style={{ border: "1px solid black", padding: "10px", borderRadius: "5px" }}
            key={index}
            onClick={() => handleRemoveFood(index)}
          >
            {food}
          </div>
        ))}

        <input
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid gray" }}
          type="text"
          id="foodInput"
          placeholder="Add Food Item"
        />

        <button
          style={{ padding: "10px", borderRadius: "5px", border: "none", backgroundColor: "green", color: "white", cursor: "pointer" }}
          type="button"
          onClick={handleAddFood}
        >
          Add Food
        </button>
      </div>
    </div>
  );
};

export default ArrayUpdater;
