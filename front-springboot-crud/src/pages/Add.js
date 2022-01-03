import React , {useState , useEffect} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import PostServices from "../PostServices";
import services from "../sevices";


const Add = () => {
  
  
 const [nomCand, setNomCand] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');
 const [age, setAge] = useState(0);
 const [posts, setPosts] = useState([]);
 const [post, setPost] = useState({})
 const history = useHistory();
 
 useEffect(() => { getPostes(); }, []);
  
 const getPostes = async () => {
   PostServices.getAll()
   .then((res) => {
      setPosts(res.data);
      console.log(posts);
  })
   .catch(e => { console.log(e); });
 }

 useEffect(() => {
   console.log(posts)
 }, [posts])

 const postChange = (e) => {
  PostServices.getOne(e.target.value)
  .then((res) => {
    setPost(res.data.idPost);
  })
};

const save = async (e) => {
  e.preventDefault();
  const candidat = {nomCand , email , phone , age }
  services.create(candidat)
    .then(() => {
      history.push("/");
      console.log('added succefully');
      console.log(candidat);
    })
    .catch(e => { console.log(e); });
  
}

  return (
    <div>
      <div class="container mt-5 mb-5 d-flex justify-content-center">
        <div class="card px-1 py-4">
          <div class="card-body">
            <h6 class="card-title mb-3">Add Candidat</h6>

            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label for="name">Name</label>{" "}
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Name"
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
                      placeholder="phone"
                      onChange={(e) => setPhone(e.target.value)}
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
                      onChange={postChange}
                    >
                      <option selected>select a post</option>
                      {posts.map(p=> <option value={p.idPost} key={p.idPost}> {p.idPost+" - "+p.nomPost}
                      </option>)}
                    </select>{" "}
                  </div>
                </div>
              </div>
            </div>

            <button
              class="btn btn-info btn-block confirm-button costum-btn"
              onClick={save}
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

export default Add;
