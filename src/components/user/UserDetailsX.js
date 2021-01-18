import React, { Fragment } from "react";

const UserDetailsX = ({ data, isOpen, closeModal }) => {
  const {
    CreditCardNumber,
    CreditCardType,
    DomainName,
    Email,
    FirstName,
    Gender,
    LastLogin,
    LastName,
    Latitude,
    Longitude,
    MacAddress,
    PaymentMethod,
    PhoneNumber,
    URL,
    UserName,
  } = data;

  if (!isOpen) return null;

  return (
    <Fragment>
      <div className="modalBackground" onClick={closeModal}></div>
      <div className="profileModal">
        <button id="closeModalBtn" onClick={closeModal}>
          <i class="far fa-times-circle"></i>
        </button>
        <h2>{FirstName}'s Data</h2>
        <div className="basic-details">
          <h3>Basic Details</h3>
          <p>
            <span className="label">First Name:</span>
            {FirstName}
          </p>
          <p>
            <span className="label">Last Name:</span>
            {LastName}
          </p>
          <p>
            <span className="label">Gender:</span>
            {Gender}
          </p>
          <p>
            <span className="label">Username</span>
            {UserName}
          </p>
          <p>
            <span className="label">Domain Name:</span>
            {DomainName}
          </p>
          <p>
            <span className="label">Last Login:</span>
            {LastLogin}
          </p>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            <span className="label">Phone Number:</span>
            {PhoneNumber}
          </p>
          <p>
            <span className="label">Email:</span>
            {Email}
          </p>
          <p>
            <span className="label">URL:</span>
            {URL}
          </p>
        </div>
        <div className="payment-info">
          <h3>Payment Information</h3>
          <p>
            <span className="label">Credit Card Number:</span>
            {CreditCardNumber}
          </p>
          <p>
            <span className="label">Credit Card Type:</span>
            {CreditCardType}
          </p>
          <p>
            <span className="label">Payment Method:</span>
            {PaymentMethod}
          </p>
        </div>
        <div className="device-info">
          <h3>Device Information</h3>
          <p>
            <span className="label">MAC Address:</span>
            {MacAddress}
          </p>
          <p>
            <span className="label">Location:</span>
            <small>Latitude: {Latitude},</small>
            <small>Longitude: {Longitude}</small>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default UserDetailsX;
