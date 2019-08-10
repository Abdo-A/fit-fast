import { Fumi } from 'react-native-textinput-effects';
import { View, Text } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import OctIcon from 'react-native-vector-icons/Octicons';

import PropTypes from 'prop-types';
import React from 'react';

import { sizes, colors, fontSizes, gaps } from '../../../assets/styles/base';

const MainTextInput = ({
  initialValue,
  error,
  errorText,
  color,
  keyboardType,
  onChange,
  name,
  label,
  infoText,
  iconType,
  iconName,
  small,
  ...props
}) => {
  const onChangeText = (value) => {
    let submittedValue = value;

    if (keyboardType == 'number-pad' || keyboardType == 'numeric') {
      if (isNaN(submittedValue)) {
        submittedValue = '';
      } else {
        submittedValue = Number(submittedValue);
      }
    }

    onChange(name, submittedValue);
  };

  let iconClass = '';

  switch (iconType) {
    case 'FontAwesome':
      iconClass = FontAwesomeIcon;
      break;
    case 'AntDesign':
      iconClass = AntDesignIcon;
      break;
    case 'Entypo':
      iconClass = EntypoIcon;
      break;
    case 'Ionicons':
      iconClass = IonIcon;
      break;
    case 'MaterialIcons':
      iconClass = MaterialIcon;
      break;
    case 'SimpleLineIcons':
      iconClass = SimpleLineIcon;
      break;
    case 'MaterialCommunityIcons':
      iconClass = MaterialCommunityIcon;
      break;
    case 'Feather':
      iconClass = FeatherIcon;
      break;
    case 'Foundation':
      iconClass = FoundationIcon;
      break;
    case 'EvilIcons':
      iconClass = EvilIcon;
      break;
    case 'Octicons':
      iconClass = OctIcon;
      break;

    default:
      iconClass = FontAwesomeIcon;
      break;
  }

  return (
    <View
      style={{
        alignSelf: small ? 'flex-start' : 'center',
        width: small
          ? sizes.mainContentWidthWithoutPercent / 2 + '%'
          : sizes.mainContentWidth,
        marginLeft: small
          ? (100 - sizes.mainContentWidthWithoutPercent) * 2
          : 0,
        marginVertical: gaps.md
      }}
    >
      <Fumi
        label={label}
        onChangeText={onChangeText}
        iconClass={iconClass}
        iconName={iconName}
        iconColor={
          error
            ? colors.red.toString()
            : color
            ? color.toString()
            : colors.primary.toString()
        }
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        keyboardType={keyboardType}
        defaultValue={initialValue}
        style={{
          borderColor: colors.primary,
          borderWidth: 2,
          borderRadius: 5
        }}
        {...props}
      />
      {error ? (
        <Text
          style={{
            marginLeft: 50,
            fontWeight: 'bold',
            fontSize: fontSizes.sm,
            color: colors.red.toString()
          }}
        >
          {errorText}
        </Text>
      ) : infoText ? (
        <Text
          style={{
            marginLeft: 50,
            fontWeight: 'bold',
            fontSize: fontSizes.sm,
            color: color ? color.toString() : colors.primaryLight
          }}
        >
          {infoText}
        </Text>
      ) : null}
    </View>
  );
};

MainTextInput.defaultProps = {
  onChange: () => null,
  name: 'input',
  error: false,
  label: 'Type here',
  infoText: null,
  initialValue: '',
  keyboardType: 'default',
  color: colors.black,
  iconType: 'FontAwesome',
  iconName: 'pencil-square-o',
  small: false
};

MainTextInput.propTypes = {
  style: PropTypes.shape({}),
  onChange: PropTypes.func,
  name: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  infoText: PropTypes.string,
  initialValue: PropTypes.string,
  label: PropTypes.string,
  keyboardType: PropTypes.string,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  iconType: PropTypes.string,
  iconName: PropTypes.string,
  small: PropTypes.bool
};

export default MainTextInput;
