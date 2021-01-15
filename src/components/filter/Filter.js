import React from "react";
import "./filter.scss";

const Filter = () => {
  return (
    <section className="filter-wrapper">
      <p>Filter by</p>
      <div className="gender">
        <label htmlFor="gender">Gender:</label>
        <select name="gender" id="gender">
          <option value="" defaultValue>
            Select one
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="prefer to skip">prefer to skip</option>
        </select>
      </div>
      <div className="payment-method">
        <label htmlFor="payment-method">Payment Method:</label>
        <select name="payment-method" id="payment-method">
          <option value="" defaultValue>
            Select one
          </option>

          <option value="cc">cc</option>
          <option value="check">check</option>
          <option value="money order">money order</option>
          <option value="paypal">paypal</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
