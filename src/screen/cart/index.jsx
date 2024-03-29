import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import StoreContext from '../../context';
import BagCard from '../../components/bag/bagCard';
import {screenStyle} from '../../styles/screenStyle';
import Summary from '../../components/bag/summary';
import {AppColors} from '../../theme/colors';

const Cart = () => {
  const {bag} = useContext(StoreContext);
  return (
    <View style={screenStyle.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={bag}
        renderItem={({item}) => <BagCard item={item} />}
        keyExtractor={item => item.id}
      />

      <Summary />
    </View>
  );
};

export default Cart;
