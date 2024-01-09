import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';

import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
// );
