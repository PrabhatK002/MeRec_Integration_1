import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './LabdashboardElement';
import { FormWrap } from './LabdashboardElement';
import { Icon } from './LabdashboardElement';
import { FormContent } from './LabdashboardElement';
import { Form } from './LabdashboardElement';
import { FormH1 } from './LabdashboardElement';
import { FormLabel } from './LabdashboardElement';
import { FormInput } from './LabdashboardElement';
import { FormButton } from './LabdashboardElement';
import { Text } from './LabdashboardElement';
import Footer from '../Footer';
const Labaccess = () => {
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
root.render(<Labaccess />);

export default Labaccess;