import { Provider } from 'react-redux';
import { store } from './store';
import { DropArea } from './components/DropArea/DropArea';
import { ConverterArea } from './components/ConverterArea/ConverterArea';

import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <DropArea />
        <ConverterArea />
      </div>
    </Provider>
  );
}
