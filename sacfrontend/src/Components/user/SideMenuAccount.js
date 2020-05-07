import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideMenuAccount extends Component {
  render() {
    return (
      <div className='container valign-wrapper'>
        <aside className='account_wedget__categories'>
          <h3 className='account_wedget__title'>Your Account</h3>
          <ul>
            <li>
              <Link to='/account/summary'>Account Summary</Link>
            </li>
            <li>
              <Link to='/account/edit'>Edit My Account</Link>
            </li>
            <li>
              <Link to='/account/changepassword'>Change Password</Link>
            </li>
            {/* <li>
              <Link to='/account/watchlist'>Watchlist</Link>
            </li> */}
          </ul>
        </aside>
      </div>
    );
  }
}
export default SideMenuAccount;
