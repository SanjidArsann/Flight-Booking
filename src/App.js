
import { Provider } from 'react-redux';
import './App.css';
import BookingForm from './components/BookingForm';
import store from './store';

function App() {
  return (
   <Provider store={store}>
    <div className="App">
      <BookingForm></BookingForm>
      
    </div>
    </Provider>
   
  );
}

export default App;
