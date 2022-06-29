import { Provider } from 'react-redux';
import { store } from './store';
import { DropArea } from './components/DropArea/DropArea';
import { ConvertArea } from './components/ConvertArea/ConvertArea';

import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <DropArea />
        <ConvertArea />
      </div>
    </Provider>
  );
}
