import React , {useEffect , useState} from "react";
import Card from "./Card";
import services from "../sevices";


const Items = () => {
 
  const [candidats, setCandidats] = useState([]);
  const [value, setValue] = useState('');
  
  
    useEffect(() => {
      services.getAll()
        .then(res => {
          console.log(res);  
       
          if (res.status === 200) {
            setCandidats(res.data);
            console.log(candidats);
            
            
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    useEffect(() => {
     console.log(candidats)
    }, [candidats]);

  
    
    
     const filterInput = candidats.filter((cand) => {
      return (cand.nomCand.toLowerCase().includes(value.toLowerCase()) )
    })


  return (
    <div>
      {/*search*/}
      <div class="row" style={{ marginLeft: "150px" }}>
      <div class="col-sm-12">
        <div class="form-group">
          <div class="input-group">
            {" "}
            <input value={value} class="form-control" type="email" placeholder="email" onChange={(e) => setValue(e.target.value)} />{" "}
            <button type="submit" className="btn btn-info">
              <i className="fas fa-align-left"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*search*/}
      <div className="row" style={{ marginLeft: "150px" }}>
        { filterInput ? 
         filterInput.map((cand) => 
         <Card  name={cand.nomCand} email ={cand.email} id={cand.idCand}/>
         )
        : candidats.map((cand) => 
        <Card  name={cand.nomCand} email ={cand.email} id={cand.idCand}/>
        )}
        
      </div>
    </div>
  );
};

export default Items;
