import * as React from 'react';

import RootStack from '@route';
import {ListProvider} from '@modules/context/List';
import {AppStateProvider} from '@modules/context/AppState';
function App(){
  return(
    <AppStateProvider>
      <ListProvider>
        <RootStack/>
      </ListProvider>
    </AppStateProvider>
  );
}

export default App;
