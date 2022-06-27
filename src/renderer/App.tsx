import { Provider } from 'react-redux';
import { DropArea } from './components/DropArea/DropArea';
import { store } from "./store";

import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <DropArea />
      </div>
    </Provider>
  );
}
