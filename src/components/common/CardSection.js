import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

CardSection.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
};

CardSection.defaultProps = {
  style: undefined,
  children: undefined,
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

export { CardSection };
