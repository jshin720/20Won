import React from "react";
// import "./review_form.css";
import StarRating from "../rating/star_rating";

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      stars: this.props.review.stars, 
      body: this.props.review.body,
      title: this.props.review.title,
      reviewer_id: this.props.review.reviewer_id, 
      furniture_id: this.props.review.furniture_id,
      id: this.props.review.id
     };


    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBody = this.handleBody.bind(this)
    this.handleRating = this.handleRating.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
  }

  
  componentWillUnmount() {
    this.props.removeReviewErrors();
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.updateReview(this.state)
      .then(res => {
        if (!this.props.errors || Object.values(this.props.errors).length <= 0) {
          this.props.toggleEdit()
        }
      })
  }

  handleTitle(e) {
    this.setState(
      {
        title: e.target.value
      }
    )
  };

  handleBody(e) {
    this.setState(
      {
        body: e.target.value
      }
    )
  };

  handleRating(e) {
    this.setState(
      {
        stars: e.target.value
      }
    )
  };

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

  renderErrors() {
    if (!this.props.errors) {
      return null;
    }
    return (
      <div className="errors-container">
        {this.props.errors && Object.values(this.props.errors).length > 0 ? (
          <ul className="errors">
            {
              this.props.errors.map((error, idx) => {
                return (
                  <li key={idx} className="error" >
                    {error}
                  </li>
                )
              })
            }
          </ul>
        ) : ("")
        }
      </div>
    )
  }

  render() {
    console.log("edit", this.props)
    return (
      <div className="review">
        <div className="edit-review-container">
          <div className="edit-review-details">
            <form>
              <h2>{this.props.reviewer}
                <button type="submit" className="material-icons-outlined submit-edit" onClick={this.handleSubmit}>Submit</button>
                <button type="submit" className="material-icons-outlined cancel-edit" onClick={this.props.toggleEdit}>Close</button>
              </h2>

              <div className="edit-stars">
                <StarRating
                  handleRating={e => {
                    this.handleRating(e)
                  }}
                  status={"editing"}
                  rating={this.props.review.stars}
                />
              </div>
              <textarea
                onChange={this.handleTitle}
                placeholder="Title"
                value={this.state.title}
              ></textarea>
              <textarea
                onChange={this.handleBody}
                placeholder="Write your review here"
                value={this.state.body}
              ></textarea>
              <div>
                { this.renderErrors() }
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditReviewForm;


