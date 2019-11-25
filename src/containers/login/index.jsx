import React from 'react';
import './index.scss';
import { login } from '../../actions/login';
import { connect } from 'react-redux';
import List from '../list/index.jsx';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.username = null;
        this.password = null;
    }

    componentDidUpdate() {
        this.username.value = '';
        this.password.value = '';
    }

    handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            this.submit();
        }
    }

    submit = () => {
        const dispatch = this.props.dispatch;
        const username = this.username.value;
        const password = this.password.value;
        login(dispatch, { username, password });
    }

    render() {
        const { isError } = this.props.login;

        return (
            <div className='login_root'>
                <div className='login_container'>
                    <div className='login_header'>用户登录</div>
                    <div className='login_main'>
                        <div>
                            <div>用户名 (admin)</div>
                            <div><input className='login_input' type='text' ref={ele => { this.username = ele; }} placeholder='请输入用户名' onKeyDown={this.handleKeyDown} /></div>
                        </div>
                        <div>
                            <div>密码 (123456)</div>
                            <div><input className='login_input' type='password' ref={ele => { this.password = ele; }} placeholder='请输入用密码' onKeyDown={this.handleKeyDown} /></div>
                        </div>
                        <div className='login_button' onClick={this.submit}>登录</div>
                        {
                            isError ? <div className='login_inputError'>用户名或验证码有误，请重新输入!</div> : null
                        }
                    </div>
                </div>
            </div>
        );

    }
}

class IsLogin extends React.Component {
    render() {
        const { login, dispatch } = this.props;
        if (login.isLogin) {
            return <List />;
        } else {
            return <Login dispatch={dispatch} login={login} />;
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        login: state.login
    };
}

export default connect(mapStateToProps)(IsLogin);