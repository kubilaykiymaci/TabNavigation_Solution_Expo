import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  Image,
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import ServiceCaller from '../utils/ServiceCaller';
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../utils/Constants';

const RootA = ({navigation}) => {
  const carouselRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    ServiceCaller.GET('photos', {_start: 1000, _limit: 5})
      .then(responseData => setData(responseData))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({item, index}) => {
    const {url, title} = item;
    return (
      <TouchableOpacity
        onPress={() => {
          if (index === 0) {
            navigation.navigate('RootB', {screen: 'ChildA'});
          }
          if (index === 1) {
            navigation.navigate('RootB', {screen: 'ChildB'});
          }
        }}
        style={styles.itemContainer}>
        <Image style={styles.size300} source={{uri: url}} />
        <Text style={styles.textStyle}>
          Title: {title}
          {'\n'}Index: {index}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderContent = () => (
    <View style={styles.itemContainer}>
      <View style={{height: DEVICE_HEIGHT / 2}}>
        <Carousel
          autoplay
          autoplayInterval={5000}
          ref={carouselRef}
          data={data}
          sliderHeight={100}
          renderItem={renderItem}
          sliderWidth={DEVICE_WIDTH}
          itemWidth={DEVICE_WIDTH - 10}
          onSnapToItem={index => setCurrentIndex(index)}
        />
      </View>
      <Pagination
        dotsLength={data.length}
        activeDotIndex={currentIndex}
        dotStyle={styles.dotStyle}
        dotColor={'red'}
        inactiveDotColor={'black'}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    </View>
  );

  const renderError = () => <Text>{error || 'something went wrong'}</Text>;

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        renderError()
      ) : (
        renderContent()
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  size300: {height: 300, width: 300},
  textStyle: {textAlign: 'center'},
});

export default RootA;
