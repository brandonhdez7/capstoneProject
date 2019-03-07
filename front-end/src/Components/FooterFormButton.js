import React from 'react';
import '../Styles/App.css'

const FooterButton = (props) => {
  const { submitLabel, otherLabel, goToLink, history } = props;
  return (
    <div className="buttons">
      <button type="submit" >{submitLabel}</button>
      <button type="button"  onClick={() => {
        history.push(goToLink);
      }}>{otherLabel}</button>
    </div>
  );
};

export default FooterButton;
