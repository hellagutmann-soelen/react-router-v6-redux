import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store, { RootState } from './redux/store';
import { ReduxRouter } from '@lagunovsky/redux-react-router'

import AppRoutes from './App';

import { browserHistory } from './navigation/history';


export function App() {
  return (
    <Provider store={store}>
      <ReduxRouter
        history={browserHistory}
        children={<AppRoutes/>}
        // store={store}
        // enableTimeTravelling={true}
      />
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render( <App /> )
