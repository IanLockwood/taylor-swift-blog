// Stateful parent class
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { StaticTitle } from './StaticTitle';
import { TitleForm } from './TitleForm';


class EditableTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      postTitle: this.props.blogPost.title,
      postSlug: this.props.blogPost.slug,
      postID: this.props.blogPost.id,
      usedSlugs: this.props.blogPostSlugs
    };

    this.editTitle = this.editTitle.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.updatePost = this.updatePost.bind(this);
  }

  // Toggle for TitleForm component
  editTitle() {
    this.setState({
      editing: true
    });
  }

  // Toggle back for StaticTitle component
  cancelEdit() {
    this.setState({
      editing: false
    });
  }

  // New title, slug, and taken slugs pushed to state after database change
  updatePost(newTitle, newSlug, newUsedSlugs) {
    let oldSlug = this.state.postSlug;
    if (newSlug !== oldSlug) {
      this.setState({
        postTitle: newTitle,
        postSlug: newSlug,
        usedSlugs: newUsedSlugs
      });
    }
  }

  render() {
    if (this.state.editing) {
      return (
        <TitleForm titleName={this.state.postTitle} slugName={this.state.postSlug} postID={this.state.postID} usedSlugs={this.state.usedSlugs} cancelEdit={this.cancelEdit} updatePost={this.updatePost} />
      )
    } else {
      return (
        <StaticTitle titleName={this.state.postTitle} editTitle={this.editTitle} />
      )
    }
  }
}

export default EditableTitle;
