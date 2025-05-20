function Payment() {
  return (
    <div className="form-container">
      <h2>Payment</h2>
       <input placeholder="Name of the Account Holder Name" />
      <input placeholder="Card Number" />
      <input placeholder="Expiry Date" />
      <input placeholder="CVV" />
       <input placeholder="price of Book" />
      <button>Pay Now</button>
    </div>
  );
}
export default Payment;
