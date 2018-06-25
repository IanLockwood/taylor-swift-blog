import React, { Component } from 'react';
import Pencil from 'images/pencil.svg'

export class StaticTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="pencil-icon-container">
          <img className="pencil-icon" src={Pencil} />
        </div>

        <h1>
          <div className="background-mark-container">
            <mark className="background-mark">{this.props.titleName}</mark>
          </div>
          <div className="post-title">
            <mark className="post-title-span">{this.props.titleName}</mark>
          </div>
        </h1>
      </div>
    )
  }
}
