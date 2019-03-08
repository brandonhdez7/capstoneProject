import React from 'react';

const SocialMediaLogin = (props) => {
  const { googleLogin, twitterLogin } = props;
  return (
    <div className="buttons">
      <button type="button" className="buttons" onClick={googleLogin}>
        <span className="fab fa-google"/> Sign in with Google
      </button>
      <button type="button" className="buttons" onClick={twitterLogin}>
        <span className="fab fa-twitter"/> Sign in with Twitter
      </button>
    </div>
  );
};

export default SocialMediaLogin;