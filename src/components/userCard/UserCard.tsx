import './userCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IUser } from '../../api/fetchUserApi';

interface Props {
  user: IUser;
  handleRefresh: () => void;
}

const UserCard = ({ user, handleRefresh }: Props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-head">
          <div className="user-image">
            <img src={user?.picture.large} alt="" />
          </div>
        </div>

        <div className="card-body">
          <div className="user-name">
            <span className="user-name-title">{user?.name.title} </span>
            <span className="user-name-full">
              {user?.name.first} {user?.name.last}
            </span>
          </div>

          <div className="user-dob">
            <span className="user-age">{user?.dob.age}y</span>
          </div>

          <div className="user-location-address">
            <span>
              {user?.location.city}, {user?.location.state},{' '}
              {user?.location.country}
            </span>
          </div>
        </div>

        <div className="card-foot">
          <div className="user-contact-info">
            <span>
              <FontAwesomeIcon color="#0fcdef" icon={faPhone} />
              {user?.phone}
            </span>
            <span>
              <FontAwesomeIcon color="#0fcdef" icon={faEnvelope} />
              {user?.email}
            </span>
          </div>
        </div>
      </div>
      <button onClick={handleRefresh} disabled={!user}>
        {user ? 'Refresh' : 'Refreshing....'}
      </button>
    </div>
  );
};

export default UserCard;
