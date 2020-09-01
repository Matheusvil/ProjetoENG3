//import React, { useContext } from 'react';
import React from 'react';
import Login from '../../components/login/index';
// import { getUser } from '../../api';
// import { login } from '../../auth';
// import { AuthContext } from '../../context/auth';

const Logar = (props) => {
//   const [, setAuth] = useContext(AuthContext);
//   const sendUser = async (user) => {
//     const { data: response } = await getUser(user);
//     login(response);
//     setAuth(response);
//     props.history.push('/catalog');
//   };
  return (
    <div className="container">
      <Login />
    </div>
  );
};

export default Logar;
