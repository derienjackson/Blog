import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id == navigation.getParam('id')
  );
  return (
    <View style={styles.post}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <Ionicons name="create-outline" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
  content: {
    fontSize: 20,
  },
  post: {
    marginTop: 40,
    marginHorizontal: 5,
    paddingVertical: 75,
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default ShowScreen;
