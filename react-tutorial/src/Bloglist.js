import { Link } from "@react-navigation/native";

 const Bloglist = ({ data, title}) => {
    // const data = props.data;
    // const title = props.title;

   // console.log(props,data);

    return (
        <div className="listed">
         <h1> {title} </h1>
        {data.map((core) =>(
          <div className="core-review" key={core.id}>     
            <Link to={'/blogs/${core.id}'}>
            <h2>this is in detail course {core.course}</h2>
            <h3>It is {core.model} path</h3>
            <p>depends on {core.platform} platform</p>
            </Link>
            {/* <button onClick={() => handleDelete(core.id)}>delete data</button> */}
      </div>      
        ))}
      </div>
    );
 }

 export default Bloglist;