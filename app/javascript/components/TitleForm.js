import React, { Component } from 'react';
import Checkmark from 'images/checkmark.svg';
import X from 'images/x.svg';

export class TitleForm extends Component {
  constructor(props) {
    super(props);

    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleCancelClick() {
    this.props.cancelEdit();
  }

  handleKeyUp(e) {
    const currentTitle = e.target.value;
    let newSlug = currentTitle.replace(/[^\w\s]/g,'');
    newSlug = newSlug.replace(/\s+/g, '-').toLowerCase();

    console.log(newSlug);
    document.getElementById("liveSlug").innerHTML = newSlug;
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

        <span className="post-title-input-background"></span>
        <input className="post-title-input" defaultValue={this.props.titleName} onKeyUp={this.handleKeyUp}></input>

        <div className="live-slug-container">
          <div className="slug-prefix">slug: </div>
          <div id="liveSlug" className="live-slug">{this.props.slugName}</div>
        </div>
      </div>
    )
  }
}
