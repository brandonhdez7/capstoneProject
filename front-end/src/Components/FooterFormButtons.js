import React from 'react';
import { browserHistory } from 'react-router-dom';
const FooterButtons = (props) => {
  const { submitLabel, otherLabel, goToLink } = props;
  return (
    <div className="buttons">
      <button type="submit" >{submitLabel || 'Submit'}</button>
      <button type="button" onClick={() => {
        props.history.push(goToLink || "/");
      }}>
        { otherLabel || 'Go back'}
      </button>
    </div>
  );
};

export default FooterButtons;
