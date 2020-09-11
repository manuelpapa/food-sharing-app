import React from "react";
import GlobalStyles from "./GlobalStyles";
import SubmitButton from "./components/SubmitButton";
import InputField from "./components/InputField";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <h2>Headline</h2>
      <h3>Title tile</h3>
      <p>Text Text</p>
      <InputField>E-Mail</InputField>
      <SubmitButton>Login</SubmitButton>
      <small>Register</small>
    </>
  );
}

export default App;
