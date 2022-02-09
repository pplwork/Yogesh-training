import { React, Component } from "react";
// import { withRouter } from "react-router-dom";
// import axios from "axios";
import { connect } from "react-redux";
import { deletePost } from "../Actions/postActions";

class Post extends Component {
  // state = {
  //   post: null,
  // };

  // componentDidMount() {
  //   const id = this.props.match.params.post_id;
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts/" + id)
  //     .then((res) => {
  //       this.setState({
  //         post: res.data,
  //       });
  //     });
  // }

  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };

  render() {
    console.log(this.props);
    console.log(this.props.post);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button onClick={this.handleClick} className="btn grey">
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading Post...</div>
    );

    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.posts);
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      // dispatch({ type: "DELETE_POST", id: id });
      dispatch(deletePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
