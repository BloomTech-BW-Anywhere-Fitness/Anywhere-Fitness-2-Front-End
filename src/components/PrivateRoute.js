import {
    Route,
    Redirect
  } from 'react-router-dom';

  //Will wrap different routes around this when we have authentication set up. The authentication boolean is set up in App.js.
  
  function PrivateRoute({ children, authed, ...rest }) {
    return (
      <Route
        {...rest}
        render={
          ({ location }) => (
            authed
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