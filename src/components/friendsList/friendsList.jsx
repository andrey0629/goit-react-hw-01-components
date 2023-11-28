import {
  IsOnlineEl,
  FriendsListWrap,
  FriendsListItem,
} from './friendsList.styled';
import PropTypes from 'prop-types';
export const FriendsList = props => {
  return (
    <div>
      <MarkupFriendsListWrap {...props} />
    </div>
  );
};

function MarkupFriendsListWrap({ friends }) {
  const markupFriendsList = friends.map(({ id, avatar, name, isOnline }) => {
    return (
      <FriendsListItem key={id}>
        {isOnline ? (
          <IsOnlineEl style={{ backgroundColor: 'green' }}></IsOnlineEl>
        ) : (
          <IsOnlineEl style={{ backgroundColor: 'red' }}></IsOnlineEl>
        )}
        <img src={avatar} alt="User avatar" width={48} />
        <p>{name}</p>
      </FriendsListItem>
    );
  });
  return <FriendsListWrap>{markupFriendsList}</FriendsListWrap>;
}

MarkupFriendsListWrap.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
