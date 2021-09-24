import '../App.css';

const ThankYouPage = () => {
  return (
    <>
      <div className="tick">
        <i className="fa fa-check fa-5x" />
      </div>
      <h1>Thank you, enjoy !</h1>
      <div className="input">
        <h3>We've sent the download to your inbox</h3>
      </div>
      <div className="button">
        <h4>
          <i className="fa fa-long-arrow-left" aria-hidden="true" />
          Back Home
        </h4>
      </div>
      <div className="issues">
        <h3>
          If you have any issues <span>contact us</span>
        </h3>
      </div>
    </>
  );
};

export default ThankYouPage;
