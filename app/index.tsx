import { Pressable, Text, View, SafeAreaView } from 'react-native';
import { Link, Stack, router } from 'expo-router';
import { styles } from './styles';
import { Button } from '@rneui/base';
import {type, AppContext} from './appState';
import { useContext } from 'react';

export default function Home() {
    
    const { state, dispatch } = useContext(AppContext);
    const { count } = state;

    return (
        <SafeAreaView>
            <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet"></link>
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
                    My Sessions
                </Button>
        </SafeAreaView>
  );
}