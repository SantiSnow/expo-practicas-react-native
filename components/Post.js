import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Button } from 'react-native';
import postImage from '../assets/stock.png';

const Post = ({ navigation }) => {
  return (
    <>
      <StatusBar></StatusBar>
      <View style={styles.topContainer}>
        <ImageBackground source={postImage} resizeMode="cover" style={styles.image} blurRadius={6}>
          <Text style={styles.title}>Name of the post!</Text>
        </ImageBackground>
      </View>
      
      <View style={styles.mainText}>
        <ScrollView>
          <Text style={styles.innerMainText}>Lorem Ipsum is simply dummy text of the printing</Text>

          <Text style={styles.innerMainDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Text>
          <Text style={styles.innerMainDescription2}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil 
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </Text>
          <Button
            title="Share"
            style={styles.button}
          />
        </ScrollView>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    maxHeight: 400,
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    color: 'black'
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
  mainText: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    overflow: 'scroll',
  },
  innerMainText: {
    fontSize: 20,
    marginTop: 15,
    marginHorizontal: 30,
    textAlign: 'center',
    color: 'black'
  },
  innerMainDescription: {
    marginTop: 50,
    color: 'black',
    marginHorizontal: 15,
    textAlign: 'justify',
    marginBottom: 25
  },
  innerMainDescription2: {
    color: 'black',
    marginHorizontal: 15,
    textAlign: 'justify',
    marginBottom: 20
  },
  button: {
    marginVertical: 20,
  }
});

export default Post;