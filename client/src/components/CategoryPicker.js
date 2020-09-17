import styled from "@emotion/styled";
import React, { useState } from "react";

const Field = styled.div`
  font-family: "SFUIbold";
  font-size: 1em;
  color: #000000;
  border: 0;
  cursor: pointer;
`;

const CategoryPicker = () => {
  const [categories] = useState([
    { label: "Brot & Backwaren", value: "bread" },
    { label: "Fast Food", value: "fastfood" },
    { label: "Fisch & Fischprodukte", value: "fish" },
    { label: "Fleisch & Fleischprodukte", value: "meat" },
    { label: "Gemüse", value: "vegetables" },
    { label: "Gerichte & Speisen", value: "dishes" },
    { label: "Getränke", value: "drinks" },
    { label: "Hülsenfrüchte", value: "beans" },
    { label: "Käse", value: "cheese" },
    { label: "Milch & Milcherzeugnisse", value: "milk" },
    { label: "Nudeln & Teigwaren", value: "noodles" },
    { label: "Nüsse & Samen", value: "nuts" },
    { label: "Obst & Obstprodukte", value: "fruits" },
    { label: "Öle & Fette", value: "oil" },
    { label: "Kartoffelprodukte", value: "potatoes" },
    { label: "Süßwaren", value: "sweets" },
    { label: "Verschiedenes", value: "misc" },
  ]);

  const [value, setValue] = useState("misc");
  return (
    <Field>
      <select value={value} onChange={(e) => setValue(e.currentTarget.value)}>
        {categories.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </Field>
  );
};

export default CategoryPicker;
