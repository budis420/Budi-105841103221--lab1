import { View } from 'react-native';

const ButtonCostum = ({backgroundColor, text}) => {
    return (
        <View style={{
            backgroundColor: backgroundColor,
            width: 150,
            height: 80,
            borderRadius: 10,
            marginRight: 10
          }}>
            <Text style={{
                color: 'white',
                textAlign: 'center',
                lineHeight: 80,
                fontSize: 30,
                fontWeight: 'bold',
              }}>
                {text}
            </Text>
        </View>
    );
}