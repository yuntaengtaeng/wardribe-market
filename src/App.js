import './index.css';
import AppInner from './AppInner';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';

const GlobalStyles = createGlobalStyle` 
    ${reset}
`;

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <AppInner></AppInner>
    </Provider>
  );
};

export default App;
