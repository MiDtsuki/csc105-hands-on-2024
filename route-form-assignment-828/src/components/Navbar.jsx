import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex gap-6">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/login" 
          className={({ isActive }) => 
            isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"
          }
        >
          Login
        </NavLink>
        <NavLink 
          to="/fav" 
          className={({ isActive }) => 
            isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"
          }
        >
          Favourites
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar