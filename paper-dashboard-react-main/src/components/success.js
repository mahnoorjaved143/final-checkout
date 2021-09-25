import '../success.css';

const ThankYouPage = () => {
  return (
    <div className="success-container">
      <div className="flex tick-icon">
        <i class="fa fa-check fa-5x"></i>
      </div>
      <h1 className="heading">Thank you, enjoy !</h1>
      <div className="flex">
        <h3 className="description">Your Order Has been Placed</h3>
      </div>
      <div className="flex">
        <h4 className="shopping-btn">
          <i className="fa fa-long-arrow-left shopping-btn-icon" aria-hidden="true"></i>
          Continue Shopping
        </h4>
      </div>
      <div className="flex">
        <h3 className="description">
          If you have any issues <span>Contact us</span>
        </h3>
      </div>
    </div>
  );
};

export default ThankYouPage;
