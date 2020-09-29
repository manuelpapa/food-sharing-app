import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import { createOffer } from "../api/results";
import { DatePicker, RangePicker } from "../components/DateTimePickers";
import { Button } from "../components/Button";
import { PageLayout } from "../components/PageLayout";
import TagComponent from "../components/Tag";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  h2 {
    margin-top: 0.5em;
    margin-bottom: 0em;
  }
  input {
    :invalid,
    :required {
      border: 1px solid #de3a3a;
    }
  }
`;

const Dropdown = styled.div`
  cursor: pointer;
  select,
  option {
    outline: none;
  }
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2em;
  input {
    margin-bottom: 1em;
  }
`;

const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  background: #fff;
  & button {
    margin: 0.5em;
  }
`;
const FooterGradient = styled.div`
  height: 0.4em;
  background: var(--bg-main-gradient);
`;
const CancelButton = styled(Button)`
  color: #ffffff;
  background: #de3a3a;
`;
export function Create() {
  const [category, setCategory] = useState("misc");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState();
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    const formattedDate = date.format("DD.MM.YYYY");
    const start_time = time[0].format("HH:mm");
    const end_time = time[1].format("HH:mm");
    const tags = ["vegetarisch", "vegan"];
    const response = await createOffer(
      data,
      formattedDate,
      start_time,
      end_time,
      tags
    );
    if (response) {
      history.push("/created");
    }
  };

  const [categories] = useState([
    { label: "Brot & Backwaren", category: "bread" },
    { label: "Fast Food", category: "fastfood" },
    { label: "Fisch & Fischprodukte", category: "fish" },
    { label: "Fleisch & Fleischprodukte", category: "meat" },
    { label: "Gemüse", category: "vegetables" },
    { label: "Gerichte & Speisen", category: "dishes" },
    { label: "Getränke", category: "drinks" },
    { label: "Hülsenfrüchte", category: "beans" },
    { label: "Käse", category: "cheese" },
    { label: "Milch & Milcherzeugnisse", category: "milk" },
    { label: "Nudeln & Teigwaren", category: "noodles" },
    { label: "Nüsse & Samen", category: "nuts" },
    { label: "Obst & Obstprodukte", category: "fruits" },
    { label: "Öle & Fette", category: "oil" },
    { label: "Kartoffelprodukte", category: "potatoes" },
    { label: "Süßwaren", category: "sweets" },
    { label: "Verschiedenes", category: "misc" },
  ]);

  const preferences = ["glutenfrei", "laktosefrei", "vegan", "vegetarisch"];

  return (
    <PageLayout>
      <Form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Titel</h2>
          <input
            type="text"
            placeholder="z.B. 500g Steinpilze"
            name="title"
            ref={register({
              required: true,
            })}
          />
          <h2>Kategorie</h2>
          <Dropdown>
            <select
              value={category}
              name="category"
              ref={register({
                required: true,
              })}
              onChange={(e) => {
                setCategory(e.currentTarget.value);
              }}
            >
              {categories.map(({ label, category }) => (
                <option key={category} value={category}>
                  {label}
                </option>
              ))}
            </select>
          </Dropdown>
          <h2>Tags</h2>
          {preferences?.map((preference) => (
            <TagComponent key={preference} preference={preference}>
              <input ref={register} />
            </TagComponent>
          ))}
          <h2>Abholzeit</h2>
          <DatePicker
            name="date"
            selected={date}
            onChange={(date) => {
              setDate(date);
            }}
            dateFormat="dd.MM.yyyy"
            isClearable="true"
            ref={register({
              required: true,
            })}
          />
          <RangePicker
            name="time"
            format="H:mm"
            minuteStep={15}
            selected={time}
            ref={register({
              required: true,
            })}
            onChange={(date) => {
              setTime(date);
            }}
          />
          <h2>Abholort</h2>
          <Location>
            <input
              type="text"
              placeholder="Klingelname / Treffpunkt"
              name="name"
              ref={register({
                required: true,
              })}
            />
            <input
              type="text"
              placeholder="Straße und Hausnr."
              name="street"
              ref={register({
                required: true,
              })}
            />
            <input
              type="text"
              placeholder="PLZ"
              name="zip"
              ref={register({
                required: true,
              })}
            />
            <input
              type="text"
              placeholder="Stadt"
              name="city"
              ref={register({
                required: true,
              })}
            />
          </Location>
          <Footer>
            <FooterGradient />
            <Button type="submit">Anbieten</Button>
            <CancelButton onClick={history.goBack}>Abbrechen</CancelButton>
          </Footer>
        </form>
      </Form>
    </PageLayout>
  );
}
