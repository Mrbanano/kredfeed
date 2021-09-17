import './NavbarItems.css'

function NavbarItems({ name, hrfe, icon, enable }) {
  return (
    <li
      className={
        enable !== 'disabled'
          ? ' NavbarItems-container NavbarItems-item-active '
          : 'NavbarItems-container'
      }
    >
      <a className="NavbarItems-item" href={hrfe}>
        <img src={icon} alt={name} />
      </a>
    </li>
  )
}

export default NavbarItems
