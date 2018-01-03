import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Button } from './common';

class MainScreen extends Component {
  render() {
    return (
      <Card>
        <Text>Look I'm a new screen!</Text>
        <Button onPress={() => this.props.navigation.goBack()}>GO BACK</Button>
      </Card>
    );
  }
}

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    nav: state.nav,
  };
};

export default connect(mapStateToProps)(MainScreen);
