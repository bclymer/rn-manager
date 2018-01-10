import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';

import { createEmployee } from '../actions/EmployeeActions';
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
    this.props.createEmployee(this.props.employee);
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

ListItem.propTypes = {
  employee: PropTypes.object.isRequired,
  createEmployee: PropTypes.func.isRequired,
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default connect(null, { createEmployee })(ListItem);
