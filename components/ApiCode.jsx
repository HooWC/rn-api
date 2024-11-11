import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import useFetch from "../hook/useFetch";

const ApiCode = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "React Native developer",
    num_pages: 1
  });

  return (
    <View style={styles.cardsContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        data?.map((job, index) => (
          <View key={index}>
            <Text style={styles.viewData} numberOfLines={1}>{job?.job_title}</Text>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  viewData:{
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    marginBottom:5,
  }
});

export default ApiCode;