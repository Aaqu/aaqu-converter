import { Provider } from 'react-redux';
import { store } from './store';
import { DropArea } from './components/DropArea/DropArea';
import { ConvertArea } from './components/ConvertArea/ConvertArea';
import { ToastContainer } from 'react-toastify';

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
