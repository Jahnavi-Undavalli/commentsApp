import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, toggleIsFavorite} = props
  const {id, name, comment, isFavorite, date, initialClassName} = commentDetails

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const postedTime = formatDistanceToNow(date)

  const colorClassName = isFavorite ? 'text_blue' : 'text_white'

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }

  const onDeleteButton = () => {
    // eslint-disable-next-line no-undef
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p className={initialClassName}>{name[0].toUpperCase}</p>
        <p>{name}</p>
        <p className="time">{postedTime} ago</p>
      </div>
      <p className="mobile-no-value">{comment}</p>
      <button
        type="button"
        className="favorite-icon-container"
        onClick={onClickFavoriteIcon}
      >
        <img src={starImgUrl} className="favorite-icon" alt="like" />
        <p className={colorClassName}>Like</p>
      </button>
      <button
        type="button"
        className="button"
        onClick={onDeleteButton}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
          className="favorite-icon"
          alt="delete
"
        />
      </button>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
