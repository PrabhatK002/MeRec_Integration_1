import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './DdashboardElements';
import { FormWrap } from './DdashboardElements';
import { Icon } from './DdashboardElements';
import { FormContent } from './DdashboardElements';
import { Form } from './DdashboardElements';
import { FormH1 } from './DdashboardElements';
import { FormLabel } from './DdashboardElements';
import { FormInput } from './DdashboardElements';
import { FormButton } from './DdashboardElements';
import { Text } from './DdashboardElements';
import Footer from '../Footer';
const Daccess = () => {
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
root.render(<Daccess />);

export default Daccess;