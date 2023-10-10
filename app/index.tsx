import { Pressable, Text, View, SafeAreaView } from 'react-native';
import { Link, Stack } from 'expo-router';
import { styles } from './styles';

export default function Home() {
  return (
    <SafeAreaView>
        <Stack.Screen 
            options={{
                title: "Home"
            }}
        />
        <Text>This is the Home page</Text>
        <Text>Tests</Text>
        <Link href="/sessions">
            <Pressable style={styles.button}>
                <Text >Sessions</Text>
            </Pressable>
        </Link>
        
    </SafeAreaView>
  );
}