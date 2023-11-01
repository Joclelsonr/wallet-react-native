import React from "react";
import { SafeAreaView, Container, ContentHeader, ContentBody, ContentFooter, Title, Description, ViewButton } from "./styled";

const Login: React.FC = () => {
    return (
        <SafeAreaView>
            <Container>
                <ContentHeader>
                    <Title>Seja bem bvindo(a) {"\n"} ao App Carteira</Title>
                    <Description>Entrar com:</Description>
                    <ViewButton></ViewButton>
                </ContentHeader>

                <ContentBody>

                </ContentBody>

                <ContentFooter>

                </ContentFooter>
            </Container>
        </SafeAreaView>
    );
};

export default Login;