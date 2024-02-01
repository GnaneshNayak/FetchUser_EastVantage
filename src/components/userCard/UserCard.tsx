import './userCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const UserCard = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-head">
          <div className="user-image">
            <img src="/vite.svg" alt="" />
          </div>
        </div>

        <div className="card-body">
          <div className="user-name">
            <span className="user-name-title">Mr. </span>
            <span className="user-name-full">Gnanesh nayak</span>
          </div>

          <div className="user-dob">
            <span className="user-age">12-09-1998</span>
          </div>

          <div className="user-location-address">
            <span>melur, karantaka, India</span>
          </div>
        </div>

        <div className="card-foot">
          <div className="user-contact-info">
            <span>
              <FontAwesomeIcon color="#0fcdef" icon={faPhone} />
              32332322
            </span>
            <span>
              <FontAwesomeIcon color="#0fcdef" icon={faEnvelope} />
              asasdkjkd@gmail.com
            </span>
          </div>
        </div>
      </div>
      <button>New User</button>
    </div>
  );
};

export default UserCard;
