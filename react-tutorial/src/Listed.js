import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';

const Listed = () => {
  
  const { id } = useParams();
  const {data:data, isPending, error} = useFetch('http://localhost:8000/data' + id);
  //  [
  //   { course:'java', model:'programming', platform:'backend', id:1 },
  //   { course:'python', model:'scripting', platform:'backend', id:2 },
  //   { course:'react', model:'UI', platform:'frontend', id:3 },
  //   { course:'SQL', model:'qeury', platform:'DB', id:4 }
  //  ]

   //const [name, setName] = useState("ram");

// const handleDelete = (id) => {  
//   const newData = data.filter(core => core.id !== id);
//   setData(newData);
// }
  return (
    <div className="listed">
   { error && <div>{ error }</div> }
    { isPending && <div>Loading...</div> }
    {/* { data && <Bloglist  data={data} title = "All the platforms" /> }   */}
     {/* <Bloglist  data={data.filter((datas) => datas.platform === 'frontend')} title = "platfroms data"/> */}
     {/* <button onClick={() => setName('rajaa')}>modify</button> */}
     { data && (
      <article>
      <h2>title of technology is { data.course }</h2>
      <p>head of platform { data.platform }</p>
      <div>{ data.model }</div>
      </article>
     )}
     </div>
  );
}

export default Listed;