import { Link } from "react-router-dom";

const Navbar = () => {
  const title = "CodeMentorHub";
  return (
    <nav className="navbar">
      <Link to='/CodeMentorHubOld/home'>
        <h1>{title}</h1>
      </Link>
      
      <div className="links">
          <Link to='/CodeMentorHubOld/home'>Home</Link>
          <Link to='/CodeMentorHubOld/courses'>Courses</Link>
          <Link to='/CodeMentorHubOld/tests'>Tests</Link>
          <Link to='/CodeMentorHubOld/ourteams'>Our teams</Link>
          <Link to='/CodeMentorHubOld/discussions'>Discussions</Link>
          
    


        <a href="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Login</a>
      </div>
    </nav>
  );
}


 
export default Navbar;