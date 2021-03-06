/**
 * Created by v_songxiaodan on 2016/4/22.
 */
import React from 'react';
var ReactDOM = require('react-dom');
var marked = require('marked');
var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
        </div>
        );
    }
});
var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
                <Comment author="Pete Hunt">This is one comment</Comment>
                <Comment author="Jordan Walke">This is *another* comment</Comment>
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});

var Comment = React.createClass({
    rawMarkup: function () {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return {__html: rawMarkup};
    },
    render: function () {
        return (
            <div className="coment">
                <h2 className="commentAuthor">{this.props.author}</h2>
                <span dangerouslySetInnerHTML = {this.rawMarkup()} />
            </div>
        )
    }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);