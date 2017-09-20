import {Actions as dataContentAct} from '../store/data/content';


export const getContent = () => async dispatch => {
   try {
      const res = await fetch('http://api.example.com/content');
      
      if( !res.ok )
         throw 'fucked';

      const data = await res.json();

      dispatch(dataContentAct.setTitle(data.title));
      dispatch(dataContentAct.setContext(data.context));
   } catch(err) {
      dispatch(dataContentAct.setTitle('fucked'));
      dispatch(dataContentAct.setContext('fucked'));
   }
};
