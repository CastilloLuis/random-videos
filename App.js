import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store';

import AppLayout from './src/appLayout';
import Loader from './src/sections/components/loader';

export default class App extends React.Component {

  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loader />}
          persistor={persistor}
        >
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }

}

