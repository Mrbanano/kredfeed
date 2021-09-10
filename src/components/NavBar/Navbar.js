import { NavItems } from '../../Data/dataPages'
import NavbarItems from '../items/NavbarItems/NavbarItems'

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          {NavItems.map((item) => (
            <NavbarItems
              key={item.name + item.hrfe}
              name={item.name}
              hrfe={item.hrfe}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
