import { connect } from 'react-redux';
import { Text, Image, View, Button } from 'react-native';
import React, { Component } from 'react';

import { ensureCameraRollPermission } from '../../../helpers/ensurePermissions';
import * as MealActions from '../../../store/actions/mealActions';
import QuickHint from '../../../components/QuickHint/QuickHint';
import styles from './style';
import uploadImage from '../../../helpers/uploadImage';
import pickImage from '../../../helpers/pickImage';

class UploadImage extends Component {
  state = {
    avatar: ''
  };

  pickMealImage = async () => {
    const avatar = await pickImage();
    this.setState(() => ({
      avatar
    }));
  };

  onSubmit = async () => {
    const { avatar } = this.state;

    const { createMeal } = this.props;

    const newMeal = {};

    if (avatar) {
      newMeal.pictureLinks = [await uploadImage(avatar, 'meals', 'lazanya')];
    }

    newMeal.name = 'LLLLL';
    newMeal.price = '234';
    newMeal.ingredients = '32r4g3r';
    newMeal.nutritionFacts = 'ev';

    const callback = () => {
      QuickHint('Meal Successfully created');
    };
    createMeal(newMeal, callback);
  };

  render() {
    const { avatar } = this.state;
    return (
      <View>
        <Button
          style={styles.uploadButton}
          onPress={() => ensureCameraRollPermission(this.pickMealImage)}
          title="Pick from Gallery"
        />
        <View style={styles.imageView}>
          {avatar ? (
            <Image style={styles.image} source={{ uri: avatar }} />
          ) : null}
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {
  createMeal: MealActions.createMeal
};

export default connect(
  null,
  mapDispatchToProps
)(UploadImage);
