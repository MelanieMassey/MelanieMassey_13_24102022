import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
// import Store from './app/store';
import { store, persistor } from "./app/store";
import { PersistGate } from 'redux-persist/integration/react';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Home from './pages/Home';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Header/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// )
