import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import api from '../api';

function TaskForm(props) {
  function update(ev) {
    let tgt = $(ev.target);
    let data = {};
    data[tgt.attr('name')] = tgt.val();
    let action = {
      type: 'UPDATE_FORM',
      data: data,
    };
    props.dispatch(action);
  }

  function submit(ev) {
    api.submit_task(props.form);
  }

  function clear(ev) {
    props.dispatch({
      type: 'CLEAR_FORM',
    });
  }

  let users = _.map(props.users, (uu) => <option key={uu.id} value={uu.id}>{uu.name}</option>);
  return <div style={{padding: "4ex"}}>
   <h2>New Task</h2>
   <FormGroup>
     <Label for="user_id">Assignee</Label>
     <Input type="select" name="user_id" value={props.form.user_id} onChange={update}>
       { users }
     </Input>
   </FormGroup>
   <FormGroup>
     <Label for="title">Title</Label>
     <Input type="text" name="title" value={props.form.title} onChange={update} />
   </FormGroup>
   <FormGroup>
     <Label for="description">Description</Label>
     <Input type="textarea" name="description" value={props.form.description} onChange={update} />
   </FormGroup>
   <FormGroup>
     <Label for="time">Time(incremented by 15 minutes)</Label>
     <Input type="number" name="time" value={props.form.time} step="15" onChange={update}/>
   </FormGroup>
   <FormGroup>
     <Label> Completed? </Label>
     <Input type="checkbox" name="completed" value={props.form.completed} onChange={update}/>
   </FormGroup>
   <Button onClick={submit} color="primary">Submit</Button> &nbsp;
   <Button onClick={clear}>Clear </Button>
 </div>;
}

 function state2props(state) {
   return {
     form: state.form,
     users: state.users,
   };
 }

 export default connect(state2props)(TaskForm);
