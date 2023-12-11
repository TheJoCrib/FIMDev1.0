import { View, Text } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import React from "react";

const Home = () => {
  const { user } = useUser();


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>welcome, {user?.emailAddresses[0].emailAddress}</Text>
    </View>
  );
};

export default Home;
