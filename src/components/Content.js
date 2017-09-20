import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getContent } from '../api/content';


class Content extends Component {
   componentDidMount() {
      this.props.getContent();
   }

   render() {
      const {
         title,
         context
      } = this.props;

      return (
         <div style={ styles.root }>
            <h1>
               { title }
            </h1>
            <p>
               { context }
            </p>
         </div>
      );
   }
}

const styles = {
   root: {
      width: '100%'
   }
};

export default connect(
   state => ({
      title: state.data.content.title,
      context: state.data.content.context
   }),
   dispatch => ({
      getContent: () => dispatch(getContent())
   })
)(Content);
