import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import { Router, Location } from "react-router";
import { BrowserHistory, } from 'history';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface Props {
  basename?: string,
  // children: ReactNode,
  history: BrowserHistory,

}

const HistoryRouter: FunctionComponent<Props> = ({ basename = '', children, history }) => {
  // const path = useSelector( ( state: RootState ) => state.navigation.path );
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useEffect(() => history.listen(( state ) => {
    console.log('hello')

    return state;

  }), [history]);

  return (
    <Router
      basename={basename}
      location={ state.location }
      navigationType={ state.action }
      navigator={history}
    >{ children }</Router>
  );
};

export default HistoryRouter;
