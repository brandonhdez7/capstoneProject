import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, savePost, deletePost } from '../Actions/PostActions';
import { Field, reduxForm, reset } from 'redux-form';
import '../Styles/App.css';
import _ from 'lodash';
import PostCard from '../Components/PostCard';

import { getUser, logout } from '../Actions/UserActions';
import Link from 'react-router-dom/es/Link';

class App extends Component {
  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <PostCard key={key}>
          <Link to={`/${key}`}>
            <h3 className="cardTitle">
              {post.title}
            </h3>
          </Link>
          <p className="cardText">
            {post.body}
          </p>
          {post.uid === this.props.user.uid &&
          <button className="btn btn-danger float-right" onClick={() => this.props.deletePost(key)}>Delete</button>}
        </PostCard>
      );
    });
  }

  renderField(field) {
    return (
      <input type="text" placeholder={`Enter a ${field.label}...`} {...field.input} className={field.class}/>
    );
  }

  onSubmit(values) {
    this.props.savePost(values, this.props.user.uid).then(this.props.dispatch(reset('NewPost')));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="listPostPage">
      {/* <div className="profileInfo">
        <div className="profileImg">
          <img src="/Images/FullSizeRender4.png" alt="" />
        </div>
      </div> */}
        <div className="container1">
          <div className="bottomForm">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="footerForm">
              <Field
                name="title"
                component={this.renderField}
                label="Title"
                className="footer-title"
              />
              <Field
                name="body"
                component={this.renderField}
                label="Body"
                className="footer-body"
              />
              <div className="buttons">
                <button  type="submit">Post</button>
              </div>
            </form>
          </div>
          <div className="main">
          <h1>Trends</h1>
            {this.renderPosts()}
          </div>
        </div>
        <div className="connectCar">
        <div className="buttons1">
           <button  onClick={() => {this.props.logout();}}>Sign out</button>
          </div>
           <div className="loginRight">
           <h1>Connect To RC car</h1>
                <div className="cars1">
                    <img src="/Images/adeept-smart-car-kit-for-arduino-remote-control-car-based-on-nrf24l01-2-4g-wireless--2037-500x500_0.png" alt=""/>
                </div>
              <div className="buttons">
                  <button><Link to="/ConnectToCar">Connect</Link></button>
              </div>
            </div>
        </div>

        
      </div>
    );
  }
}

let form = reduxForm({
  form: 'NewPost'
})(App);

form = connect((state, ownProps) => ({
    posts: state.posts,
    user: state.user
  }), { savePost, getPosts, deletePost, getUser, logout }
)(form);

export default form;
