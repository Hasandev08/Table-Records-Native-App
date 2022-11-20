import React from 'react'
import { Platform, ScrollView, StatusBar, Text, View } from 'react-native'

import AppButton from '../../components/AppButton'
import Navbar from '../../components/Navbar'

import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing'

import { styles } from './style'

function TableScreen({ navigation, route }) {
  const { data } = route.params

  var table = ''

  for (let i in data.currentData) {
    const item = data.currentData[i]
    table =
      table +
      `
    <tr>
      <td>${item.date}</td>
      <td>${item.time}</td>
      <td>${item.type}</td>
    </tr>
    `
  }

  const html = `
    <html>
    <head>
    <style>
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    td, th {
      border: 1px solid #99acff;
      text-align: center;
      padding: 10px;
    }

    th {
      backgroundcolor: #cdd6ff
    }

    </style>
    </head>
    <body>
    <table>
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Type (X/Y)</th>
      </tr>
      ${table}
    </table>

    </body>
    </html>
    `

  const generatePdf = async () => {
    const file = await printToFileAsync({
      html: html,
      base64: false,
    })
    await shareAsync(file.uri)
  }

  return (
    <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <Navbar />
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.table}>
            <View style={styles.heading}>
              <Text style={styles.header}>Date</Text>
              <Text style={styles.header}>Time</Text>
              <Text style={styles.header}>Type(X/Y)</Text>
            </View>
            {data.currentData.map((item, index) => (
              <View key={index.toString()}>
                <View style={styles.entities}>
                  <Text style={styles.entries}>{item.date}</Text>
                  <Text style={styles.entries}>{item.time}</Text>
                  <Text style={styles.type}>{item.type}</Text>
                </View>
              </View>
            ))}
          </View>
          <AppButton title='Save' onPress={generatePdf} />
          <AppButton title='Back' color='tableButton' onPress={() => navigation.navigate('Home')} />
        </View>
      </ScrollView>
    </View>
  )
}

export default TableScreen
