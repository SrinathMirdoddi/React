import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('servinomker');
    const[isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const blogs = { title, body, author };
      
      setIsPending(true);

      fetch('http://localhost:8000/data', {
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(blogs)
      }).then(() => {
        console.log("blogs are added");
        setIsPending(false)

        history.push('/blogs/:10000');
      })
    }
    
    return (
        <div className="create">
            <h2>It is a new Blog</h2>
           <form onSubmit={handleSubmit}>
            <label>Blogs title: </label>
            <input type = "text" value={title} required onChange={(e)=>setTitle(e.target.value)}/>
            <label>Blogs body: </label>
            <textarea required value={body}  onChange={(e)=>setBody(e.target.value)}/>
            <label>Bloghs Author: </label>
            <select value= {author} onChange={(e)=>setAuthor(e.target.value)}>
                <option value="marionjsopkerlin">marionjsopkerlin</option>
                <option value="kothygerson">kothygerson</option>
                <option value="servinomker">servinomke</option>
            </select>
          { !isPending && <button>Add Blogs</button> }
          { isPending && <button disabled>Adding blogs...</button> }
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
           </form>
        </div>
    );
}

export default Create;