import React, {Component} from "react";
import './App.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regdiv: false,
            loginTab: 'rgb(57, 122, 152)',
            regTab: 'rgb(12, 95, 139)',
            forgotDiv: false
        };
    }
    openForgotPage() {
        this.props.history.push('/forgot/');
    }
    render() {
        return (
            <div>
                {/*<!--WRAPPER START-->*/}
                <div className="wrapper kode-home-page">
                    <div style={{
                        backgroundColor: "#eee",
                        width: "100%",
                        textAlign: 'center',
                        height: '80px',
                        paddingTop: '10px',
                        paddingBottom: '10px'
                    }}>
                        <a href="/"><img src="../images/logo.png" alt="" style={{height: "50px"}}/></a>
                    </div>
                    <div style={{marginTop: '100px'}}>
                        <div className="row">
                            <div className="col-lg-offset-2 col-md-4" style={{padding: 10}}>
                                <div
                                    onClick={() => {
                                        this.setState({
                                            regdiv: false,
                                            forgotDiv: false,
                                            loginTab: 'rgb(57, 122, 152)',
                                            regTab: 'rgb(12, 95, 139)'
                                        })
                                    }}
                                    style={{
                                        backgroundColor: this.state.loginTab,
                                        width: '100%',
                                        height: '70px',
                                        cursor: 'pointer',
                                        borderRadius: '5px',
                                        padding: '20px',
                                        paddingTop: '25px'
                                    }}>
                                    <div style={{
                                        display: 'inline',
                                        paddingTop: '5px',
                                        paddingRight: '30px',
                                        borderRight: '1px solid #fff',
                                        height: '30px',
                                        width: '20%',
                                        color: '#fff',
                                        textAlign: 'center'
                                    }}>
                                        <i className='fa fa-lock' style={{fontSize: '150%'}}>
                                        </i>
                                    </div>
                                    <div style={{
                                        height: '30px',
                                        paddingLeft: '50px',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        display: 'inline'
                                    }}>
                                        <span>LOGIN</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4" style={{padding: 10}}>
                                <div
                                    onClick={() => {
                                        this.setState({
                                            regdiv: true,
                                            forgotDiv: false,
                                            loginTab: 'rgb(12, 95, 139)',
                                            regTab: 'rgb(57, 122, 152)'
                                        })
                                    }}
                                    style={{
                                        backgroundColor: this.state.regTab,
                                        width: '100%',
                                        height: '70px',
                                        cursor: 'pointer',
                                        borderRadius: '5px',
                                        padding: '20px',
                                        paddingTop: '25px'
                                    }}>
                                    <div style={{
                                        display: 'inline',
                                        paddingTop: '5px',
                                        paddingRight: '30px',
                                        borderRight: '1px solid #fff',
                                        height: '30px',
                                        width: '20%',
                                        color: '#fff',
                                        textAlign: 'center'
                                    }}>
                                        <i className='fa fa-user-plus' style={{fontSize: '150%'}}>
                                        </i>
                                    </div>
                                    <div style={{
                                        height: '30px',
                                        paddingLeft: '50px',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        display: 'inline'
                                    }}>
                                        <span>SIGN UP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop: '20px'}}>
                            <div className="col-lg-offset-2 col-md-3" style={{paddingLeft: 10}}>
                                <div style={{
                                    width: '100%',
                                    height: '5px',
                                    backgroundColor: 'rgb(57, 122, 152)',
                                    borderRadius: '5px'
                                }}>
                                </div>
                            </div>
                            <div className="col-md-2" style={{textAlign: 'center', fontWeight: 'bold'}}>

                            </div>
                            <div className="col-md-3" style={{paddingRight: 10}}>
                                <div style={{
                                    width: '100%',
                                    height: '5px',
                                    backgroundColor: 'rgb(57, 122, 152)',
                                    borderRadius: '5px'
                                }}>
                                </div>
                            </div>
                        </div>
                        {
                            !this.state.regdiv && !this.state.forgotDiv ?
                                <div className="col-lg-offset-4 col-md-4">
                                    <div style={{textAlign: 'center', paddingTop: '20px'}}>
                                <span style={{
                                    fontWeight: 'bold',
                                    fontSize: '200%',
                                    color: 'rgb(57, 122, 152)'
                                }}>LOGIN</span>
                                    </div>
                                    <div style={{marginTop: '30px'}}>
                                        <div className="form-group">
                                            <input type="text" placeholder="Username/Email" className="form-control"
                                                   style={{
                                                       paddingTop: '20px',
                                                       paddingBottom: '20px',
                                                       borderRadius: '20px',
                                                       height: '60px',
                                                       textAlign: 'center',
                                                       fontWeight: 'bold'
                                                   }}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder="Password" className="form-control"
                                                   style={{
                                                       paddingTop: '20px',
                                                       paddingBottom: '20px',
                                                       borderRadius: '20px',
                                                       height: '60px',
                                                       textAlign: 'center',
                                                       fontWeight: 'bold'
                                                   }}/>
                                        </div>
                                        <div className="form-group" style={{width: '50%', display: 'inline'}}>
                                            <input type="checkbox" className="form-control"
                                                   style={{display: 'inline', width: '20px', height: '20px'}}/>
                                            <label style={{display: 'inline', marginLeft: '10px', fontSize: '80%'}}>Keep
                                                me
                                                signed in!</label>
                                        </div>
                                        <div className="form-group" style={{width: '50%', display: 'inline'}}>
                                        <span
                                            onClick={() => {
                                                this.openForgotPage();
                                            }}
                                            style={{
                                                color: 'green',
                                                fontWeight: 'bold',
                                                fontSize: '80%',
                                                position: 'absolute',
                                                right: '0px',
                                                cursor: 'pointer'
                                            }}>Forgot Password?</span>
                                        </div>
                                        <div className="form-group" style={{marginTop: '30px', textAlign: 'center'}}>
                                        <span className="btn btn-default" style={{
                                            paddingTop: '10px',
                                            paddingBottom: '10px',
                                            borderRadius: '10px',
                                            backgroundColor: 'rgb(235,178,35)',
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            width: '150px'
                                        }}>Login</span>
                                        </div>
                                    </div>
                                </div>
                                : null
                        }
                        {
                            this.state.regdiv && !this.state.forgotDiv ?
                                <div className="col-lg-offset-4 col-md-4">
                                    <div style={{textAlign: 'center', paddingTop: '20px'}}>
                                <span style={{
                                    fontWeight: 'bold',
                                    fontSize: '200%',
                                    color: 'rgb(57, 122, 152)'
                                }}>SIGN UP</span>
                                    </div>
                                    <div style={{marginTop: '30px'}}>
                                        <div className="form-group">
                                            <input type="text" placeholder="First Name" className="form-control"
                                                   style={{
                                                       paddingTop: '10px',
                                                       paddingBottom: '10px',
                                                       borderRadius: '15px',
                                                       height: '40px',
                                                       textAlign: 'center',
                                                       fontWeight: 'bold',
                                                       width: '47%',
                                                       display: 'inline'
                                                   }}/>
                                            <input type="text" placeholder="Last Name" className="form-control"
                                                   style={{
                                                       paddingTop: '10px',
                                                       paddingBottom: '10px',
                                                       borderRadius: '15px',
                                                       height: '40px',
                                                       textAlign: 'center',
                                                       fontWeight: 'bold',
                                                       width: '47%',
                                                       display: 'inline',
                                                       position: 'absolute',
                                                       right: '15px'
                                                   }}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" placeholder="Email Address" className="form-control"
                                                   style={{
                                                       paddingTop: '10px',
                                                       paddingBottom: '10px',
                                                       borderRadius: '15px',
                                                       height: '40px',
                                                       textAlign: 'center',
                                                       fontWeight: 'bold'
                                                   }}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder="Password" className="form-control"
                                                   style={{
                                                       paddingTop: '10px',
                                                       paddingBottom: '10px',
                                                       borderRadius: '15px',
                                                       height: '40px',
                                                       textAlign: 'center',
                                                       fontWeight: 'bold'
                                                   }}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder="Confirm Password"
                                                   className="form-control"
                                                   style={{
                                                       paddingTop: '10px',
                                                       paddingBottom: '10px',
                                                       borderRadius: '15px',
                                                       height: '40px',
                                                       textAlign: 'center',
                                                       fontWeight: 'bold'
                                                   }}/>
                                        </div>
                                        <div className="form-group" style={{textAlign: 'center'}}>
                                            <input type="checkbox" className="form-control"
                                                   style={{display: 'inline', width: '20px', height: '20px'}}/>
                                            <label style={{display: 'inline', marginLeft: '10px', fontSize: '80%'}}>I
                                                agree to <a href='/login/'>Terms & Conditions</a>.</label>
                                        </div>

                                        <div className="form-group" style={{marginTop: '30px', textAlign: 'center'}}>
                                        <span className="btn btn-default" style={{
                                            paddingTop: '10px',
                                            paddingBottom: '10px',
                                            borderRadius: '10px',
                                            backgroundColor: 'rgb(235,178,35)',
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            width: '150px'
                                        }}>Create Account</span>
                                        </div>
                                        <div className="form-group"
                                             style={{textAlign: 'center', marginTop: '20px', marginBottom: '100px'}}>
                                        <span style={{
                                            fontWeight: 'bold',
                                            fontSize: '80%',
                                        }}>Already have an account? <a href="script:void()" onClick={() => {
                                            this.setState({
                                                regdiv: false,
                                                forgotDiv: false,
                                                loginTab: 'rgb(57, 122, 152)',
                                                regTab: 'rgb(12, 95, 139)'
                                            })
                                        }}>Sign In</a> </span>
                                        </div>
                                    </div>
                                </div>
                                : null
                        }
                        {
                            this.state.forgotDiv ?
                                <div className="col-lg-offset-4 col-md-4">
                                    <div style={{textAlign: 'center', paddingTop: '20px'}}>
                                <span style={{
                                    fontWeight: 'bold',
                                    fontSize: '200%',
                                    color: 'rgb(57, 122, 152)'
                                }}>FORGOT PASSWORD</span>
                                    </div>
                                    <div style={{marginTop: '30px'}}>
                                        <div className="form-group">
                                            <input type="text" placeholder="Email Address" className="form-control"
                                                   style={{
                                                       paddingTop: '20px',
                                                       paddingBottom: '20px',
                                                       borderRadius: '20px',
                                                       height: '60px',
                                                       textAlign: 'center',
                                                       fontWeight: 'bold'
                                                   }}/>
                                        </div>

                                        <div className="form-group" style={{marginTop: '30px', textAlign: 'center'}}>
                                        <span className="btn btn-default" style={{
                                            paddingTop: '10px',
                                            paddingBottom: '10px',
                                            borderRadius: '10px',
                                            backgroundColor: 'rgb(235,178,35)',
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            width: '150px'
                                        }}>Reset Password</span>
                                        </div>
                                    </div>
                                </div>
                                : null
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default Login;