import ReactDOM from 'react-dom/client';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import './index.css';
import { Work } from './pages/Work';
import { Work2 } from './pages/Work2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/work" element={<Work />} />
        <Route path="/work2" element={<Work2 />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
