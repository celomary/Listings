import {FlatList, StyleSheet, SafeAreaView, RefreshControl, View, StatusBar} from 'react-native';
import React from 'react';
import useListings from './hooks/listings.hook';
import { useFonts } from 'expo-font';
import ListingItem from './components/listing.component';
import Loader from './components/loader.component';


const App = () => {
  const [listings, onRefresh] = useListings();
  const [loaded] = useFonts({
    'Inter-Black': require('./assets/fonts/static/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/static/Inter-Bold.ttf'),
    'Inter-Light': require('./assets/fonts/static/Inter-Light.ttf'),
    'Inter-Medium': require('./assets/fonts/static/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/static/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/static/Inter-SemiBold.ttf'),
    'Inter-Thin': require('./assets/fonts/static/Inter-Thin.ttf'),

  });
  if (!listings || listings.length === 0 || !loaded) {
    return <SafeAreaView style={styles.container}>
      <Loader />
    </SafeAreaView>
  }
  return <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#151519" />
      <FlatList
        data={listings}
        renderItem={({item}) => <ListingItem item={item} />}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={onRefresh}
          />
        }
        ItemSeparatorComponent={() => <View style={{
          height: 20
        }} />}
        style={styles.listContainer}
      />
  </SafeAreaView>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0E',
  },
  listContainer: {
    marginTop: 15,
  }
});

export default App;