import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import './home.css';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      showPassword: false,
      password: ''
    };
  }
  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  handleChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleClickShowPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }
  handleMouseDownPassword(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1 className="home-title">Sign Up Here</h1>
        <FormControl className="formControl">
          <InputLabel htmlFor="name-simple">Name</InputLabel>
          <Input
            id="name-simple"
            onChange={e => {
              this.handleChange(e);
            }}
          />
        </FormControl>
        <FormControl className="formControl">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={() => {
                    this.handleClickShowPassword();
                  }}
                  onMouseDown={() => {
                    this.handleMouseDownPassword(event);
                  }}
                  onChange={() => {
                    this.handleChangePassword(event);
                  }}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    );
  }
}

export default Home;
