import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";
export const Container = styled(SafeAreaView)`

    background-color: #E5F0DB;

`;
export const BackButton = styled.TouchableOpacity`
    height: 24px;
    width: 24px;
    margin-top: 56px;
    position: absolute;
    margin-left: 24px;

`;
export const BackIcon = styled(ArrowLeft).attrs(({theme}) =>({
    size: 32,
    color: theme.COLORS.GRAY_700
}))``;
export const Content = styled.View`

    height: 708px;
    width: 392px;
    margin-top: 104px;
    border-top-left-radius:20px;
    border-top-right-radius:18px;
    background-color: ${({theme}) => theme.COLORS.WHITE};

`;
export const ViewPrime = styled.View`
    margin-top: 57px;
    margin-left: 160px;
    position: absolute;



`;
export const Title = styled.Text`
    align-items: center;
    text-align: center;
${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG};

`};
`;
