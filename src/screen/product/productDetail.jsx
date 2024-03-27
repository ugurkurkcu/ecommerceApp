//import liraries
import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {height, width} from '../../utils/constants';
import {AppColors} from '../../theme/colors';
import Button from '../../components/ui/button';
import Counter from '../../components/ui/counter';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URL} from '../../service/urls';
import {Heart, Star1} from 'iconsax-react-native';

// create a component
const ProductDetail = ({route}) => {
  const {item} = route?.params;

  // const getProductDetail = () => {
  //   getRequest(PRODUCTS_URL + `/${item.id}`)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err));
  // };

  // useEffect(() => {
  //   getProductDetail();
  // }, []);

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 100}}>
      <ScrollView style={styles.container}>
        <View height={height * 0.45} style={{backgroundColor: AppColors.WHITE}}>
          <Image style={styles.mainImg} source={{uri: item.image}} />
          <View style={styles.titleArea}>
            <View style={{flex: 5, marginRight: 10}}>
              <Text numberOfLines={2} style={styles.title}>
                {item.title}
              </Text>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
            <TouchableOpacity style={{flex: 1}}>
              <Heart
                variant="Bold"
                size={32}
                style={{color: AppColors.PRIMARY, marginTop: 60}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 5,
              marginLeft: 15,
              paddingTop:10
            }}>
            <Star1 size="24" color={AppColors.GOLD} variant="Bold" />
            <Text style={styles.price}>{item.rating.rate} / {item.rating.count}</Text>
          </View>
          <Text style={styles.desc}>{item.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomArea}>
        <Counter onChange={value => console.log(value)} />
        <Button title="Add To Bag" />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainImg: {
    marginTop: 20,
    width: width,
    height: height * 0.3,
    objectFit: 'contain',
  },
  titleArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    fontWeight: '500',
    color: AppColors.GRAY,
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  price: {
    fontSize: 15,
    fontWeight: '600',
  },
  desc: {
    fontSize: 15,
    padding: 5,
    padding: 15,
    textAlign: 'justify',
    lineHeight: 20,
    color: AppColors.GRAY,
  },
  bottomArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.07,
  },
});

//make this component available to the app
export default ProductDetail;
