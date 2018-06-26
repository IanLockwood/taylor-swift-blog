import React, { Component } from 'react';
import Checkmark from 'images/checkmark.svg';
import X from 'images/x.svg';

export class TitleForm extends Component {
  constructor(props) {
    super(props);

    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleCancelClick() {
    this.props.cancelEdit();
  }

  getNewSlug(title) {
    let newSlug = title.replace(/[^\w\s]/g,'');
    newSlug = newSlug.replace(/\s+/g, '-').toLowerCase();
    return newSlug;
  }

  handleKeyUp(e) {
    let checkmark = document.getElementById("checkmarkID");
    let liveSlug = document.getElementById("liveSlug");
    const currentTitle = e.target.value;

    let newSlug = this.getNewSlug(currentTitle);

    if (newSlug === '') {
      checkmark.classList.add("checkmark-icon-container--disabled");
      liveSlug.classList.add("live-slug--empty");
      liveSlug.innerHTML = "please enter a post title";
    } else {
      checkmark.classList.remove("checkmark-icon-container--disabled");
      liveSlug.classList.remove("live-slug--empty");
      liveSlug.innerHTML = newSlug;
    }
  }

  handleSubmitClick() {
    let checkmark = document.getElementById("checkmarkID");
    let newTitle = document.getElementById("postTitle").value;
    let newSlug = this.getNewSlug(newTitle);
    let scopeProps = this.props;

    if (newSlug !== '') {
      $.ajax({
        type: "POST",
        url: '/blog_posts/' + scopeProps.postID,
        method: "PUT",
        data: {blog_post: {'title': newTitle, 'slug': newSlug} },
        dataType: 'json'
      }).done( function() {
        window.history.replaceState({slug: newSlug}, newTitle, newSlug);
        scopeProps.updatePost(newTitle, newSlug);
        scopeProps.cancelEdit();
      })
    }
  }

  render() {
    return (
      <div>
        <div className="edit-icons-container">
          <div className="x-icon-container" onClick={this.handleCancelClick}>
            <img className="editing-icon" src={X} />
          </div>
          <div id="checkmarkID" className="checkmark-icon-container" onClick={this.handleSubmitClick}>
            <img className="editing-icon" src={Checkmark} />
          </div>
        </div>

        <span className="post-title-input-background"></span>
        <input id="postTitle" className="post-title-input" defaultValue={this.props.titleName} onKeyUp={this.handleKeyUp}></input>

        <div className="live-slug-container">
          <div className="slug-prefix">slug: </div>
          <div id="liveSlug" className="live-slug">{this.props.slugName}</div>
        </div>
      </div>
    )
  }
}
