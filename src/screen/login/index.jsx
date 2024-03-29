//import liraries
import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Button, Input} from '@ui-kitten/components';
import {screenStyle} from '../../styles/screenStyle';
import {width} from '../../utils/constants';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';
import {postRequest} from '../../service/verbs';
import {LOGIN_URL} from '../../service/urls';
import StoreContext from '../../context';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [emailRequired, setEmailRequired] = useState(true);
  const [passwordRequired, setPasswordRequired] = useState(true);
  const [disableButton, setDisableButton] = useState(false);
  const {setIsLogin} = useContext(StoreContext);
  const navigation = useNavigation();

  const login = () => {
    const form = {
      username: null,
      password: null,
    };
    if (email) {
      form.username = email;
      setEmailRequired(true);
    } else setEmailRequired(false);
    if (password) {
      form.password = password;
      setPasswordRequired(true);
    } else setPasswordRequired(false);
    if (email && password) {
      setDisableButton(true);
      postRequest(LOGIN_URL, form)
        .then(
          res => console.log(res.data.token),
          setIsLogin(true),
          navigation.goBack(),
        )
        .catch(err => console.log(err))
        .finally(() => setDisableButton(false));
    }
  };

  return (
    <View style={screenStyle.container}>
      <ScrollView>
        <View>
          <Image
            style={styles.image}
            source={require('../../assets/image/shopping.png')}
          />
          <View>
            <Input
              status={emailRequired ? 'basic' : 'danger'}
              caption={!emailRequired && 'Wrong Email Address'}
              style={styles.input}
              size="large"
              value={email}
              label="Email"
              placeholder="Place your Email"
              onChangeText={nextValue => setEmail(nextValue)}
            />
            <Input
              status={passwordRequired ? 'basic' : 'danger'}
              caption={!passwordRequired && 'Wrong Password'}
              style={styles.input}
              value={password}
              size="large"
              label="Password"
              placeholder="Place your Password"
              secureTextEntry={secureTextEntry}
              accessoryRight={
                secureTextEntry ? (
                  <Eye
                    size="28"
                    color={AppColors.PRIMARY}
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                  />
                ) : (
                  <EyeSlash
                    size="28"
                    color={AppColors.PRIMARY}
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                  />
                )
              }
              onChangeText={nextValue => setPassword(nextValue)}
            />
            <Button
              disabled={disableButton}
              onPress={login}
              style={styles.button}
              status="danger">
              LOGIN
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: width * 0.25,
    width: width * 0.25,
    marginTop: 5,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  input: {
    marginVertical: 10,
  },
});

export default Login;
