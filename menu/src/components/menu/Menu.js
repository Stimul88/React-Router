import { NavLink } from "react-router-dom";

export function Menu() {
  const items = [
    {id: 1, title: 'Главная', link: '/'},
    {id: 2, title: 'Дрифт-такси', link: '/drift'},
    {id: 3, title: 'Time Attack', link: '/timeattack'},
    {id: 4, title: 'Forza Karting', link: '/forza'},
  ]

  const active = ({isActive}) => isActive ? "menu__item menu__item-active" : "menu__item"

  return (
    <nav className="menu">
      {items.map(item =>
        <NavLink
          key={item.id}
          className={active}
          to={item.link}>
          {item.title}
      </NavLink>)}
    </nav>
  )
}