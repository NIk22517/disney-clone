import React from 'react';
import styled from 'styled-components';

const LogIn = () => {
    return (
        <Container>
            <Content>
                <LogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                </Description>
                <LogoTwo src="/images/cta-logo-two.png" />
                {/* <LogoThree src="/images/cta-logo-one.png" /> */}

            </Content>
        </Container>
    )
}

const Container = styled.div `
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url('/images/login-background.jpg');
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;

    }
`;

const Content = styled.div `
    max-width: 650px;
    padding: 60px 40px;
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const LogoOne = styled.img ``;

const LogoTwo = styled.img`
    width: 90%;
`;


// const LogoThree = styled.img``;


const SignUp = styled.a `
   width: 100%;
   background: #0063e5;
   font-weight: bold;
   padding: 17px 0;
   color: #f9f9f9;
   border-radius: 4px;
   text-align: center;
   font-size: 18px;
   cursor: pointer;
   transition: all 250ms;
   letter-spacing: 1.5px;
   margin-top: 8px;
   margin-bottom: 12px;

   &:hover{
       background: #0483ee; 
   }
`;

const Description = styled.p `
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align-center;
    line-height: 1.5;
`;

export default LogIn;
