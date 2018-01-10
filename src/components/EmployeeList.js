import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Card, Button } from './common';
import { logout } from '../actions/AuthActions';
import { createEmployee, employeesFetch } from '../actions/EmployeeActions';
import ListItem from './ListItem';

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

  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  componentDidMount() {
    this.props.navigation.setParams({
      createEmployee: this.props.createEmployee,
    });
  }

  static renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={EmployeeList.renderRow}
        />
        <Card>
          <Button onPress={() => this.props.logout()}>LOGOUT</Button>
        </Card>
      </View>
    );
  }
}

EmployeeList.propTypes = {
  navigation: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  createEmployee: PropTypes.func.isRequired,
  employeesFetch: PropTypes.func.isRequired,
  employees: PropTypes.array,
};

EmployeeList.defaultProps = {
  employees: [],
};

const mapStateToProps = (state) => {
  const employees = _.map(state.employeeList, (val, uid) => {
    return { ...val, uid };
  });
  return {
    employees,
  };
};

export default connect(mapStateToProps, { logout, createEmployee, employeesFetch })(EmployeeList);
