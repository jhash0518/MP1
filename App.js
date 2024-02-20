import React, { useState } from 'react';
import { View, Switch, Image, StyleSheet, Text } from 'react-native';

const LightSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={[styles.container, {backgroundColor: isEnabled ? 'yellow' : 'black'}]}>
      <Text style={[styles.header, {color: isEnabled ? 'black' : 'white'}]}>
        AMC MP1
      </Text>
      <Image source={isEnabled ? require('./lights_on.jpg') : require('././lights_off.jpg')} />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={[styles.text, {color: isEnabled ? 'black' : 'white'}]}>
        {isEnabled ? 'ON' : 'OFF'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold' // This makes the header text bold
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold' // This makes the ON/OFF text bold
  }
});

export default LightSwitch;