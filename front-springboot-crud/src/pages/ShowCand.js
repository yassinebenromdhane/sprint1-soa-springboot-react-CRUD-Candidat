import React , {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import R1 from '../images/r1.jpg'
import services from '../sevices';


const ShowCand = () => {


  
  
  const { id } = useParams();
  const [cand, setCand] = useState({});

  useEffect(() => {
    getCandById();
  }, []);

  const getCandById = async () => {
    services.getOne(id)
    .then((res) => {
      setCand(res.data);
      console.log(cand);
    })
  }



    return (
        <div>
             <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Id Candidat {cand.idCand}</h1>
      <hr />
            <div className="container py-4">
     
      <div className='row'>
          <div className='col-6'>
          <img src={R1} className="img-thumbnail" style={{ width: "18rem" }} alt="..." />
          </div>
          <div className='col-6'>
          
      <ul className="list-group w-50">
        <li className="list-group-item">nom: {cand.nomCand} </li>
        <li className="list-group-item">email : {cand.email} </li>
        <li className="list-group-item">phone : {cand.phone} </li>
        <li className="list-group-item">age : {cand.age} </li>
        
       
      </ul>
          </div>
     

      </div>
      
    </div>
        </div>
    )
}

export default ShowCand
