import { StyleSheet, View, Text, SectionList } from "react-native";



export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EstateSpace</Text>

      
      <View style={styles.container}>
        <Text style={styles.descriptionTitle}>Mobile Dev Challenge</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <SectionList
          sections={[
            {
              title: 'Requirements',
              data: [
                'Get it to work with bare minimum UI and backend integration.',
                'The code must execute.',
                'Try to limit time investment to 30-60 mins max for the initial “get it to work approach”.',
                'Share the git repo link that contains your code and readme with steps to execute.'
              ],
            }
            ,{
              title: 'Nice to Haves',
              data: [
                'Step-by-step commits : Start coding and make sure to commit logically.',
                'Tests',
                'Performance improvements',
                'Killer readme',
              ]
            }
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  descriptionContainer: {
    flex: 4,
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    padding: 20,
  },
  descriptionTitle: {
    fontSize: 20,
    marginTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  descriptionInfo: {
    fontSize: 20,
    marginTop: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'lightblue',
    alignSelf: 'center',
  },
    item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
