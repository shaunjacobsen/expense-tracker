// higher order components
// are components that render other components

import React from 'react';
import ReactDOM from 'react-dom';

// non-HOC component
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Info is: {props.info}</p>
  </div>
);

// HOC component
const WithAdminWarning = (WrappedComponent) => {
  // return the component here
  return (props) => (
    <div>
      {props.isAdmin && <p>This is privileged information.</p>}
      <WrappedComponent {...props} />
    </div>
  );
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (<WrappedComponent {...props} />) : (<p>You must log in to see this</p>)}
    </div>
  );
}

const AdminInfo = WithAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'));

