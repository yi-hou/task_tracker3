import React from 'react';
import { Card, CardBody } from 'reactstrap';

export default function Task(params) {
   let task = params.task;
   return <Card>
     <CardBody>
       <div>
         <p>Assignee <b>{ task.user.name }</b></p>
         <p>{ task.title }</p>
         <p>{ task.description }</p>
         <p>{ task.time }</p>
         <p>{ task.completed }</p>
       </div>
     </CardBody>
   </Card>;
}
