import { TouchableOpacity } from 'react-native';
import styled, { css } from "styled-components/native";

export type ButtonTypeStyledProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyledProps;
}

export const Container = styled(TouchableOpacity) <Props>`

    height: 50px;
    width: 100%;

    background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GRAY_50 : theme.COLORS.RED_DARK}

    border-radius: 6px;


    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`

${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;