import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { DatePicker, RangePicker } from "../components/DateTimePickers";
import { PageLayout } from "../components/PageLayout";
import TagComponent from "../components/Tag";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  input {
  }
  h2 {
    margin: 0.5em 0 0 0;
  }
`;

const Dropdown = styled.div`
  cursor: pointer;
  ::selection,
  select:active,
  select:checked,
  select:focus {
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

const Tags = styled.div``;

export function Create() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(date);
    console.log(time);
    console.log(errors);
  };

  const CancelButton = styled(Button)`
    color: #ffffff;
    background: #de3a3a;
  `;

  const FooterGradient = styled.div`
    height: 0.4em;
    background: var(--bg-main-gradient);
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

  const preferences = ["glutenfrei", "laktosefrei", "vegan", "vegetarisch"];

  const [value, setValue] = useState("misc");

  const [date, setDate] = useState(null);
  const [time, setTime] = useState(new Date());

  return (
    <PageLayout>
      <Form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Titel</h2>

          <input type="text" placeholder="Titel" name="titel" ref={register} />

          <h2>Kategorie</h2>
          <Dropdown>
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
          </Dropdown>
          <h2>Tags</h2>
          <Tags>
            {preferences?.map((preference) => (
              <TagComponent key={preference} preference={preference}>
                <input ref={register} />
              </TagComponent>
            ))}
            {/* <Tag>
              <label htmlFor="laktosefrei">
                <input
                  type="checkbox"
                  placeholder="laktosefrei"
                  name="laktosefrei"
                  id="laktosefrei"
                  ref={register}
                />
                laktosefrei
              </label>
            </Tag>
            <Tag>
              <label htmlFor="vegan">
                <input
                  type="checkbox"
                  placeholder="vegan"
                  name="vegan"
                  id="vegan"
                  ref={register}
                />
                vegan
              </label>
            </Tag>
            <Tag>
              <label htmlFor="vegetarisch">
                <input
                  type="checkbox"
                  placeholder="vegetarisch"
                  name="vegetarisch"
                  id="vegetarisch"
                  ref={register}
                />
                vegetarisch
              </label>
            </Tag> */}
          </Tags>
          <h2>Abholzeit</h2>

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

          <h2>Abholort</h2>
          <Location>
            <input
              type="text"
              placeholder="Straße und Hausnr."
              name="Straße"
              ref={register}
            />
            <input type="text" placeholder="PLZ" name="PLZ" ref={register} />
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
          </Location>
          <Footer>
            <FooterGradient />
            <Button type="submit">Anbieten</Button>
            <CancelButton type="reset">Abbrechen</CancelButton>
          </Footer>
        </form>
      </Form>
    </PageLayout>
  );
}

// const Form = styled.div`
//   display: flex;
//   background: hotpink;
//   flex-direction: column;
//   flex-wrap: wrap;
//   input {
//   }
//   h2 {
//     margin: 0.5em 0 0 0;
//   }
// `;

// const CancelButton = styled(Button)`
//   color: #ffffff;
//   background: #de3a3a;
// `;

// const Location = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 0 2em;
//   input {
//     margin: 0.5em;
//   }
// `;

// const Tags = styled.div`
//   background: green;
// `;

// const Tag = styled.div`
//   font-family: "SFUIreg";
//   font-size: 1em;
//   color: var(--font-semi-dark);
//   border: 0;
//   border-radius: 3em;
//   padding: 1em 2em;
//   margin: 0em 0.5em;
//   display: inline-block;
//   line-height: 1;
//   cursor: pointer;
//   background: yellow;

//   input:hover & span {
//     background-color: #efe0e0;
//   }

//   input:checked & span {
//     background-color: #911;
//     color: #fff;
//   }
// `;
