import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext(); // 전역 상태 관리 Context 생성

export const useUserContext = () => useContext(UserContext);

// Provider 제공자
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};

export default UserContext;
