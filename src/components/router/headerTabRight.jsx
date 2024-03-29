import {View, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {SearchNormal, ShoppingCart} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {CART} from '../../utils/routes';
import {useContext} from 'react';
import Badge from '../bag/badge';
import StoreContext from '../../context';

// create a component
const HeaderTabRight = ({search}) => {
  const navigation = useNavigation();
  const {bag} = useContext(StoreContext);
  const count = bag.length;

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
        {count > 0 && <Badge count={count} />}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTabRight;
