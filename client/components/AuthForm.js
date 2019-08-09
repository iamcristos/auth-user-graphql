import React, {Component} from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmitHandler (event) {
        event.preventDefault();
        this.props.onSubmitHandler(this.state);
    }
    render() {
        let styles
        if (this.props.errors.length) {
            styles = {borderColor: 'red'}
        }
        return (
            <div className='row'>
                <form className="col s4" onSubmit={this.onSubmitHandler.bind(this)}>
                    <div className="input-field">
                        <input 
                            style={styles}
                            placeholder="Email"
                            value={this.state.email}
                            onChange={ e => this.setState({email: e.target.value})}
                        />
                    </div>
                    <div className="input-field">
                        <label>Password</label>
                        <input 
                            style={styles}
                            placeholder="password"
                            type="Password"
                            value={this.state.password}
                            onChange={ e => this.setState({password: e.target.value})}
                        />
                    </div>
                    <div className="errors">
                        {this.props.errors.map(err=> <div key={err}>{err} </div>)}
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
        )
    }
};

export default AuthForm;