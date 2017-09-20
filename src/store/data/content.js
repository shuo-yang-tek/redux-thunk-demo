const namespace = 'data/content';

export const DEFAULT_STATE = {
   title: '',
   context: ''
};

const ACTION_TYPES = {
   setTitle: `${namespace}/SET_TITLE`,
   setContext: `${namespace}/SET_CONTEXT`,
};

export function reducer(state = DEFAULT_STATE, action) {
   switch( action.type ) {
   case ACTION_TYPES.setTitle:
      return {...state, ...{ title: action.title }};
   case ACTION_TYPES.setContext:
      return {...state, ...{ context: action.context }};
   default:
      return state;
   }
}

export const Actions = {
   setTitle: (title) => ({
      type: ACTION_TYPES.setTitle,
      title,
   }),
   setContext: (context) => ({
      type: ACTION_TYPES.setContext,
      context,
   }),
};
