import React, { useState } from "react";
import BreadcrumbHeader from "../components/BreadcrumbHeader";
import styled from "@emotion/styled";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { DatePicker, TimePicker } from "antd";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Main = styled.div`
  margin-top: 6em;
  display: flex;
  place-items: center;
  flex-direction: column;
`;

const Form = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Field = styled.div`
  font-family: "SFUIbold";
  font-size: 1em;
  color: #000000;
  border: 0;
  cursor: pointer;
`;

const Footer = styled.div`
  display: grid;
`;

const CancelButton = styled.button`
  font-family: "SFUIbold";
  font-size: 1em;
  color: #ffffff;
  border: 0;
  border-radius: 3em;
  padding: 1em 2em;
  margin: 2em 0em 0.5em;
  display: inline-block;
  line-height: 1;
  background: #de3a3a;
  cursor: pointer;
`;

export function Create() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(time);
    console.log(date);
    console.log(errors);
  };

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

  const [date, setDate] = useState(null);
  const [time, setTime] = useState(new Date());
  const { RangePicker } = TimePicker;
  return (
    <>
      <Container>
        <BreadcrumbHeader />
        <Main>
          <Form>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>Titel</h2>
              <input
                type="text"
                placeholder="Titel"
                name="titel"
                ref={register}
              />
              <h2>Kategorie</h2>
              <Field>
                <select
                  value={value}
                  name="categories"
                  ref={register}
                  onChange={(e) => {
                    setValue(e.currentTarget.value);
                  }}
                >
                  {categories.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </Field>
              <h2>Abholzeit</h2>
              <div>
                <DatePicker
                  selected={date}
                  onChange={(date) => {
                    setDate(date);
                  }}
                  dateFormat="dd.MM.yyyy"
                  isClearable="true"
                  ref={register}
                />

                <RangePicker
                  format="H:mm"
                  minuteStep={15}
                  selected={time}
                  ref={register}
                  onChange={(date) => {
                    setTime(date);
                  }}
                />
              </div>

              <h2>Abholort</h2>

              <input
                type="text"
                placeholder="Straße und Hausnr."
                name="Straße"
                ref={register}
              />
              <input
                type="number"
                placeholder="PLZ"
                name="PLZ"
                ref={register}
              />
              <input
                type="text"
                placeholder="Stadt"
                name="Stadt"
                ref={register}
              />
              <input
                type="text"
                placeholder="Klingelname / Treffpunkt"
                name="Klingelname / Treffpunkt"
                ref={register}
              />
              <h2>Tags</h2>
              <input
                type="checkbox"
                placeholder="glutenfrei"
                name="glutenfrei"
                id="glutenfrei"
                ref={register}
              />
              <label htmlFor="glutenfrei">glutenfrei</label>
              <input
                type="checkbox"
                placeholder="laktosefrei"
                name="laktosefrei"
                id="laktosefrei"
                ref={register}
              />
              <label htmlFor="laktosefrei">laktosefrei</label>
              <input
                type="checkbox"
                placeholder="vegan"
                name="vegan"
                id="vegan"
                ref={register}
              />
              <label htmlFor="vegan">vegan</label>
              <input
                type="checkbox"
                placeholder="vegetarisch"
                name="vegetarisch"
                id="vegetarisch"
                ref={register}
              />
              <label htmlFor="vegetarisch">vegetarisch</label>

              <Button type="submit">Anbieten</Button>
              <CancelButton type="reset">Abbrechen</CancelButton>
            </form>
          </Form>
        </Main>
        <Footer></Footer>
      </Container>
    </>
  );
}
