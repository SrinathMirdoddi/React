import  {Link} from "react-router-dom"

const Notfound = () => {

    return (
      <div className="not found">
       <h2>Sorry</h2>
       <p>This page cannot be loaded</p>
       <Link to="/">Back to Home page</Link>
      </div>
    );
}

export default Notfound;