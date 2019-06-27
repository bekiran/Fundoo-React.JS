/********************************************************************************
 *  @Purpose        : Create a registration page to register the users .
 *  @file           : register.jsx        
 *  @author         : Kiran B E
 *  @version        : v0.1
 *  @since          : 27-06-2019
 *********************************************************************************/

import React, { Component } from 'react';
import { TextField, Card } from '@material-ui/core';
import styles from '../components/register.less';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: ""
        }

    }

    /*********************************************
    * @description:Takes the firstname
    **********************************************/

    handleuserfirstNameChange(event) {
        try {
            const firstName = event.target.value;
            this.setState({ firstName: firstName });
        } catch (err) {
            console.log("Error at handleuserfirstNameChange in registration");
        }
    };

    /*********************************************
    * @description:Takes the lastname
    **********************************************/

    handleuserlastNameChange(event) {
        try {
            const lastName = event.target.value;
            this.setState({ lastName: lastName })
        } catch (error) {
            console.log("Error at handleuserlastNameChange in registration");
        }
    }

    /*********************************************
    * @description:Takes the email
    **********************************************/

    handleuserEmailChange(event) {
        try {
            const email = event.target.value;
            this.setState({ email: email })

        } catch (err) {
            console.log("Error at handleuserEmailChange in registration");
        }
    }

    /*********************************************
    * @description:It will display the entered password
    **********************************************/

    handleClickShowPassword() {
        try {
            this.setState(state => ({ showPassword: !state.showPassword }))
        } catch (err) {
            console.log("Error at handleClickShowPassword in registration ");
        }
    }

    render() {
        return (
            <div className={styles.Container}>

                <Card className={styles.card}>
                    <div className={styles.title}>
                        <p>
                            <span id={styles.fontf}>F</span>
                            <span id={styles.fontu}>u</span>
                            <span id={styles.fontn}>n</span>
                            <span id={styles.fontd}>d</span>
                            <span id={styles.fonto}>o</span>
                            <span id={styles.fontoo}>o</span>
                        </p>
                    </div>
                    <div className={styles.subtitle}>Create your Fundoo Account</div>
                    <div className={styles.name}>
                        <TextField
                            label="First Name"
                            id="firstName"
                            placeholder="First Name"
                            onKeyPress={this.handleEnter}
                            onChange={(event) => this.handleuserfirstNameChange(event)}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            label="Last Name"
                            id="lastName"
                            placeholder="Last Name"
                            onKeyPress={this.handleEnter}
                            onChange={(event) => this.handleuserlastNameChange(event)}
                            margin="normal"
                            variant="outlined"
                        />
                    </div >

                    <div className={styles.email}>
                        <TextField
                            label="Email"
                            className={styles.emailid}
                            type="email"
                            onKeyPress={this.handleEnter}
                            onChange={(event) => this.handleuserEmailChange(event)}
                            autoComplete="Email"
                            margin="normal"
                            variant="outlined"
                            placeholder="example: fundoo@gmail.com"
                        />
                    </div>
                    <div className={styles.password}>
                        <TextField
                            label="Password"
                            className={styles.setPassword}
                            type="password"
                            onKeyPress={this.handleEnter}
                            onChange={(event) => this.handleuserEmailChange(event)}
                            autoComplete="Email"
                            margin="normal"
                            variant="outlined"
                            placeholder="example: FunDoo123@!"
                        />
                        <TextField
                            label="Confirm Password"
                            className={styles.confirmPassword}
                            type="password"
                            onKeyPress={this.handleEnter}
                            onChange={(event) => this.handleuserEmailChange(event)}
                            autoComplete="Email"
                            margin="normal"
                            variant="outlined"
                            placeholder="example: FunDoo123@!"
                       />

                        <IconButton
                            className={styles.visibilityIcon}
                            aria-label="Toggle password visibility"
                            onClick={(event)=>his.handleClickShowPassword(event)}
                        >
                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>

                    </div>
                </Card>
            </div>
        )
    }
}

export default Register;