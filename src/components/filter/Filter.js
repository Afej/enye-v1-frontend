import React from "react";
import "./filter.scss";

const Filter = ({ genders, paymentMethods, onChange }) => {
  return (
    <section className="filter-wrapper">
      <p>Filter by</p>
      <div className="gender">
        <label htmlFor="gender">Gender:</label>
        <select name="gender" id="gender" onChange={onChange}>
          <option value="" defaultValue>
            Nil
          </option>
          {Array.from(genders)
            .sort()
            .map((gender, idx) => (
              <option value={gender} key={idx}>
                {gender}
              </option>
            ))}
        </select>
      </div>
      <div className="payment-method">
        <label htmlFor="payment-method">Payment Method:</label>
        <select name="payment-method" id="payment-method" onChange={onChange}>
          <option value="" defaultValue>
            Nil
          </option>
          {Array.from(paymentMethods)
            .sort()
            .map((paymentMethod, idx) => (
              <option value={paymentMethod} key={idx}>
                {paymentMethod}
              </option>
            ))}
        </select>
      </div>
    </section>
  );
};

export default Filter;
