/**
 * Created by v_songxiaodan on 2016/4/22.
 */
import React from 'react';
var ReactDOM = require('react-dom');

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
                Hello, world! I am a CommentList.
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

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);