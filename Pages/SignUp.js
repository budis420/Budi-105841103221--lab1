import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Headline from '../component/Headline';
import InputText from '../component/InputText';
import ButtonComponent from '../component/Button';
import Konfirmasi from '../component/Konfirmasi';
import IconButton from '../component/IconButton';

const SignUp = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View>
                <View style={{
                    marginBottom: 50,
                }}>
                    <Headline text="Sign up" />
                </View>

                <View style={{}}>
                    <InputText placeholder="Name" />
                    <InputText placeholder="Email" />
                    <InputText placeholder="Password" passwordRules="*"/>
                </View>

                <View style={{
                    marginTop: -20,
                    marginLeft: 100,
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Konfirmasi text="Already have an account?" fontSize={14} />
                    </TouchableOpacity>
                </View>


                <View style={{ marginTop: 5 }}>
                   
                        <ButtonComponent backgroundColor="#FF0000" text="SIGN UP" />
                  
                </View>


                <View style={{ marginTop: -5 }}>
                    <Konfirmasi text="Or sign up with social account" fontSize={14} />
                </View>

                <View style={{
                    marginTop: 10,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        gap: 20,
                        marginTop: -25,
                        justifyContent: 'center',
                    }}>
                        <IconButton imageSource={require('../assets/gulugulu.png')} />
                        <IconButton imageSource={require('../assets/fb.png')} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}



export default SignUp;
