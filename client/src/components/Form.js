import styled from "@emotion/styled";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const Form = styled.div`
    display: flex;
    flex-grow: 1;
  `;

  return (
    <Form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Straße und Hausnr."
          name="Straße"
          ref={register({
            required: true,
            min: 2,
            maxLength: 15,
            pattern: /^\S+@\S+$/i,
          })}
        />
        <input
          type="number"
          placeholder="PLZ"
          name="PLZ"
          ref={register({ required: true, min: 5, maxLength: 6 })}
        />
        <input
          type="text"
          placeholder="Stadt"
          name="Stadt"
          ref={register({
            required: true,
            min: 2,
            maxLength: 30,
            pattern: /^\S+@\S+$/i,
          })}
        />
        <input
          type="text"
          placeholder="Klingelname / Treffpunkt"
          name="Klingelname / Treffpunkt"
          ref={register({ required: true, min: 3, maxLength: 30 })}
        />
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
        <input type="submit" />
      </form>
    </Form>
  );
}
