import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';
import React, { useState } from 'react';

import { arrayHasEmptyValue } from '../../../../../../helpers/isEmpty';
import { ensureCameraRollPermission } from '../../../../../../helpers/ensurePermissions';
import { sizes } from '../../../../../../assets/styles/base';
import * as GeneralActions from '../../../../../../store/actions/generalActions';
import * as MealActions from '../../../../../../store/actions/mealActions';
import EnhancedView from '../../../../../../components/common/EnhancedView';
import MainTextarea from '../../../../../../components/MainTextarea';
import MainTextInput from '../../../../../../components/common/MainTextInput/index';
import pickImage from '../../../../../../helpers/pickImage';
import QuickHint from '../../../../../../components/common/QuickHint/QuickHint';
import styles from './styles';
import uploadImage from '../../../../../../helpers/uploadImage';

const createNewMealBackground = require('../../../../../../assets/images/createNewMealBackground.jpg');

const CreateNewMeal = ({
  navigation,
  createMeal,
  getAllMeals,
  startLoading
}) => {
  const [meal, setMeal] = useState({
    name: '',
    pictures: [],
    price: '',
    ingredients: '',
    nutritionFacts: ''
  });

  const onCreateMeal = async () => {
    startLoading();

    if (meal.pictures.length > 0) {
      const picturesLocalPaths = [...meal.pictures];
      setMeal({ ...meal, pictures: [] });

      picturesLocalPaths.forEach(async (localPath, i) => {
        const newPicturePath = await uploadImage(localPath, 'meals', meal.name);
        setMeal({
          ...meal,
          pictures:
            i === 0 ? [newPicturePath] : [...meal.pictures, newPicturePath]
        });
      });
    }

    const callback = () => {
      QuickHint('Meal Successfully created');
      getAllMeals();
      navigation.navigate('tabScreen1');
    };

    createMeal(meal, callback);
  };

  pickMealImage = async () => {
    const pictureLocalPath = await pickImage();
    // setMeal({ ...meal, pictures: [...meal.pictures, pictureLocalPath] });

    setMeal({ ...meal, pictures: [pictureLocalPath] });
  };

  const onChangeInput = (name, value) => {
    setMeal({ ...meal, [name]: value });
  };

  return (
    <EnhancedView
      backgroundImagePath={createNewMealBackground}
      backgroundImageBlurRadius={2}
      style={styles.container}
      keyboardVerticalOffset={-200}
    >
      <MainTextInput name="name" label="Meal Name" onChange={onChangeInput} />
      <MainTextInput
        name="price"
        label="Price (EGP)"
        keyboardType="number-pad"
        small
        onChange={onChangeInput}
        infoText="Must be a number"
        iconType="Foundation"
        iconName="dollar-bill"
      />
      <MainTextarea
        name="ingredients"
        label="Ingredients"
        placeholder="Type the ingredients here"
        onChange={onChangeInput}
      />
      <MainTextarea
        name="nutritionFacts"
        label="Nutrition Facts"
        placeholder="Type the nutrition facts here"
        onChange={onChangeInput}
      />

      <View style={{ width: sizes.mainContentWidth }}>
        <Button
          style={styles.uploadButton}
          onPress={() => ensureCameraRollPermission(this.pickMealImage)}
          title="Choose Image"
          containerStyle={{ marginBottom: 20, alignSelf: 'flex-start' }}
          icon={
            <Icon
              type="font-awesome"
              name="picture-o"
              size={15}
              color="white"
              containerStyle={{ marginRight: 5 }}
            />
          }
        />

        {meal.pictures.length > 0 ? (
          <Image style={styles.image} source={{ uri: meal.pictures[0] }} />
        ) : null}
      </View>

      <Button
        title="Create"
        type="solid"
        onPress={onCreateMeal}
        containerStyle={{ marginTop: 20 }}
        disabled={arrayHasEmptyValue(Object.values(meal))}
      />
    </EnhancedView>
  );
};

CreateNewMeal.navigationOptions = {
  title: 'Create New Meal'
};

const mapDispatchToProps = {
  createMeal: MealActions.createMeal,
  getAllMeals: MealActions.getAllMeals,
  startLoading: GeneralActions.startLoading
};

export default connect(
  null,
  mapDispatchToProps
)(CreateNewMeal);
