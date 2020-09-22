import styled from "@emotion/styled";
import React, { useState } from "react";
import categoriesIcon from "../assets/icons/categories.svg";

const Picker = styled.div`
  display: grid;
  place-items: center;
`;

const Field = styled.div`
  position: relative;
  select {
    font-family: "SFUIreg";
    color: var(--font-semi-dark);
    font-size: 1em;
    padding: 0.5em 3em 0.5em 1em;
    margin: 0em;
    appearance: none;
    cursor: pointer;
  }
`;

const Arrow = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  height: 100%;
  width: 3em;
  pointer-events: none;
  img {
    margin: 0.7em;
  }
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
    <Picker>
      <Field>
        <select value={value} onChange={(e) => setValue(e.currentTarget.value)}>
          {categories.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <Arrow>
          <img src={categoriesIcon} alt="pick a category" />
        </Arrow>
      </Field>
    </Picker>
  );
};

export default CategoryPicker;
