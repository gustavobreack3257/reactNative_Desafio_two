import styled, {css} from 'styled-components/native'

export const Container = styled.View`
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 50px
`;

export const Message = styled.Text`
    text-align: center;
${({theme}) => css`
    font-size: ${ theme.FONT_SIZE.MD}px;
    font-family: ${ theme.FONT_FAMILY.REGULAR};
    color: ${ theme.COLORS.GRAY_400};
`}

`;
