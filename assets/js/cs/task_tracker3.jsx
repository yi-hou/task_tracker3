import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import Nav from './nav';
import Feed from './feed';
import Users from './users';
import TaskForm from './task-form';
import RegisterForm from './register';

export default function task_tracker3_init(store) {
  ReactDOM.render(
    <Provider store={store}>
      <TaskTracker3 state={store.getState()} />
    </Provider>,
      document.getElementById('root'),
  );
}

let TaskTracker3 = connect((state) => state)((props) => {

  let task_form;
   if(props.form.token) {
     task_form = <div>
     <TaskForm />
     <Tasks tasks={props.tasks} />
     </div>;
   }
   else{
     task_form=<RegisterForm />;
   }

     return (
       <Router>
         <div>
           <Nav />
           <Route path="/" exact={true} render={() =>
             <div>
                { task_form }
             </div>
           } />
           <Route path="/users" exact={true} render={() =>
             <Users users={props.users} />
           } />
           <Route path="/users/:user_id" render={({match}) =>
             <Feed tasks={_.filter(props.tasks, (tt) =>
                match.params.user_id == tt.user.id )
              } />
            } />
          </div>
        </Router>
     );

  });
