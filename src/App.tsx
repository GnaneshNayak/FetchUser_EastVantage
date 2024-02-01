import { useEffect, useState } from 'react';
import UserCard from './components/userCard/UserCard';
import fetchUserData, { IUser } from './api/fetchUserApi';
import Loading from './components/userCard/Loading';

const App = () => {
  const [userData, setUserData] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const storedData = localStorage.getItem('userData');

        if (storedData) {
          setUserData(JSON.parse(storedData));
        } else {
          const data = await fetchUserData();
          setUserData(data);
          // localStorage.setItem('userData', JSON.stringify(data));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRefreshUser = async () => {
    localStorage.removeItem('userData');

    setLoading(true);

    try {
      const newData = await fetchUserData();
      setUserData(newData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <>
      <UserCard user={userData!} handleRefresh={handleRefreshUser} />
    </>
  );
};

export default App;
