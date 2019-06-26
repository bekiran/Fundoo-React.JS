import React, { Component } from 'react';
import {TextField, Card} from '@material-ui/core'
import styles from '../components/register.less'


class Register extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className={styles.Container}>
                <Card className={styles.card}>
                <TextField
                    label="First Name"
                    className={styles.Text}
                    placeholder="First Name"
                    variant="outlined"
                />
                </Card>

            </div>
        )
    }
}

export default Register;