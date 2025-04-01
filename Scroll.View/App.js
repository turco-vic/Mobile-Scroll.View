import React from 'react';
import { SafeAreaView, FlatList, SectionList, Text, ScrollView, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
  { id: '6', title: 'Item 6' },
  { id: '7', title: 'Item 7' },
  { id: '8', title: 'Item 8' },
  { id: '9', title: 'Item 9' },
  { id: '10', title: 'Item 10' },
];

const sectionData = [
  {
    title: 'Fruits 1',  
    data: [
      { id: '1', title: 'Blueberry' },  
      { id: '2', title: 'Blueberry' },
    ],
  },
  {
    title: 'Fruits 2',  
    data: [
      { id: '3', title: 'Blueberry' },
      { id: '4', title: 'Blueberry' },
    ],
  },
  {
    title: 'Fruits 3',  
    data: [
      { id: '5', title: 'Blueberry' },
      { id: '6', title: 'Blueberry' },
    ],
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Scroll View</Text>  

      <Text style={styles.subTitle}>FlatList:</Text>
      <FlatList
        style={styles.listContainer}
        data={data}
        renderItem={({ item }) => (
          <Text style={styles.item}>Título: {item.title}</Text>
        )}
        keyExtractor={(item) => item.id}
      />

      <Text style={styles.subTitle}>SectionList:</Text>
      <ScrollView style={styles.listContainer}>
        <SectionList
          sections={sectionData}
          renderItem={({ item }) => (
            <Text style={styles.item}>Título: {item.title}</Text>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item) => item.id} 
        />
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dee4c5',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#581717',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#581717',
  },
  item: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#581717',
    marginVertical: 5,
    borderRadius: 5,
    color: 'white',
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#581717',
    padding: 10,
    color: 'white',
  },
  listContainer: {
    maxHeight: 300, 
    marginBottom: 20, 
  },
});