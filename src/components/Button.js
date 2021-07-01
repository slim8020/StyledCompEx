import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
    background-color: ${props => (props.type =='1') ? props.theme.blue : props.theme.purple};
    border-radius: 10px;
    padding: 15px 40px;
    margin: 10px 0px;
    justify-content: center;
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.theme.text};
`;

const Button = props => {
    return(
        <ButtonContainer type={props.type}>
            <Title>{props.title}</Title>
        </ButtonContainer>
    );
};

export default Button;
