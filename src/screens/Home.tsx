import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeIcon from "../assets/images/svg/bottom-tab/tab-home.svg"

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <HomeIcon width={10} height={20}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})