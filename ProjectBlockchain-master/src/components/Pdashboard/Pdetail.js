import React from 'react';
//import { Container, Title, FormWrap } from './DdashboardElements';
import { Container } from './PdashboardElements';
import { FormWrap } from './PdashboardElements';
import { Icon } from './PdashboardElements';
import { FormContent } from './PdashboardElements';
import { Form } from './PdashboardElements';
import { FormH1 } from './PdashboardElements';
import { FormLabel } from './PdashboardElements';
import { FormInput } from './PdashboardElements';
import { FormButton } from './PdashboardElements';
import { Text } from './PdashboardElements';
import styled from 'styled-components';
//import { OuterBox } from './PdashboardElements';

const Pdetail = () => {
  return (
    <>
      <Container>
        <FormWrap>
          
            <FormContent>
                <Form action="#">
                    <FormH1>Look up into Patient's detail</FormH1>
                    <FormLabel htmlFor='for'>Account address :</FormLabel>                    
                    <FormLabel htmlFor='to'>Name :</FormLabel>
                    <FormLabel htmlFor='to'>Phone Number :</FormLabel>
                    <FormLabel htmlFor='to'>Gender :</FormLabel>
                    <FormLabel htmlFor='to'>DOB :</FormLabel>
                    <FormLabel htmlFor='to'>Blood Group :</FormLabel>
                                  
                      
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Pdetail;