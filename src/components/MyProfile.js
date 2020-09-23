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
        <label>Name
          <input type="text" placeholder="Your name" name="name" onChange={this.handleChange} />
        </label>
        <label>Gender
          <select name="gender" onChange={this.handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>Description
          <textarea placeholder="Description about yourself" name="description" onChange={this.handleChange} />
        </label>
        <label>I have read the terms of conduct
          <input type="checkbox" name="agree" onChange={this.handleChange} />
        </label>
        <button
          type="button"
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


