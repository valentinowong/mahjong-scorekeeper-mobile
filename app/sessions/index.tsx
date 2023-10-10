import { Pressable, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';
import { styles } from '../styles';


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
        }}>
            <Pressable style={styles.button}>
                <Text>Session 50</Text>
            </Pressable>
      </Link>
    </View>
  );
}