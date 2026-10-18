import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';

// Prevent the browser from restoring scroll position on reload/refresh
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

createRoot(document.getElementById('root')!).render(<App />);
