import React, { Component } from 'react'
import { withTranslation } from "react-i18next";
import ADriver from './aDriver';
 class CarTable extends Component {
   constructor() {
     super();

     this.state = {
       isActive2: false,
       isActive3: false,
       isActive: false,
     };
   }
   handleToggl = () => {
     this.setState({ isActive2: !this.state.isActive2 });
     this.handleToggle()
   };
   handleToggle = () => {
     this.setState({ isActive: !this.state.isActive });
   };
   handleTogg = () => {
     this.setState({ isActive3: !this.state.isActive3 });
   };
   render() {
     const items = this.props.items;
     return (
       <div>
         <table className="table table-striped table-hover tb shadow-sm">
           <thead>
             {" "}
             <tr>
               <th scope="col">#</th>
               <th scope="col">{this.props.t("Cn")}</th>
               <th scope="col">{this.props.t("CModel")}</th>
               <th scope="col"> {this.props.t("Cpn")}</th>{" "}
               <th scope="col">{this.props.t("D")}</th>{" "}
             </tr>{" "}
           </thead>
           <tbody>
             <tr>
               <th scope="row">#</th>
               <td onClick={this.handleTogg}>Toyota</td>
               <td>2012</td>
               <td>74-ZTU-ABJ</td>
               {/* {items.map((item) => { */}
                  <td>Maduka</td>;
               {/* })} */}
             </tr>

             {items.map((item) => {
               return (
                 <tr>
                   <th scope="row">#</th>
                   <td onClick={this.handleToggle}>{item.name}</td>
                   <td>{item.model}</td>
                   <td>{item.plateNum}</td>
                   <td>{item.driver}</td>
                 </tr>
               );
             })}
           </tbody>
         </table>
         {this.state.isActive ? (
           <div className="box">
             {items.map((item) => {
               return (
                 <>
                   <p className="boxxx">Name: {item.name}</p>
                   <p className="boxxx">Model: {item.model}</p>
                   <p className="boxxx">plateNum:{item.plateNum}</p>
                   <p className="boxxx">Assigned Driver: {item.driver}</p>
                 </>
               );
             })}
             <button className="btnnn" onClick={this.handleToggl}>
               Assign Driver
             </button>
           </div>
         ) : null}
         {this.state.isActive3 ? (
           <div className="box">
             <>
               <p className="boxxx">Name: Toyota</p>
               <p className="boxxx">Model: 2012</p>
               <p className="boxxx">plateNum:74-ZTU-ABJ</p>
               {/* {items.map((item) => { */}
                  <p className="boxxx">Assigned Driver: Maduka</p>
               {/* })} */}
             </>

             {/* <button className="btnnn" onClick={this.handleToggl}>
               Assign Driver
             </button> */}
           </div>
         ) : null}
         {/* <div className="box">
           {items.map((item) => {
             return <p>Name: {item.name}</p>;
           })}
           <button onClick={this.handleToggl}>Assign Driver</button>
         </div> */}
         {this.state.isActive2 ? <ADriver /> : null}
       </div>
     ); 
   }
 }
export default withTranslation()(CarTable)