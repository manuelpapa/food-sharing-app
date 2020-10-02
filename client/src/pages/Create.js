import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import { createOffer } from "../api/results";
import { DatePicker, RangePicker } from "../components/DateTimePickers";
import { Button } from "../components/Button";
import { PageLayout } from "../components/PageLayout";

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
const Tag = styled.div`
  font-family: "SFUIreg";
  font-size: 1em;
  color: ${({ value }) => (value ? "black" : "var(--font-semi-dark)")};
  border: ${({ value }) =>
    value ? "1px solid white" : "1px solid var(--font-semi-dark)"};
  border-radius: 3em;
  padding: 1em 2em;
  margin: 0 0.5em 0.5em 0.5em;
  display: inline-block;
  line-height: 1;
  background: ${({ value }) => (value ? "var(--bg-main-gradient)" : "white")};
  cursor: pointer;
`;

export function Create() {
  const [category, setCategory] = useState("misc");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState();
  const { register, handleSubmit, setError, errors } = useForm();
  const history = useHistory();

  const [tags, setTags] = useState([
    {
      name: "glutenfrei",
      isChecked: false,
    },
    {
      name: "laktosefrei",
      isChecked: false,
    },
    {
      name: "vegan",
      isChecked: false,
    },
    {
      name: "vegetarisch",
      isChecked: false,
    },
  ]);

  console.log(tags);

  function filterTags() {
    const checkedTags = [];
    tags.forEach((tag) => {
      if (tag.isChecked) checkedTags.push(tag.name);
    });
    return checkedTags;
  }

  const onSubmit = async (data) => {
    try {
      const formattedDate = date.format("DD.MM.YYYY");
      const start_time = time[0].format("HH:mm");
      const end_time = time[1].format("HH:mm");
      const checkedTags = filterTags();
      const response = await createOffer(
        data,
        formattedDate,
        start_time,
        end_time,
        checkedTags
      );
      if (response.status === 200) {
        history.push("/created");
      } else if (response.status === 400) {
        setError("response", { type: "manual", message: response.statusText });
      }
    } catch (error) {
      setError("response", {
        type: "manual",
        message: "Ein Fehler ist aufgetreten",
      });
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

  function handleChange(tagName, tagIsChecked) {
    const updatedTags = [];
    tags.forEach((tag) => {
      if (tag.name === tagName && tagIsChecked) {
        updatedTags.push({ name: tag.name, isChecked: false });
      } else if (tag.name === tagName && !tagIsChecked) {
        updatedTags.push({ name: tag.name, isChecked: true });
      } else {
        updatedTags.push({ name: tag.name, isChecked: tag.isChecked });
      }
    });
    setTags(updatedTags);
  }

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
          {errors.title && <small>Bitte ausfüllen</small>}
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
                <option key={category} value={category} name="category">
                  {label}
                </option>
              ))}
            </select>
            {errors.category && <small>Bitte ausfüllen</small>}
          </Dropdown>
          <h2>Tags</h2>
          {tags?.map((tag) => (
            <Tag value={tag.isChecked} key={tag.name} name={tag.name}>
              <label htmlFor={tag.name}>
                <input
                  onChange={() => handleChange(tag.name, tag.isChecked)}
                  type="checkbox"
                  hidden
                  placeholder={tag.name}
                  name={tag.name}
                  id={tag.name}
                  ref={register}
                />
                <span>{tag.name}</span>
              </label>
            </Tag>
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
          {errors.date && <small>Bitte ausfüllen</small>}

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
          {errors.time && <small>Bitte ausfüllen</small>}

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
            {errors.name && <small>Bitte ausfüllen</small>}

            <input
              type="text"
              placeholder="Straße und Hausnr."
              name="street"
              ref={register({
                required: true,
              })}
            />
            {errors.street && <small>Bitte ausfüllen</small>}

            <input
              type="text"
              placeholder="PLZ"
              name="zip"
              ref={register({
                required: true,
              })}
            />
            {errors.zip && <small>Bitte ausfüllen</small>}

            <input
              type="text"
              placeholder="Stadt"
              name="city"
              ref={register({
                required: true,
              })}
            />
            {errors.city && <small>Bitte ausfüllen</small>}
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
