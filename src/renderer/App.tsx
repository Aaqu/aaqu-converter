import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store } from './store';
import { DropArea } from './components/DropArea/DropArea';
import { ConvertArea } from './components/ConvertArea/ConvertArea';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <ToastContainer />
        <DropArea />
        <ConvertArea />
      </div>
    </Provider>
  );
}
