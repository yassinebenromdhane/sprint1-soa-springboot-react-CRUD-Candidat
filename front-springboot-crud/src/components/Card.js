import React from 'react';
import R1 from "../images/r1.jpg";
import services from '../sevices';
import { NavLink, useHistory } from 'react-router-dom';
import { BsTrash2 , BsFillEyeFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi'


const Card = (props) => {
  const history = useHistory();
  console.log(props)

  const remove = async (id) => {
    services.remove(id)
      .then(() => 
      { 
        history.push("/");
        console.log("deleted");
        
        
     })
      .catch(e => { console.log(e); });
  }
    return (
        <div className="col-4">
          <div Name="card" style={{ width: "18rem" }}>
            <img src={R1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text" > 
                {props.name}
              </p>
              <p className="card-text"> 
                {props.email}
              </p>
              <NavLink to={`/show/${props.id}`} type="submit" id="sidebarCollapse" className="btn btn-info button-ml">
                <BsFillEyeFill/>
                 </NavLink>
                 <NavLink to={`/edit/${props.id}`} type="button" id="sidebarCollapse" className="btn btn-success button-ml">
                 <FiEdit/>
                 </NavLink>
                 <NavLink to="/" type="submit" id="sidebarCollapse" className="btn btn-danger button-ml" onClick={()=>remove(props.id)}>
                 <BsTrash2/>
                 </NavLink>
            </div>
          </div>
        </div>
    )
}

export default Card
