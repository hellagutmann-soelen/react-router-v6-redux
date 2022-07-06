import { LinearProgress } from '@mui/material';
import React, { FunctionComponent, ReactNode, useEffect, PropsWithChildren, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { push } from '@lagunovsky/redux-react-router';

interface Props {
}

const ProtectedNavigation:FunctionComponent = ( props:PropsWithChildren<Props> ) => {

  const authentication = useSelector( (state:RootState) => state.app.authentication );

  const dispatch = useDispatch<AppDispatch>()
  useEffect( () => {

  })

  // With setTimeout: Everything works fine
  // @@router/ON_LOCATION_CHANGED can be found in the inspector of redux devtools
  // Settings will be redirected back to /

  setTimeout( () => {

    // if ( authentication === 'failed' ) { }
    dispatch( push( '/' ) );
  }, 1 );


  // By commenting setTimeout and commenting out the snippet below:
  // Redirect does not behave as supposed to

  // dispatch( push( '/' ) );

  if( authentication === 'succeeded' ) return <div>props.children</div>;

  return <LinearProgress />;
}

export default ProtectedNavigation;
