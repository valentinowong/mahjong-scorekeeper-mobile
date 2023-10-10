import { Pressable, Text, View, SafeAreaView } from 'react-native';
import { Link, Stack, useRouter } from 'expo-router';
import { styles } from './styles';
import { Button } from '@rneui/base';

export default function Home() {
    const navigation = useRouter();
  
    return (
    <SafeAreaView>
        <Stack.Screen 
            options={{
                title: "Home"
            }}
        />
        <Text>This is the Home page</Text>
        <Text>Tests</Text>
        <Link href="/sessions" asChild>
            <Button size="md">Sessions</Button>
        </Link>
        
        
    </SafeAreaView>
  );
}