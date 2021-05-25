import React, { useState } from "react";
import { Person } from "../interfaces";

const DEFAULT_STATE = {
  name: "",
  phone: 0,
  city: "",
  country: "",
};

const Form: React.FC = () => {
  const [state, setState] = useState<Person>(DEFAULT_STATE);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const valueToUpdate =
      e.currentTarget.name === "phone"
        ? parseInt(e.currentTarget.value)
        : e.currentTarget.value;
    setState({ ...state, [e.currentTarget.name]: valueToUpdate });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(state);
    setState(DEFAULT_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        type="text"
        onChange={handleChange}
        value={state.name}
      />
      <input
        name="phone"
        placeholder="phone"
        type="number"
        onChange={handleChange}
        value={state.phone}
      />
      <input
        name="city"
        placeholder="city"
        type="text"
        onChange={handleChange}
        value={state.city}
      />
      <input
        name="country"
        placeholder="country"
        type="text"
        onChange={handleChange}
        value={state.country}
      />
      <input type="submit" value="Add person" />
    </form>
  );
};

export default Form;
