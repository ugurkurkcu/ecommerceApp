import {View, Text, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {SearchNormal, ShoppingCart} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {CART} from '../../utils/routes';
import {useState} from 'react';

// create a component
const HeaderTabRight = ({search}) => {
  const navigation = useNavigation();
  const [count, setCount] = useState(2);

  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      {search && (
        <TouchableOpacity>
          <SearchNormal
            color={AppColors.SECONDARY}
            size="24"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => navigation.navigate(CART)}>
        <ShoppingCart
          color={AppColors.SECONDARY}
          size="24"
          style={{marginRight: 15}}
        />
        {count > 0 && (
          <View
            style={{
              position: 'absolute',
              backgroundColor: AppColors.PRIMARY,
              opacity: 50,
              borderRadius: 10,
              width: 18,
              height: 18,
              right: 10,
              top: -5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: AppColors.WHITE}}>{count}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTabRight;
