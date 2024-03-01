const Home = () => {
const Handson = (a) => {
    console.log('hello, react', a);
}
const Handsonagain = (name, a) => {
    console.log('hello' + name, a.target);
}
    return (
        <div className="home">
            <h1>This is Web Environment</h1>
            <button onClick={Handson}>Click here</button>
<button onClick={(a) => Handsonagain('Pushpa', a)}>click here again</button>
        </div>
           );
}

export default Home;