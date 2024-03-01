import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const Blogdetails = () => {
   const {id} = useParams();
   const {data:blogs} = useFetch('http://localhost:8000/data/' +id);
   const history = useHistory();

const handleClick = () => {
  fetch('http://localhost:8000/data/' + blogs.id, {
    method: 'DELETE'
  }).then(() => {
    history.push('/create');
  })
}
 
    return(
      <div className = "blog-details"> 
       <h2>Welcome to the blogs - {id}</h2>
       { blogs && (
        <article>
        <h2>{ blogs.title}</h2>
        <button onClick={handleClick}>delete</button>
        </article>
       )}
      </div>
    );
}

export default Blogdetails;