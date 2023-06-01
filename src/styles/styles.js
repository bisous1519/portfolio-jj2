import { keyframes } from '@emotion/react';

export const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transition: translateY(-10px);
    }
    100% {
        opacity: 1;
        transition: translateY(0px);
    }
`;

