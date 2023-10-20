import { Pressable, Text, View, SafeAreaView } from 'react-native';
import { Link, Stack, router } from 'expo-router';
import { styles } from './styles';
import { Button } from '@rneui/base';
import Bundle from "../src/appState";
const {type, AppContext} = Bundle;
import { useContext } from 'react';

export default function Home() {
    
    const { state, dispatch } = useContext(AppContext);
    const { count } = state;

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
            <Text>---</Text>
            <Text>{count}</Text>
            <Button onPress={() => dispatch(type.add(2))}>Add</Button>
            <Button onPress={() => dispatch(type.sub(2))}>Subtract</Button>
        </SafeAreaView>
  );
}