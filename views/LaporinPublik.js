import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

export default function LaporinPublik() {
  return (
    <>
      <View style={styles.header}>
        <Text>Laporin Publik Screen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "",
    justifyContent: "center",
  },
});
