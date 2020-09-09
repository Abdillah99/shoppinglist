import React, { Component, useState } from 'react';
import { View, Text, Switch } from 'react-native';

import styles, { trackColor } from './style';


const Settings = (props) =>{
  const [state, setState] = useState({allowNotif:false, darkMode:false})
  const toggleNotif = () => setState(prevstate=>{return{allowNotif:!prevstate.allowNotif, ...prevstate}});
  const toggleDarkMode = () => setState(prevstate=>{return{darkMode:!prevstate.darkMode, ...prevstate}})

  return(
    <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}> Settings </Text>
        </View>
        <View style={styles.settingsContainer}>
          <View style={styles.toggleContainer}>
            <Text style={styles.toggleLabel}>Allow notification</Text>
            <Switch
              value={state.allowNotif}
              thumbColor={'#fff'}
              trackColor={trackColor}
              onValueChange={toggleNotif} />
          </View>
          <View style={styles.toggleContainer}>
            <Text style={styles.toggleLabel}>Dark mode</Text>
            <Switch
              value={state.darkMode}
              thumbColor={'#fff'}
              trackColor={trackColor}
              onValueChange={toggleDarkMode} />
          </View>
          <View style={styles.toggleContainer}>
            <Text style={styles.toggleLabel}>Languange</Text>
          </View>
        </View>
      </View>
  )
}

export default Settings;
