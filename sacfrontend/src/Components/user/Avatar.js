import React from 'react';
import axios from 'axios';
import AuthService from '../auth/authService';

export default class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default_avatar: '',
      file: '',
      imgurl: 'a0617c31d484ab41fff0791a849b8333.png',
      errors: {},
      user: AuthService.getCurrentUser().user,
    };
  }

  componentWillMount() {
    this.getAvtar();
  }

  getAvtar() {
    const useremail = this.state.user.email;
    console.log(useremail);
    axios
      .get('http://localhost:5000/users/getavatarname/' + useremail)
      .then((res) => {
        this.setState({
          imgurl: res.data,
        });
      })
      .catch((err) => console.log(err.response));
  }

  fileChanged(e) {
    const f = e.target.files[0];
    this.setState({
      file: f,
    });
  }

  uploadFile(e) {
    e.preventDefault();
    let data = new FormData();
    data.append('file', this.state.file);
    //console.log(this.state);
    var url = 'http://localhost:5000/avatar/upload/' + this.state.user.email;
    axios({
      method: 'post',
      url: url,
      data: data,
    }).catch((err) => console.log(err.response.data));
    this.getAvtar();
  }

  render() {
    return (
      <div className='avatar-row'>
        <div className='loading-avatar'>
          <img
            src={'/api/avatar/image/' + this.state.imgurl}
            style={{ height: '25vh', width: '25vh' }}
          />
        </div>
        <div className='choose-upload-button' ref='loading'></div>
        <input type='file' onChange={this.fileChanged.bind(this)} />
        <button onClick={this.uploadFile.bind(this)}>Upload</button>
      </div>
    );
  }
}
