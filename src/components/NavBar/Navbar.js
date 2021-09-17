import './Navbar.css'
import { NavItems, AvatarData, logoutData } from '../../Data/dataPages'
import NavbarItems from '../items/NavbarItems/NavbarItems'
import Logout from '../items/Buttons/Logout'
import Avatar from '../items/Avatar'

function Navbar() {
  return (
    <header className="NavBar">
      <nav className="NavBar-container">
        <Avatar name={AvatarData.name} icon={AvatarData.icon} />
        <ul className="NavBar-list">
          {NavItems.map((item) => (
            <NavbarItems
              className="NavBar-item"
              key={item.name + item.hrfe}
              name={item.name}
              hrfe={item.hrfe}
              icon={item.icon}
              enable={item.status}
            />
          ))}
        </ul>
        <Logout
          icon={logoutData.icon}
          url={Logout.url}
          name={logoutData.name}
        />
      </nav>
    </header>
  )
}

export default Navbar
