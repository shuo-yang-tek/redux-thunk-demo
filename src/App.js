import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import initFetchMock from './fetchMock';

import Content from './components/Content';

class App extends Component {
   componentWillMount() {
      initFetchMock();
   }

   render() {
      return (
         <Provider store={ store }>
            <div style={ styles.root }>
               <Content />
            </div>
         </Provider>
      );
   }
}

const styles = {
   root: {
      width: '100%'
   }
};

export default App;
