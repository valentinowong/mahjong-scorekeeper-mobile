import { Pressable, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';
import { styles } from '../styles';
import { Button } from '@rneui/base';


export default function SessionsScreen() {
  
  return (
    <View>
      <Stack.Screen 
        options={{
          title: "Sessions"
        }}
      />
      <Text>This is the Sessions page</Text>
      <Link
        href={{
          pathname: "/sessions/[sessionId]",
          params: { sessionId: '50' }
        }}
        asChild>
            <Button size="md">Session 50</Button>
      </Link>
    </View>
  );
}