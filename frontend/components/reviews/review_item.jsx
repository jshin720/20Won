import React from 'react';
// import "./review_form.css"
import EditReviewForm from './edit_review';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editing: false }
    this.handleDelete = this.handleDelete.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    console.log('reviewItem', props)
  }

  componentDidMount() {
    // this.props.fetchUser(this.props.review.reviewer_id);
  }


  populateStars() {
    let rating = []

    // populate gold stars
    for (let i = 0; i < this.props.review.stars; i++) {
      rating.push(<span key={i} className="review-item-rating">★</span>)
    }

    // populate empty stars
    while (rating.length < 5) {
      rating.push(<span key={rating.length} className='ex-review-item-rating'>★</span>)
    }

    return rating;
  }

  handleDelete() {
    this.props.deleteReview(this.props.review)
  }

  toggleEdit() {
    this.setState({ editing: !this.state.editing })
  }


  render() {

    // if (this.props.users !== this.props.currentUser.id) return null;

    
    let reviewer = this.props.users[this.props.review.reviewer_id].first_name; // shows the name of the reviewer

    let buttons =
      <>
        <button type="submit" className="material-icons-outlined edit-buttons" onClick={this.toggleEdit}>edit</button>
        <button type="submit" className="material-icons-outlined edit-buttons" onClick={this.handleDelete}>delete</button>
      </>

    return (

      <li>
        {this.state.editing ? <EditReviewForm toggleEdit={this.toggleEdit} review={this.props.review} updateReview={this.props.updateReview} errors={this.props.errors} removeReviewErrors={this.props.removeReviewErrors} /> :
          <div className="review">
            <div className="review-details">
              <h2>{reviewer} {this.props.review.reviewer_id === this.props.currentUser.id ? buttons : null}</h2>
              <div className="user-rating">
                {this.populateStars()}
              </div>
              <h3 id="review-title">{this.props.review.title}</h3>
              <h3 id="review-description">{this.props.review.body}</h3>
            </div>
        
          </div>
        }
      </li>
    )
  }


}





export default ReviewItem;