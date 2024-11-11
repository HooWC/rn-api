import { useState } from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, Platform, StatusBar } from "react-native";
import ApiCode from '../components/ApiCode'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ApiCode />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // 适配 Android 状态栏
  },
});

export default Home;
