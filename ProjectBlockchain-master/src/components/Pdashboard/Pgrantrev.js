import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './PdashboardElements';
import { FormWrap } from './PdashboardElements';
import { Icon } from './PdashboardElements';
import { FormContent } from './PdashboardElements';
import { Form } from './PdashboardElements';
import { FormH1 } from './PdashboardElements';
import { FormLabel } from './PdashboardElements';
import { FormInput } from './PdashboardElements';
import { FormButton } from './PdashboardElements';
import Footer from '../Footer';
const Pgrantrev = () => {
    const [name, setName] = useState("");
    const [name1, setName1] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The address you provided access to is: ${name}`)
    alert(`The address you revoked access is: ${name1}`)
  }
  return (
    <>      
    <Container>
        <FormWrap>
          
            <FormContent>
                <Form onSubmit={handleSubmit}>
                    <FormH1>Grant/Revoke Access</FormH1>
                    <FormLabel htmlFor='to'>Address to provide access: </FormLabel>
                    <FormInput type={ String } value={name} onChange={(e)=>setName(e.target.value)} />
                    <FormLabel htmlFor='from'>Address to revoke access: </FormLabel>
                    <FormInput type={ String } value={name1} onChange={(e)=>setName1(e.target.value)} />
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
root.render(<Pgrantrev />);

export default Pgrantrev;