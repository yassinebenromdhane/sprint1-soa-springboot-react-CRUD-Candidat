import React , {useState , useEffect} from "react";
import { useHistory , useParams } from "react-router-dom";
import services from "../sevices";

const EditCand = () => {
  const [nomCand, setNomCand] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState(0);
  const [post, setPost] = useState({});
  const { id } = useParams();

  const [cand, setCand] = useState({ nomCand :"",
                                     email:"",
                                     phone :"",
                                    age :0 });

  const history = useHistory();

  const updateCand = async (e) => {
    e.preventDefault();
    const candid = {nomCand , email , phone , age }
    console.log(candid);
    services.update(candid)
      .then(() => { history.push("/"); })
      .catch(e => { console.log(e); });
  }

  useEffect(() => {
    getCandById();
  }, []);

  const getCandById = async () => {
    services.getOne(id)
      .then((res) => {setCand(res.data);})
  }



  return (
    <div>
      <div class="container mt-5 mb-5 d-flex justify-content-center">
        <div class="card px-1 py-4">
          <div class="card-body">
            <h6 class="card-title mb-3">{cand.idCand}</h6>

            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label htmlFor="name">{cand.nomCand}</label>{" "}
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Name"
                    defaultValue={cand.nomCand}
                    onChange={(e) => setNomCand(e.target.value)}
                  />{" "}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <div class="input-group">
                    {" "}
                    <input
                      class="form-control"
                      type="email"
                      defaultValue={cand.email}
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <div class="input-group">
                    {" "}
                    <input
                      class="form-control"
                      type="number"
                      defaultValue={cand.phone}
                      placeholder="phone"
                      onChange={(e) => setPhone(e.target.value)}
                     required/>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <div class="input-group">
                    {" "}
                    <input
                      class="form-control"
                      type="number"
                      defaultValue={cand.age}
                      placeholder="age"
                      onChange={(e) => setAge(e.target.value)}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <div class="input-group">
                    {" "}
                    <select
                      class="form-control"
                      aria-label="Default select example"
                      value={post}
                      
                    >
                      <option selected>select a post</option>
                     
                     
                    </select>{" "}
                  </div>
                </div>
              </div>
            </div>

            <button
              class="btn btn-info btn-block confirm-button costum-btn"
              onClick={updateCand}
              type="submit"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCand;
