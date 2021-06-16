import '../styles/globals.css';

import { ProvideAuth } from '../lib/auth';

const App = ({ Component, pageProps }) => (
  <ProvideAuth>
    <Component {...pageProps} />
  </ProvideAuth>
);

export default App;
