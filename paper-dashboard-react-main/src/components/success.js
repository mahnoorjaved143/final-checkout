import '../success.css';

const ThankYouPage = () => {
  return (
    <div className="sucess-container ">
      <div className="flex tick">
        <i class="fa fa-check fa-5x"></i>
      </div>
      <h1 className="heading">Thank you, enjoy !</h1>
      <div className="flex">
        <h3 className="lower-heading">Your Order Has been Placed</h3>
      </div>
      <div className="flex">
        <h4 className="heading2">
          <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
          Continue Shopping
        </h4>
      </div>
      <div className="flex">
        <h3 className="lower-heading">
          If you have any issues <span>Contact us</span>
        </h3>
      </div>
    </div>
  );
};

export default ThankYouPage;
