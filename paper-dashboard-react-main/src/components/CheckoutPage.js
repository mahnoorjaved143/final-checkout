import React, { Component } from 'react';
import Navbar from "components//Navbar.js";
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
} from "reactstrap";

class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      firstName:'',
      lastName:'',
      address:'',
      city:'',
      country:"",
      contactNumber:'',
      zipCode:"",
      publisherKey:"3D7C3B93-4588-492D-8762-1FE363B43A4E", 
      merchantCode:'251474674377'
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state)

    this.props.history.push('https://www.2checkout.com/checkout/purchase');
  }

  render() {   
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
                   <Form action="https://www.2checkout.com/checkout/purchase" method='post'>  
                   <Row>
                       <Col className="pr-1" md="6">
                         <FormGroup>
                           <label>Username </label>
                           <Input
                             placeholder="Username"
                             type="text"
                             name='username'
                             value={this.state.username}
                             onChange={this.myChangeHandler}
                           />
                         </FormGroup>
                       </Col>
                       <Col className="pl-1" md="6">
                         <FormGroup>
                           <label>Email address </label>
                           <Input placeholder="Email" type="email" 
                              name='email'
                              value={this.state.email}
                              onChange={this.myChangeHandler}
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
                             name='firstName'
                             value={this.state.firstName}
                             onChange={this.myChangeHandler}
                           />
                         </FormGroup>
                       </Col>
                       <Col className="pl-1" md="6">
                         <FormGroup>
                           <label>Last Name</label>
                           <Input
                             placeholder="Last Name"
                             type="text"
                             name='lastName'
                             value={this.state.lastName}
                             onChange={this.myChangeHandler}
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
                             name='address'
                             value={this.state.address}
                             onChange={this.myChangeHandler}
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
                             name='city'
                             value={this.state.city}
                             onChange={this.myChangeHandler}
                           />
                         </FormGroup>
                       </Col>
                       <Col className="px-1" md="4">
                         <FormGroup>
                           <label>Country</label>
                           <Input
                             placeholder="Country"
                             type="text"
                             name='country'
                             value={this.state.country}
                             onChange={this.myChangeHandler}
                           />
                         </FormGroup>
                       </Col>
                       <Col className="pl-1" md="4">
                         <FormGroup>
                           <label>Postal Code</label>
                           <Input 
                            placeholder="ZIP Code" 
                            type="number" 
                            name='zipCode'
                            value={this.state.zipCode}
                            onChange={this.myChangeHandler}
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
                              name='contactNumber'
                              value={this.state.contactNumber}
                              onChange={this.myChangeHandler}
                              />
                         </FormGroup>
                       </Col>
                         </FormGroup>
                       </Col>
                     </Row>
                      <Input type='hidden' name='sid' value={this.state.merchantCode} />
                      <Input type='hidden' name='mode' value='2CO' />
                      <input type='hidden' name='demo' value='Y' />

                     <Row>
                       <div className="update ml-auto mr-auto">
                         <Button
                           className="btn-round"
                           color="primary"
                           type="submit"
                         >
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
                     src={require("assets/img/header-logo.svg").default}
                   />
                 </div>
                 <CardBody>
                   <div className="author">
                     <a href="#pablo" onClick={(e) => e.preventDefault()}>
                       <img
                         alt="..."
                         className="avatar border-gray"
                         src={require("assets/img/bag.jpeg").default}
                       />
                       <h5 className="title">Order Summary</h5>
                     </a>
                     <div className="order-detail">
                       <p className="">Product Name</p>
                       <p className="">Grey Michael Handbag</p>
                     </div>
                     <div className="order-detail">
                       <p className="">Product Price</p>
                       <p className="">2600</p>
                     </div>
                     <div className="order-detail">
                       <p className="">Shipping </p>
                       <p className="">200</p>
                     </div>
                   </div>
                 </CardBody>
                 <CardFooter>
                   <hr />
                   <div className="button-container">
                     <Row>
                       <Col className="ml-auto" lg="3" md="6" xs="6">
                         <h5>
                           Total
                         </h5>
                       </Col>
                       <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                         
                       </Col>
                       <Col className="mr-auto" lg="3">
                         <h5>
                           2800 
                         </h5>
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
export default CheckoutPage 

