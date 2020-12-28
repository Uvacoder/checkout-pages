import React from "react";

import { MainContainerStyles } from "../styles/index";
import MainForm from "../Forms/Forms/MainForm";
import Order from "../OrderSummary/Order";
import Header from "../Header/Header";

const OrderPage = () => {
  return (
    <>
      <MainContainerStyles>
        <Header />
        <MainForm />
        <Order />
      </MainContainerStyles>
    </>
  );
};

export default OrderPage;
