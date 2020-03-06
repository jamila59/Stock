import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import fire from './config/Fire';


class Login extends Component{
    constructor(props){
        super(props);
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }


    render(){
        return(
            <div className="col-md-6">
                <form>
                    <div>
                        <label for="exampleInputEmail">Email></label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail" aria-describeby="emailHelp" placeholder="Enter Email"/>
                    </div> 
                     <div>
                         <label for="exampleInputPassword">Password</label>
                         <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword" placeholder="Password"/>
                    </div>
                    <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
                    <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
                </form>
            </div>
        );
    }
}

export default Login;