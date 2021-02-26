import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

function Home({ navigation }) { 
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
          <Button
            mode="contained"
            icon="map-marker"
            onPress={() => navigation.navigate('Geolocations')}
          >
            Geolocations
          </Button>

          <Button
            mode="contained"
            icon="bell"
            onPress={() => navigation.navigate('Notifications')}
          >
            Notifications
          </Button>

          <Button
            mode="contained"
            icon="cog"
            onPress={() => navigation.navigate('Details')}
          >
            Go to details
          </Button>
      </View>
    );
}

export default Home;