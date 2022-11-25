import styled, {css} from "styled-components/native";
import { TouchableOpacity } from "react-native";
import {ForkKnife} from "phosphor-react-native";
export const Container = styled( TouchableOpacity )`
    width: 100%;
    height: 70px;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 6px;
    border: 1px;
    flex-direction: row;
    align-items: center;

    margin-bottom: 12px;
    padding: 24px;

`;

export const Title = styled.Text`
${({theme}) => css`
    font-size: ${ theme.FONT_SIZE.MD}px;
    color: ${ theme.COLORS.GRAY_400};
    font-family: ${ theme.FONT_FAMILY.REGULAR};
    `}
`;

export const Icon = styled(ForkKnife).attrs(({theme}) => ({
    size: 30,
    color: theme.COLORS.GRAY_700,
    weight: "fill"
}))`
    margin-right: 20px;
`;