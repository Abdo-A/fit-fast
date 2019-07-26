import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { sizes, colors } from '../../../../../../assets/styles/base';

const MenuItem = ({ meal }) => {
  return (
    <Card
      title={meal.name}
      titleStyle={{
        color: colors.primary
      }}
      containerStyle={{ width: sizes.mainContentWidth }}
    >
      {/* Left Half */}

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center'
        }}
      >
        <Image
          style={{ width: 80, height: 80 }}
          source={{
            uri: meal.pictures[0].link
          }}
        />

        {/* Right Half */}

        <View
          style={{
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1
          }}
        >
          <View>
            <Text style={{ color: colors.gray01 }}>Ingredients:</Text>
            <Text style={{ color: colors.black, fontWeight: 'bold' }}>
              {meal.ingredients}
            </Text>
          </View>

          <View
            style={{
              alignItems: 'flex-end'
            }}
          >
            <Text style={{ fontWeight: 'bold', color: colors.gray01 }}>
              {meal.price} EGP
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default MenuItem;
