import React, { Component } from 'react';
import '../Components/home/home.css'

export default class SimpleBox extends Component {
  render() {
    const { title, body, footer } = this.props;
    return (
      <div className="container">
            <div className="card-block">
              <div className="card-title">
                {title}
              </div>
              <div className="card-body">
                {body}
              </div>
              {footer && <div className="card-footer">
                {footer}
              </div>}
            </div>
      </div>
    );
  }
}
