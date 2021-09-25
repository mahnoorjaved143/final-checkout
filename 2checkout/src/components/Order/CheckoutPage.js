import React, { Component } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from 'reactstrap';

class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'FaadilAli',
      email: 'faadilali@gmail.com',
      firstName: 'Faadil',
      lastName: 'Ali',
      address: 'Musherib Street 47',
      city: 'Alkhor',
      country: 'Qatar',
      contactNumber: '097431310244',
      zipCode: '122001',
      publisherKey: '3D7C3B93-4588-492D-8762-1FE363B43A4E',
      merchantCode: '251474674377',
      productDetail: {
        productName: 'Michael kors Handbag',
        productPrice: 2600,
        shipping: 200,
      },
    };
  }

  inputHandler = event => {
    const nam = event.target.name;
    const val = event.target.value;
    this.setState({ [nam]: val });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const {
      username,
      email,
      firstName,
      lastName,
      address,
      city,
      country,
      contactNumber,
      zipCode,
      productDetail,
      merchantCode,
    } = this.state;
    const totalAmount = productDetail.productPrice + productDetail.shipping;
    return (
      <>
        <div className="">
          <Row>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Checkout Page</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form action="https://www.2checkout.com/order/checkout" method="post">
                    <Row>
                      <Col className="pr-1" md="6">
                        <Input type="hidden" name="mid" value={merchantCode} />
                        <Input type="hidden" name="mode" value="2CO" />
                        <Input type="hidden" name="demo" value="Y" />
                        <FormGroup>
                          <label>Username </label>
                          <Input
                            placeholder="Username"
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.inputHandler}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Email address </label>
                          <Input
                            placeholder="Email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={this.inputHandler}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={this.inputHandler}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={this.inputHandler}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            placeholder="Home Address"
                            type="text"
                            name="address"
                            value={address}
                            onChange={this.inputHandler}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            placeholder="City"
                            type="text"
                            name="city"
                            value={city}
                            onChange={this.inputHandler}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            placeholder="Country"
                            type="text"
                            name="country"
                            value={country}
                            onChange={this.inputHandler}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input
                            placeholder="ZIP Code"
                            type="number"
                            name="zipCode"
                            value={zipCode}
                            onChange={this.inputHandler}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <Col className="pl-1" md="12">
                            <FormGroup>
                              <label>Contact Number</label>
                              <Input
                                placeholder="Phone Number"
                                type="number"
                                name="contactNumber"
                                value={contactNumber}
                                onChange={this.inputHandler}
                              />
                            </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button className="btn-round" color="primary" type="submit">
                          Make Payment
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    className="order-summary"
                    alt="..."
                    src={require('assets/img/header-logo.svg').default}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require('assets/img/bag.jpeg').default}
                      />
                      <h5 className="title">Order Summary</h5>
                    </a>
                    <div className="order-detail">
                      <p className="">Product Name</p>
                      <p className="">{productDetail.productName}</p>
                    </div>
                    <div className="order-detail">
                      <p className="">Product Price</p>
                      <p className="">{productDetail.productPrice} QAR</p>
                    </div>
                    <div className="order-detail">
                      <p className="">Shipping </p>
                      <p className="">{productDetail.shipping} QAR</p>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="3" md="6" xs="6">
                        <h5>Total</h5>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="4" md="6" xs="6" />
                      <Col className="mr-auto" lg="3">
                        <h5>{totalAmount}</h5>
                      </Col>
                    </Row>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default CheckoutPage;
