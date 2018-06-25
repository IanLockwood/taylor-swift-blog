import React, { Component } from 'react';
import Checkmark from 'images/checkmark.svg';
import X from 'images/x.svg';

export class TitleForm extends Component {
  constructor(props) {
    super(props);

    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  handleCancelClick() {
    this.props.cancelEdit();
  }

  render() {
    return (
      <div>
        <div className="edit-icons-container">
          <div className="x-icon-container" onClick={this.handleCancelClick}>
            <img className="editing-icon" src={X} />
          </div>
          <div className="checkmark-icon-container">
            <img className="editing-icon" src={Checkmark} />
          </div>
        </div>

        <span className="post-title-input-background" defaultValue={this.props.titleName}></span>
        <input className="post-title-input" defaultValue={this.props.titleName}></input>
      </div>
    )
  }
}
