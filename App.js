import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {enableScreens } from 'react-native-screens';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {YellowBox} from 'react-native';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer);

const fetchFonts = async() => {
  await Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  console.ignoredYellowBox = ["Deprecation in 'navigationOptions':"];
  YellowBox.ignoreWarnings(["Deprecation in 'navigationOptions':"]);
  
  const [fontLoaded, setFontLoaded] = useState(false)

  if(!fontLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
