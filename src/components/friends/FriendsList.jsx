import PropTypes from "prop-types";
import css from "./FriendsList.module.css";
import { Friend } from "./Friend";

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((item) => (
        <Friend
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
