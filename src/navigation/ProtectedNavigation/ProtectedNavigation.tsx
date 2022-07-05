import { LinearProgress } from '@mui/material';
import React, { FunctionComponent, ReactNode, useEffect, PropsWithChildren, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Authentication } from '../../redux/slices/app';
import { AppDispatch, RootState } from '../../redux/store';
import { push } from '@lagunovsky/redux-react-router';
import { browserHistory } from '../history';
import { IndexRouteProps } from 'react-router';

interface Props {
  // children: ReactNode,
  // component: ReactNode,
  // authentication: Authentication,
  // onRedirect: ( to: string ) => void,
}

const ProtectedNavigation:FunctionComponent = ( props:PropsWithChildren<Props> ) => {

  const authentication = useSelector( (state:RootState) => state.app.authentication );
  const state = useSelector( (state:RootState) => state );

  const dispatch = useDispatch<AppDispatch>()
  useEffect( () => {
    dispatch( push( '/' ) );

  })

  setTimeout( () => {

    if ( authentication === 'failed' ) {
    }
  }, 1 );
  // browserHistory.push( '/' )

  if( authentication === 'succeeded' ) return <div>props.children</div>;

  return <LinearProgress />;
}

export default ProtectedNavigation;
