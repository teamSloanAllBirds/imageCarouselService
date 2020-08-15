import { createGlobalStyle } from 'styled-components';

import Meticula from './fonts/Meticula-Regular.ttf';
import SemiBold from './fonts/Meticula-SemiBold.ttf';
import Bold from './fonts/Meticula-Bold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Meticula';
        src: local('Meticula'),
        url(${Meticula}) format('truetype');
    }
    @font-face {
        font-family: 'Meticula-SemiBold';
        src: local('Meticula-SemiBold'),
        url(${SemiBold}) format('truetype');
    }
    @font-face {
        font-family: 'Meticula-Bold';
        src: local('Meticula-Bold'),
        url(${Bold}) format('truetype');
    }
`;
