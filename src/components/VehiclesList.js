import React, {Component} from 'react';

export default class VehiclesList extends Component {
  constructor(props) {
    super(props);
  }

  render(){
   let vehicles = this.props.vehicles.map((vehicle) => {
     return(
     <div className="card">
       <p>Vehicle: {vehicle.name}
       </p>
       <p>
       Model: {vehicle.model}
       </p>
     <div className="card">
       <ul className="list">
         <li className="list_item">
           Manufacturer: {vehicle.manufacturer}
           </li>
         <li className="list_item">
           Class: {vehicle.class}
           </li>
         <li className="list_item">
           Passengers: {vehicle.passengers}
           </li>
         <li className="list_item">
           Crew: {vehicle.crew}
          </li>
         <li className="list_item">
           Length: {vehicle.length}
           </li>
         <li className="list_item">
           Max-speed: {vehicle.max_atmosphering_speed}
           </li>
         <li className="list_item">
           Cargo-Capacity: {vehicle.cargo_capacity}
           </li>
         </ul>
       </div>
     </div>
     )
   })
   
   return(
     <section className="vehicle_list">
       <div className="row">
         {vehicles}
       </div>
     </section>
   )
 }
}
