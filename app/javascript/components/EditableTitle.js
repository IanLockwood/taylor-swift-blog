import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { StaticTitle } from './StaticTitle';
import { TitleForm } from './TitleForm';

class EditableTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.editTitle = this.editTitle.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  editTitle() {
    this.setState({
      editing: true
    });
  }

  cancelEdit() {
    this.setState({
      editing: false
    });
  }

  render() {
    if (this.state.editing) {
      return (
        <TitleForm titleName={this.props.titleName} cancelEdit={this.cancelEdit} />
      )
    } else {
      return (
        <StaticTitle titleName={this.props.titleName} editTitle={this.editTitle} />
      )
    }
  }
}

export default EditableTitle;
