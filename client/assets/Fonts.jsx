import { createGlobalStyle } from 'styled-components';

import Meticula from './fonts/Meticula-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Meticula';
        src: local('Meticula'),
        url(${Meticula}) format('truetype');
    }
`;
