import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const Login = () => {
  return (
    <ThemedView style={styles.container}>
      
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Real Madrid Team:
      </ThemedText>
      <ThemedText title={true} style={styles.title}>
        Real Madrid Team:
      </ThemedText>
      <ThemedText title={true} style={styles.title}>
        Real Madrid Team:
      </ThemedText>
      <ThemedText title={true} style={styles.title}>
        Real Madrid Team:
      </ThemedText>
      <ThemedText title={true} style={styles.title}>
        Real Madrid Team:
      </ThemedText>
      <Spacer/>
      <Link href="/" replace>
        <ThemedText style={{ textAlign: "center" }}>
          Home
        </ThemedText>
      </Link>


    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30
  },
})