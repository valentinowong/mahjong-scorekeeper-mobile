import { Pressable, Text, View, SafeAreaView } from 'react-native';
import { Link, Stack, router } from 'expo-router';
import { styles } from './styles';
import { Button } from '@rneui/base';

export default function Home() {
  
    return (
        <SafeAreaView>
            <Stack.Screen 
                options={{
                    title: "Home"
                }}
            />
            <Text>This is the Home page</Text>
                <Button 
                    size="md" 
                    onPress={ () => router.push( { pathname: "/sessions"} )}
                >
                    Sessions
                </Button>
        </SafeAreaView>
  );
}