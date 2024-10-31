import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';

const MenuLink = ({ item, path, location, icon, isExpanded, onClick }) => {
  const isActive = location.pathname === path;

  return (
    <Link 
      to={path} 
      onClick={onClick}
      className="block"
    >
      <div
        className={`
          flex items-center gap-3 p-3 rounded transition-all duration-300 transform
          ${isActive 
            ? 'bg-green-700 text-white scale-105 shadow-lg' 
            : 'bg-white hover:bg-green-700 hover:text-white hover:scale-105'
          }
        `}
      >
        <div className="transition-transform duration-300">
          {isActive ? (
            <CheckCircleIcon className="text-white" />
          ) : (
            icon
          )}
        </div>

        {isExpanded && (
          <h2 className={`
            transition-opacity duration-300 
            ${isExpanded ? 'opacity-100' : 'opacity-0'}
          `}>
            {item}
          </h2>
        )}
      </div>
    </Link>
  );
};

MenuLink.propTypes = {
  item: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  icon: PropTypes.element.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuLink;