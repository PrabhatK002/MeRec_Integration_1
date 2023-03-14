import React from 'react'
import { useState } from 'react';
//import ReactDOM from 'react-dom/client';
import { Container } from './ResdashboardElement';
import { FormWrap } from './ResdashboardElement';
//import { Icon } from './ResdashboardElement';
import { FormContent } from './ResdashboardElement';
import { Form } from './ResdashboardElement';
import { FormH1 } from './ResdashboardElement';
import { FormLabel } from './ResdashboardElement';
import { FormInput } from './ResdashboardElement';
import { FormButton } from './ResdashboardElement';
//import { Text } from './ResdashboardElement ';
//import Footer from '../Footer';

const Resupload = () => {
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

export default Resupload;