import React, { Component } from 'react';
import Checkmark from 'images/checkmark.svg';
import X from 'images/x.svg';

export class TitleForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="edit-icons-container">
          <div className="x-icon-container">
            <img className="editing-icon" src={X} />
          </div>
          <div className="checkmark-icon-container">
            <img className="editing-icon" src={Checkmark} />
          </div>
        </div>

        <h1>
          <div className="background-mark-container">
            <mark className="background-mark">hoopy doopy</mark>
          </div>
          <div className="post-title">
            <mark className="post-title-span">hoopy doopy</mark>
          </div>
        </h1>
      </div>
    )
  }
}
