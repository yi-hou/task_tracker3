import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';
import { connect } from 'react-redux';

function RegisterForm(props) {

  function update(ev) {
    let tgt = $(ev.target);
    let data = {};
    data[tgt.attr('name')] = tgt.val();
    let action = {
      type: 'UPDATE_REGISTER_FORM',
      data: data,
    };
    props.dispatch(action);
  }

  function register(ev) {
    api.submit_register(props.form);
  }

  return <div style={{padding: "4ex"}}>
  <h2>Resgister New Account</h2>
  <FormGroup>
    <Label for="name">Name</Label>
    <Input type="text" name="name" value={props.form.name} onChange={update} />
  </FormGroup>
  <FormGroup>
    <Label for="email">Email</Label>
    <Input type="email" name="email" value={props.form.email} onChange={update} />
  </FormGroup>
  <FormGroup>
    <Label for="password">Password</Label>
    <Input type="password" name="password" placeholder="password"
    value={props.form.password} onChange={update} />
  </FormGroup>
  <Button onClick={register} color="primary">Register</Button>
  </div>;
}

function state2props(state) {
     console.log(state);
   return {
     form: state.register
   };

}

export default connect(state2props)(RegisterForm);
