import React from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';

const TransactionFailurePage = () => {
  return (
    <>
      <Row>
        <Col md="8">
          <Card className="card-user">
            <div className="transaction-status-container">
              <div className="cross-icon ">
                <i className="fa fa-times fa-5x" />
              </div>
              <CardTitle className="failed-heading" tag="h1">
                Oops, Transaction Failed!
              </CardTitle>
              <div className="flex">
                <h3 className="description">
                  There is an error with processing your request.
                </h3>
              </div>
              <div className="flex">
                <div className="shopping-btn btn-color">
                  <i className="fa fa-long-arrow-left" aria-hidden="true" />
                  Try Again
                </div>
              </div>
              <div className="flex">
                <h3 className="description">
                  If you have any issues <span>Contact us</span>
                </h3>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TransactionFailurePage;
