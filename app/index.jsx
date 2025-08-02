import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text> Your Starter App</Text>
            <Text> Template</Text>
            <Link href="/about">About Page</Link>
        </View>
    )
}   
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
