import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className = "Navbar">
            <h1>The Dojo Blog</h1>
            <div classname="links">
                <Link to="/c">Home</Link>
                <br></br>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}

export default Navbar;