import {CART, CATEGORIES, FAVOURITES, HOME, PROFILE} from '../../utils/routes';
import {
  Category2,
  FavoriteChart,
  Home2,
  Profile,
  ShoppingCart,
} from 'iconsax-react-native';

const TabIcon = ({name, color, size}) => {
  return name == HOME ? (
    <Home2 size={size} color={color} variant="Bold" />
  ) : name == CATEGORIES ? (
    <Category2 size={size} color={color} variant="Bold" />
  ) : name == CART ? (
    <ShoppingCart size={size} color={color} variant="Bold" />
  ) : name == FAVOURITES ? (
    <FavoriteChart size={size} color={color} variant="Bold" />
  ) : (
    name == PROFILE && <Profile size={size} color={color} variant="Bold" />
  );
};

export default TabIcon;
