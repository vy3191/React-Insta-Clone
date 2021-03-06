import React, { Component } from 'react';
import Card from './Card.js';
import CommentSection from '../CommentSection/Comment.js';
import PropTypes from 'prop-types';

class PostContainer extends Component {
    render() {
        
        return(
            <div className='post-container'>
              <div className='container'>
                <Card  card={this.props.card} />
                <CommentSection comments={this.props.card.comments} likes={this.props.card.likes}  />
               </div>
            </div>
        );
    }
}
PostContainer.propTypes = {
    card:PropTypes.shape({
        likes:PropTypes.number.isRequired,
        comments:PropTypes.array.isRequired,
        // key:PropTypes.number.isRequired
    })
}
export default PostContainer;
