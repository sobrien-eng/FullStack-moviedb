import Link from 'next/link';
import React from 'react';
import styles from '../styles/signup.module.css';
import { Button, Form, FormGroup, Label, Input, FormText, Card, Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
export default class Signup extends React.Component {
    render() {

        return (
            <div className="container">
                hi
            {/* <Container>
                <Form >
                    <FormGroup>
                        <Label>Your name</Label>
                        <Input type="firstname" name="firstname" id="firstname" placeholder="First Name" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="lastname" name="lastname" id="lastname" placeholder="Last Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Account Information</Label>
                        <Input type="username" name="username" id="username" placeholder="Username" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="email" name="email" id="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" id="password" placeholder="Password" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Address</Label>
                        <Input type="street" name="street" id="street" placeholder="street" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="city" name="city" id="city" placeholder="city" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="state" name="state" id="state" placeholder="state" />
                    </FormGroup>
                    <FormGroup>
                    <Input type="zipcode" name="zipcode" id="zipcode" placeholder="zipcode" />
                </FormGroup>
                <Button>Submit</Button>

            </Form >
            </Container> */}
            </div>
        );
    }
}