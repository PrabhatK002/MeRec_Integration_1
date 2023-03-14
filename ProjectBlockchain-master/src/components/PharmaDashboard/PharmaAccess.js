import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './PharmaElements';
import { FormWrap } from './PharmaElements';
import { Icon } from './PharmaElements';
import { FormContent } from './PharmaElements';
import { Form } from './PharmaElements';
import { FormH1 } from './PharmaElements';
import { FormLabel } from './PharmaElements';
import { FormInput } from './PharmaElements';
import { FormButton } from './PharmaElements';
import { Text } from './PharmaElements';
import Footer from '../Footer';
const PharmaAccess = () => {
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
root.render(<PharmaAccess />);

export default PharmaAccess;