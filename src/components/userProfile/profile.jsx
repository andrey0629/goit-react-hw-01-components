import PropTypes from 'prop-types';
import {
  Container,
  StatsList,
  StatsQuantity,
  StatsItem,
  UserAvatarThumb,
  FontName,
  FontTag,
} from './profile.styled';
export const Profile = ({ props }) => {
  return (
    <Container>
      <UserCard {...props} />
      <Stats {...props} />
    </Container>
  );
};

function UserCard({ avatar, username, tag, location }) {
  return (
    <>
      <UserAvatarThumb>
        <img src={avatar} alt={username} width={150} height={150}></img>
      </UserAvatarThumb>
      <FontName>{username}</FontName>
      <FontTag>@{tag}</FontTag>
      <FontTag>{location}</FontTag>
    </>
  );
}

function Stats({ stats }) {
  return (
    <StatsList>
      <StatsItem>
        Followers<StatsQuantity>{stats.followers}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        Views<StatsQuantity>{stats.views}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        Likes<StatsQuantity>{stats.likes}</StatsQuantity>
      </StatsItem>
    </StatsList>
  );
}
Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
