import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Table, Tr, Th, Td} from '../component/CustomComponent/Table'


export default function CaseDataDisplay({Data={}}) {
    
    const TableData = ()=> {
        if(Data == null){
          return (<Text>
            No data
            </Text>);
        }
        
        return (
            <Table>
            <Tr >
              <Th><Text style={styles.th}>Country: </Text></Th>
              <Td><Text style={styles.td}>{Data.country}</Text></Td>
            </Tr>
            <Tr >
              <Th><Text style={{fontWeight: "bold", textAlign: 'right', fontSize: 20}}>Confirmed: </Text></Th>
              <Td><Text style={styles.td}>{Data.confirmed}</Text></Td>
            </Tr>
            <Tr >
              <Th><Text style={styles.th}>Critical: </Text></Th>
              <Td><Text style={styles.td}>{Data.critical}</Text></Td>
            </Tr>
            <Tr >
              <Th><Text style={styles.th}>Deaths: </Text></Th>
              <Td><Text style={styles.td}>{Data.deaths}</Text></Td>
            </Tr>
            <Tr >
              <Th><Text style={styles.th}>Recovered: </Text></Th>
              <Td><Text style={styles.td}>{Data.recovered}</Text></Td>
            </Tr>
            <Tr >
              <Th><Text style={styles.th}>Last-Updated: </Text></Th>
              <Td><Text style={styles.td}>{Data.lastUpdate.toString().split('T')[0]}</Text></Td>
            </Tr>
          </Table>
        )
    }
    return (
      <>
       {TableData()}

      </>
      )
}

const styles = StyleSheet.create({
  th:{
    fontWeight: "bold", 
    textAlign: 'right', 
    fontSize: 20
  },
  td:{
    fontWeight: "bold", 
    textAlign: 'left', 
    fontSize: 20, 
    marginLeft: 5, 
    color: '#eee'
  }
});
