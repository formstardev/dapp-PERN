import { useState, useEffect } from 'react';

const useLoggedInUserData = () => {
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('user');

    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setLoggedInUserData(parsedUserData);
    }
  }, []);

  return loggedInUserData;
};

export default useLoggedInUserData;
