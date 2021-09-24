import '../App.css';

const FailurePage = () => {
  return (
    <div className="Failure">
      <div className="tick">
        <i class="fa fa-times fa-5x"></i>
      </div>
      <h1>Oops, transaction failed!</h1>
      <div className="input">
        <h3>There was an error with processing your request.</h3>
      </div>
      <div className="button">
        <h4>
          <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
          Back Home
        </h4>
      </div>
      <div className="issues">
        <h3>
          If you have any issues <span>contact us</span>
        </h3>
      </div>
    </div>
  );
}

export default FailurePage;