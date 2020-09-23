import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: '',
    gender: 'male',
    description: '',
    agree: false
  }

  render() {
    return (
      <form>
        <h1>My Profile</h1>
        <label for="name">Name</label>
        <input type="text" placeholder="Your name" name="name" id="name" onChange={this.handleChange} />
        <label for="gender">Gender</label>
        <select name="gender" id="gender" onChange={this.handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        <label for="description">Description</label>
        <textarea placeholder="Description about yourself" name="description" id="description" onChange={this.handleChange} />
        <div id="agree-line">
          <input type="checkbox" name="agree" id="agree" onChange={this.handleChange} />
          <label for="agree">I have read the terms of conduct</label>
        </div>
        <button
          type="button"
          className="btn btn-primary button-customize"
          disabled={!this.hasFillCompleted()}
          onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }

  handleSubmit = () => {
    console.log(this.state);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.name === 'agree' ? event.target.checked : event.target.value,
    });
  }

  hasFillCompleted = () => {
    return this.state.name.length !== 0 &&
      this.state.gender.length !== 0 &&
      this.state.description.length !== 0 &&
      this.state.agree === true;
  }
}

export default MyProfile;


