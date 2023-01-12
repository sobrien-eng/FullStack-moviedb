import Link from 'next/link';
import React from 'react';
import styles from '../styles/login.module.css';
import { Button, Form, FormGroup, Label, Input, FormText, Card, Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
export default class Login extends React.Component {
    render() {
        return (
            <div class="container-sm">
                <Form>
                    <FormGroup>
                        <Input type="username" name="username" id="username" placeholder="Username" />
                        <Input type="password" name="password" id="password" placeholder="Password" />
                    </FormGroup>

                    <Button>Submit</Button>

                </Form >
            </div>
        );
    }
}