import axios from 'axios';

export interface IUser {
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  phone: string;
  email: string;
  dob: {
    age: number;
  };

  picture: {
    large: string;
  };
}

interface User {
  results: IUser[];
}

const fetchUserData = async () => {
  try {
    const res = await axios.get<User>('https://randomuser.me/api');

    const { name, location, picture, email, dob, phone } = res.data.results[0];

    const formattedData = {
      name: { title: name.title, first: name.first, last: name.last },
      dob: { age: dob.age },
      location: {
        city: location.city,
        state: location.state,
        country: location.country,
      },
      email,
      phone,
      picture: {
        large: picture.large,
      },
    };

    localStorage.setItem('userData', JSON.stringify(formattedData));

    return formattedData;
  } catch (error) {
    console.log('Error fetching:', error);
    throw error;
  }
};

export default fetchUserData;
