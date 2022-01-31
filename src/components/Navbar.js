import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const lists = {
    textDecoration: 'none',
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30vw',
    paddingRight: '2rem',
    marginRight: '2rem',
  };

  const navContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100vw',
    height: '10vh',
    paddingTop: '0.8vh',
    paddingLeft: '2vw',
    backgroundColor: 'bisque',
  };

  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/details',
      text: 'details',
    },
  ];

  return (
    <nav className="navBar" style={navContainer}>
      <h1>Football Fan Companion (FFC)</h1>
      <ul style={lists}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
