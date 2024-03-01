const Home = () => {
    let name = "Berlin";

     const handlEvent = () => {
        name = "taiwan";
        console.log('Welcome react on strap', name);
     }
      const handleventAgain = (name,a) => {
        console.log('hello' + name, a.target);
      }
    return(
        <div className="home">
            <h2>Home page</h2>
                <button onClick={handlEvent}>Click me</button>
                <p>{ name }</p>
              <button onClick={(a)=>handleventAgain(' colfornia', a)}>Click me Again</button>  
        </div>
    );
}

export default Home;