import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './ResdashboardElement';
import { FormWrap } from './ResdashboardElement';
import { Icon } from './ResdashboardElement';
import { FormContent } from './ResdashboardElement';
import { Form } from './ResdashboardElement';
import { FormH1 } from './ResdashboardElement';
import { FormLabel } from './ResdashboardElement';
import { FormInput } from './ResdashboardElement';
import { FormButton } from './ResdashboardElement';
//import { Text } from './IndashboardElement';
import Footer from '../Footer';
const Resaccess = () => {
    const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The address you entered was: ${name}`)
  }
  return (
    <>      
    <Container>
        <FormWrap>
          
            <FormContent>
                <Form onSubmit={handleSubmit}>
                    <FormH1>Enter address of the Patient to access record</FormH1>
                    <FormLabel htmlFor='for'>Patient Address: </FormLabel>
                    <FormInput type={ String } value={name} onChange={(e)=>setName(e.target.value)} />
                    <FormButton type='submit'>submit</FormButton>
                      {/* <Text>Forgot Password</Text>
                      <Text>Sign Up</Text> */}
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
      <Footer/>
    </>    
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Resaccess />);

export default Resaccess;