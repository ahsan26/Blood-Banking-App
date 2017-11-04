import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from "./routes";
import Main from "./main";
import { Provider } from "react-redux";
import Store from "./store";
export default () => (
  <Provider store={Store}>
    <Main />
  </Provider>
);
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
