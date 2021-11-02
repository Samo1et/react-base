import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import './assets/styles/index.scss'

ReactDOM.render(
  <StrictMode>
    <Layout>
      <div className='container'>Page content</div>
    </Layout>
  </StrictMode>,
  document.getElementById("root")
);
