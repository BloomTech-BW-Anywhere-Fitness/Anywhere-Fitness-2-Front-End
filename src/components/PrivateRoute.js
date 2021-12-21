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
                //If the user is authenticated then it will display the child components.
              ) : (
                <Redirect
                  to={{
                    pathname: '/login',
                    // state: { from: location }
                //If the user isn't authenticated, this redirects said user to Login so they can login.
                  }}
                />
              ))
        }
      />
    );
  }
  
  export default PrivateRoute;