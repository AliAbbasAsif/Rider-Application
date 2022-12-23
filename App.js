import React from 'react'
import AppRouter from './Config/AppRouter'
navigator.geolocation = require('@react-native-community/geolocation');

function App() {
  return (
    <>
    <AppRouter/> 
    </>
  )
}

export default App
