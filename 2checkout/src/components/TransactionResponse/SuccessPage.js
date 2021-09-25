import React from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';

const TransactionSuccessPage = () => {
  return (
    <>
      <Row>
        <Col md="8">
          <Card className="card-user">
            <div className="transaction-status-container">
              <div className="flex tick-icon">
                <i className="fa fa-check fa-5x shopping-btn-icon"/>
              </div>
              <CardTitle className="heading" tag="h1">
                Thank you, enjoy !
              </CardTitle>
              <div className="flex">
                <h3 className="description">Your Order Has been Placed</h3>
              </div>
              <div className="flex">
                <div className="shopping-btn">
                  <i
                    className="fa fa-long-arrow-left shopping-btn-icon"
                    aria-hidden="true"
                  />
                  Continue Shopping
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

export default TransactionSuccessPage;
