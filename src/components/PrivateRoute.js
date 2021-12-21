import {
    Route,
    Redirect
  } from 'react-router-dom';
  
  function PrivateRoute({ children, ...rest }) {
      //put in isAuthenticated prop
    return (
      <Route
        {...rest}
        render={
          ({ location }) => (
            isAuthenticated
              ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: '/login',
                    // state: { from: location }
                  }}
                />
              ))
        }
      />
    );
  }
  
  export default PrivateRoute;