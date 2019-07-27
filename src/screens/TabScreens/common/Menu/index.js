import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import * as mealActions from '../../../../store/actions/mealActions';
import EnhancedView from '../../../../components/common/EnhancedView';
import MenuItem from './components/MenuItem';
import styles from './styles';

class Menu extends Component {
  componentDidMount() {
    this.props.getAllMeals();
  }

  render() {
    const { allMeals, isLoading } = this.props;

    return (
      <EnhancedView style={styles.container}>
        {allMeals.map((meal) => (
          <MenuItem key={meal._id} meal={meal} />
        ))}

        {/* Handle the case if there are no meals */}

        {allMeals.length === 0 && !isLoading ? (
          <View style={styles.noItemsTextContainer}>
            <Text style={styles.noItemsText}>No Menu Items Yet</Text>
          </View>
        ) : null}
      </EnhancedView>
    );
  }
}

const mapStateToProps = (state) => ({
  allMeals: state.meal.allMeals,
  isLoading: state.general.isLoading
});

const mapDispatchToProps = {
  getAllMeals: mealActions.getAllMeals
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
