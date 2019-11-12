import styled, { css } from "styled-components";
import { centerIcon } from '../../../../mixins/images';
import { icons } from "@/renderer/constants/icons";

export const StyledBubble = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100px;
    position: relative;

    ${({ icon, isFirst }: { icon: any; isFirst: boolean }) => css`
        margin-left: ${isFirst == true ? '0px' : '35px'};
        background-color: ${icon == icons.laptop 
            ? '#C2FFD4' 
            : icon == icons.desktop 
                ? '#C2FBFF' 
                : icon == icons.phone
                    ? '#FFABAB'
                    : icon == icons.tablet
                        ? '#F3C2FF'
                        : '#B8B8B8'};

        &:before {
            content: ' ';
            mask-size: 28px;
            mask-position: center;
            mask-repeat: no-repeat;
            height: 32px;
            width: 32px;
            position: absolute;
            display: block;
            top: 50%;
            transform: translate(-50%, -50%);
            left: 50%;
            background-color: ${icon == icons.laptop 
                ? '#00FF4B' 
                : icon == icons.desktop 
                    ? '#00EDFF' 
                    : icon == icons.phone
                        ? '#FF3A3A'
                        : icon == icons.tablet
                            ? '#D62BFF'
                            : '#454446'};
            -webkit-mask-image: url(${icon});
            mask-image: url(${icon});
        }
    `};
`;