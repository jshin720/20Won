import React from 'react';
// import "./review_form.css"
import StarRating from '../rating/star_rating';

class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewer_id: this.props.currentUser.id,
      furniture_id: this.props.furniture.id,
      title: "",
      body: "",
      stars: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  componentWillUnmount() {
    this.props.removeReviewErrors();
  }

  handleBody(e) {
    this.setState(
      {
        body: e.target.value
      }
    )
  };

  handleTitle(e) {
    this.setState(
      {
        title: e.target.value
      }
    )
  };

  handleSubmit(e) {
    e.preventDefault()
    this.props.createReview(this.state)
      .then(res => {
        console.log("handlesubmit", res)
        if (res.type !== "RECEIVE_REVIEW_ERRORS") this.props.toggleCreateReview()
      })
      // .catch(errs => console.log(errs))
    this.setState(
      {
        title: "",
        body: "",
        stars: ""
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

  renderErrors() {
    if (!this.props.errors){
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


    return (
      <div className="create-review-form">
        <h1>Create Review</h1>
        <form onSubmit={this.handleSubmit}>
          <StarRating
            handleRating={e => {
              this.handleRating(e)
            }}
            rating={this.state.rating}
          />
          <input type="text" onChange={this.handleTitle} placeholder="Write Title here" value={this.state.title} name="title" id="review-title" />
          <textarea onChange={this.handleBody} placeholder="Write your review here" value={this.state.body}></textarea>

          <div>
            { this.renderErrors() }
          </div>
          <div className="create-review-buttons">
            <button type="submit">Create</button>
            <button onClick={this.props.toggleCreateReview}>Cancel</button>
          </div>

        </form>
      </div >
    )
  }
}

export default CreateReviewForm;