import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './userCard.css';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loading = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-head">
          <div className="user-image">
            <Skeleton circle={true} height={150} width={150} />
          </div>
        </div>

        <div className="card-body">
          <div className="user-name">
            <Skeleton width={400} />
          </div>

          <div className="user-dob">
            <span className="user-age">
              <Skeleton width={100} />
            </span>
          </div>

          <div className="user-location-address">
            <span>
              <Skeleton width={300} />
            </span>
          </div>
        </div>

        <div className="card-foot">
          <div className="user-contact-info">
            <span>
              <FontAwesomeIcon color="#0fcdef" icon={faPhone} />
              <Skeleton width={100} />
            </span>
            <span>
              <FontAwesomeIcon color="#0fcdef" icon={faEnvelope} />
              <Skeleton width={100} />
            </span>
          </div>
        </div>
      </div>
      <button disabled={true}>Loading...</button>
    </div>
  );
};

export default Loading;
