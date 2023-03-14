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

const Dupload = () => {
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

export default Dupload;