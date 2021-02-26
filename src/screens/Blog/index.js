import React from 'react';
import { View } from 'react-native';
import { Button, Title } from 'react-native-paper';

export default function Blog({ navigation }) {
    return (
        <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
            <Title>
                Blog React Native
            </Title>            
            <Button
                mode="contained"
                icon="card-search"
                onPress={() => navigation.navigate('TabBlog')}
            >
                See
            </Button>

        </View>
    )
}