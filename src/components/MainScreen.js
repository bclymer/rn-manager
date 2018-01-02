import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { Card } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <Text>Look I'm a new screen!</Text>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(LoginForm);
