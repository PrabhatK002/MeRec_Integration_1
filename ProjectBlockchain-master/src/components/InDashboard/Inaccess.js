import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './IndashboardElement';
import { FormWrap } from './IndashboardElement';
import { Icon } from './IndashboardElement';
import { FormContent } from './IndashboardElement';
import { Form } from './IndashboardElement';
import { FormH1 } from './IndashboardElement';
import { FormLabel } from './IndashboardElement';
import { FormInput } from './IndashboardElement';
import { FormButton } from './IndashboardElement';
//import { Text } from './IndashboardElement';
import Footer from '../Footer';
const Inaccess = () => {
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
root.render(<Inaccess />);

export default Inaccess;