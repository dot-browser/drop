import * as React from "react";
import { StyledHome, Title, Heading } from "./style";
import { Bubble } from './components/Bubble/index';
import { icons } from "@/renderer/constants/icons";
import { BubbleContainer } from './components/BubbleContainer/style';

export const Home = () => (
    <StyledHome>
        <Title>Drop</Title>
        <Heading>Devices</Heading>
        <BubbleContainer>
            <Bubble icon={icons.laptop} isFirst={true} />
            <Bubble icon={icons.desktop} />
            <Bubble icon={icons.phone} />
            <Bubble icon={icons.tablet} />
        </BubbleContainer>
    </StyledHome>
)