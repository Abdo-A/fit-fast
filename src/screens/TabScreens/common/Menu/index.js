import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import * as mealActions from '../../../../store/actions/mealActions';
import EnhancedView from '../../../../components/common/EnhancedView';
import MenuItem from './components/MenuItem';

class Menu extends Component {
  componentDidMount() {
    this.props.getAllMeals();
  }

  render() {
    return (
      <EnhancedView style={styles.container}>
        {this.props.allMeals.map((meal) => (
          <MenuItem key={meal._id} meal={meal} />
        ))}
      </EnhancedView>
    );
  }
}

Menu.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});

const mapStateToProps = (state) => ({
  allMeals: state.meal.allMeals
});

const mapDispatchToProps = {
  getAllMeals: mealActions.getAllMeals
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
