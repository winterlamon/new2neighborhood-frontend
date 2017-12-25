import React from 'react';
import {Card, Row, Button} from 'react-materialize'


const UserContainer = () => {

    return (
      <div>
        <Card>
          <Row>
          <h3>Winter LaMon</h3>
      </Row>
      <Row>
          <p>Some stuff about the user</p>
      </Row>
      <Row>
        <Button className="button" waves='light' node='a' href='/signup'>View Lists</Button>
      <Button className="button" waves='light' node='a' href='/signup'>New List</Button>


      </Row>
        </Card>
      </div>
    )
}

export default UserContainer
