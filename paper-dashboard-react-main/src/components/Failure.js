import "../Failure.css";
function Failure() {
  return (
    <div className="Failure">
      <div className="cross">
        <i class="fa fa-times fa-5x"></i>
      </div>
      <h1 className="failure-error">Oops, Transaction Failed!</h1>
      <div className="input">
        <h3 className="failure-lower-heading">There was an error with processing your request.</h3>
      </div>
      <div className="failure-button">
        <h4 className="failure-heading2">
          <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
          Back Home
        </h4>
      </div>
      <div className="issues">
        <h3 className="failure-lower-heading">
          If you have any issues <span>contact us</span>
        </h3>
      </div>
    </div>
  );
}

export default Failure;
