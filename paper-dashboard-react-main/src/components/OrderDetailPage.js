// import React, { Component } from 'react';
// import {
//   Card,
//   CardBody,
//   CardFooter,
//   Row,
//   Col,
// } from "reactstrap";

// class OrderDetailPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         order:{
//             name: "Grey Michael Handbag",
//             price: "2600",
//             shipping:"200",
//             image: "header-logo.svg"
//         }
//     }
//   }
//   render() {   
//     return (
//     <div>      
//         <Card className="card-user">
//             <div className="image">
//             <img
//             className="order-summary"
//                 alt="..."
//                 src={require(`assets/img/${this.state.image}`).default}
//             />
//             </div>
//             <CardBody>
//             <div className="author">
//                 <a href="#pablo" onClick={(e) => e.preventDefault()}>
//                 <img
//                     alt="..."
//                     className="avatar border-gray"
//                     src={require("assets/img/bag.jpeg").default}
//                 />
//                 <h5 className="title">Order Summary</h5>
//                 </a>
//                 <div className="order-detail">
//                 <p className="">Product Name</p>
//                 <p className="">{this.state.name}</p>
//                 </div>
//                 <div className="order-detail">
//                 <p className="">Product Price</p>
//                 <p className="">{this.state.price}</p>
//                 </div>
//                 <div className="order-detail">
//                 <p className="">Shipping </p>
//                 <p className="">{this.state.shipping}</p>
//                 </div>
//             </div>
//             </CardBody>
//             <CardFooter>
//             <hr />
//             <div className="button-container">
//                 <Row>
//                 <Col className="ml-auto" lg="3" md="6" xs="6">
//                     <h5>
//                     Total
//                     </h5>
//                 </Col>
//                 <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                    
//                 </Col>
//                 <Col className="mr-auto" lg="3">
//                     <h5>
//                     {this.state.shipping}+ {this.state.price}
//                     </h5>
//                 </Col>
//                 </Row>
//             </div>
//             </CardFooter>
//         </Card>
//     </div>
 
//      );
//   }
// }
// export default OrderDetailPage 

