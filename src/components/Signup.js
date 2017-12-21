import React from 'react';
import {Row, Input} from 'react-materialize'


const Signup = () => {
    return (
      <div>
        <Row>
        		<Input s={6} label="First Name" />
        		<Input s={6} label="Last Name" />
            <Input type="email" label="Email" s={6} />
            <Input s={6} label="Username" />
            <Input type="password" label="Password" s={6} />
            </Row>
      </div>
    )
}

export default Signup
