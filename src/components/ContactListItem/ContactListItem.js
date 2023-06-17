import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const ContactListItem = ({
  transferRenderListItem: { id, name, phone },
}) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div>
        <p>
          {name}:<span>{phone}</span>
        </p>
        <button
          className={css.item__button}
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

ContactListItem.propTypes = {
  transferRenderListItem: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
