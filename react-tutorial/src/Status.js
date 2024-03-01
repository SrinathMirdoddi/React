import  {useState} from 'react';

const State = () => {

    const [name, setName] = useState('raaj');
    const [age, setAge] = useState(22);

    const handClick = () => {
        setName('saaraa');
        setAge(21);
    }

    return (
       

        <div className="home">
            <h2>Homepage</h2>
            <p>the name { name } and age is {age}</p>
            <button onClick={handClick}>click me</button>
        </div>
    );
}

export default State;