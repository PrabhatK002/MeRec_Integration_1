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

const Labupload = () => {
    const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`New record was added`)
  }
  return (
    <>
      <Container>
        <FormWrap>
          
            <FormContent>
                <Form onSubmit={handleSubmit}>
                    <FormH1>Upload records</FormH1>
                    <FormLabel htmlFor='for'>Patient account address</FormLabel>
                    <FormInput type={String} required />
                    <FormLabel htmlFor='to'>Doctor Name</FormLabel>
                    <FormInput type='name' required />
                    <FormLabel htmlFor='to'>Visit reason</FormLabel>
                    <FormInput type={String} required />
                    <FormLabel htmlFor='to'>Visit Date</FormLabel>
                    <FormInput type='date' required />
                    <FormLabel htmlFor='myfile'>Choose File</FormLabel>
                    <FormInput type='file' id='myfile' name= "myfile" required/>
                    <FormButton type='submit'>Add record</FormButton>
                                  
                      
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Labupload;