import React from 'react';
//import { Container, Title, FormWrap } from './DdashboardElements';
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
import styled from 'styled-components';
//import { OuterBox } from './PharmaElements';

const PharmaDetail = () => {
  return (
    <>
      <Container>
        <FormWrap>
          
            <FormContent>
                <Form action="#">
                    <FormH1>Look up into Pharmacy's detail</FormH1>
                    <FormLabel htmlFor='for'>Account address :</FormLabel>                    
                    <FormLabel htmlFor='to'>Name :</FormLabel>
                    <FormLabel htmlFor='to'>Liscence Number :</FormLabel>
                    <FormLabel htmlFor='to'>Contact :</FormLabel>
                                  
                      
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default PharmaDetail;