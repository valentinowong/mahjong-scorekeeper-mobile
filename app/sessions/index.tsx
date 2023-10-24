import { Pressable, Text, View } from 'react-native';
import { Link, Stack, router } from 'expo-router';
import { styles } from '../styles';
import { Button, Card } from '@rneui/base';
import SessionCard from '../components/SessionCard'
import {type, AppContext} from "../appState";
import { useContext } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';


export default function SessionsScreen() {

  const { state, dispatch } = useContext(AppContext);
  const { sessions, games, players } = state; 

  const SessionCards = () => {
    return sessions.map( (session) => {
      return (
        <Pressable key={session.id} onPress={ () => router.push( { pathname: "/sessions/[sessionId]", params: { sessionId: session.id }})}>
          <SessionCard id={session.id}/>
        </Pressable>
      )
    })
  }

  return (
    <View>
      <Stack.Screen 
        options={{
          title: "Sessions"
        }}
      />
      <ScrollView>
        <SessionCards/>
      </ScrollView>
    </View>
  );
}