import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Button } from './common';
import { logout, createEmployee } from '../actions';

class EmployeeList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Employee List',
    headerRight: (
      <Button
        onPress={() => navigation.state.params.createEmployee()}
      >
        <Text>Add</Text>
      </Button>
    ),
  });

  componentDidMount() {
    this.props.navigation.setParams({
      createEmployee: this.props.createEmployee,
    });
  }

  render() {
    return (
      <Card>
        <Text>Look I'm a new screen!</Text>
        <Button onPress={() => this.props.logout()}>LOGOUT</Button>
      </Card>
    );
  }
}

EmployeeList.propTypes = {
  navigation: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  createEmployee: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    nav: state.nav,
  };
};

export default connect(mapStateToProps, { logout, createEmployee })(EmployeeList);
