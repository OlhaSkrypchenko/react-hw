import { NavLink } from 'react-router-dom';
import './category.css'

function Category({ title }) {
  return (
    <NavLink
      to={title === 'All' ? '/' : `/${title.toLowerCase()}`}
      className={`category-title ${({ isActive }) =>
        isActive ? 'active' : ''}`}>
      {title}
    </NavLink>
  );
}

export default Category;
