/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: [],
  }

  deleteComment = id => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== id),
    })
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachContact => {
        if (id === eachContact.id) {
          //   eachContact.isFavorite = !eachContact.isFavorite
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isFavorite: false,
      date: new Date(),
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, comment, commentsList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Comments</h1>

          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            alt="comments"
          />
          <form className="contact-form-container" onSubmit={this.onAddComment}>
            <p className="paragraph">Say something about 4.o Technologies</p>
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Your Name"
            />
            <textarea
              className="input"
              value={comment}
              onChange={this.onChangeComment}
              placeholder="Your Comment"
            />
            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
          <div>
            <p className="paragraph">{commentsList.length} Comments</p>
            <div>
              {commentsList.map(eachContact => (
                <CommentItem
                  key={eachContact.id}
                  commentDetails={eachContact}
                  toggleIsFavorite={this.toggleIsFavorite}
                  onChange={this.deleteComment}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
