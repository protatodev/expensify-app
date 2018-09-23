// Higher Order Component (HOC) - A component (HOC) that renders another component

// Benefits:
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return props => (
    <div>
      {!props.isAuthenticated && <p>You must log in to see your account details!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
}

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Welcome to your account"/>, document.getElementById('app'));