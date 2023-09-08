import { Image, StyleSheet, Text, View } from 'react-native';

import bile from '../../../assets/billie0.png'
import Spotify from '../../../assets/Vector.png'
import InitialButton from '../../components/Buttons/InitialButton';

export default function GetStarted () {
  return (
    <View style={styles.container}>
      <Image source={bile} style={styles.imageContainer}/>
      <Image source={Spotify} style={styles.logo} />
        <Text style={{position: 'absolute', top: 499, color: '#DADADA', fontSize: 25, fontWeight: '700'}}>Enjoy listening to music</Text>
        <Text style={{position: 'absolute', top: 554, color: '#797979', fontSize: 17, fontWeight: '400', textAlign: 'center', width: 297}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed phasellus. Cursus ornare id scelerisque aliquam.</Text>
        <InitialButton text="Get Started"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0C0C',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'absolute',
  },
  logo: {
    marginTop: 37,
  }
});
