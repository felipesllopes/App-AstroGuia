import { styled } from "styled-components/native";

export default function LogoLoading() {
    return (
        <ViewLogo>

            <Logo source={require("../img/logo.png")} />

        </ViewLogo>
    )
}

const ViewLogo = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

const Logo = styled.Image`
width: 278.3px;
height: 83px;
`;