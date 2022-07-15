import './index.css';
import AppInner from './AppInner';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
    ${reset}
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppInner></AppInner>
    </>
  );
};

export default App;
