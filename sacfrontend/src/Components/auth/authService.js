import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';

const isEmpty = require('is-empty');
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};

class AuthService {
  setCurrentUser(decode, state = initialState) {
    return {
      ...state,
      isAuthenticated: !isEmpty(decode),
      user: decode,
    };
  }

  userLoading() {}

  
  getCurrentUser() {
    // Check for token to keep user logged in
    if (localStorage.jwtToken) {
      // Set auth token header auth
      const token = localStorage.jwtToken;
      setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = jwt_decode(token);
      // Set user and isAuthenticated
      return this.setCurrentUser(decoded);
    }else {
      return {};
    }
  }
}

export default new AuthService();
