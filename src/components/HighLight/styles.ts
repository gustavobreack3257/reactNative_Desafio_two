import styled, {css} from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin-right: 24px;
    background-color: #E5F0DB;
    height: 102px;
    width: 327px;
`;


export const Title = styled.Text`
    text-align: center;
    margin-top: 20px
${({theme}) => css`
    font-size: ${ theme.FONT_SIZE.EG}px;
    font-family: ${ theme.FONT_FAMILY.BOLD};
    color: ${ theme.COLORS.GRAY_700};
    `}

`;

export const Subtitle = styled.Text`
    text-align: center;
${({theme}) => css`
    font-size: ${ theme.FONT_SIZE.MD}px;
    font-family: ${ theme.FONT_FAMILY.REGULAR};
    color: ${ theme.COLORS.GRAY_50};
    `}

`;