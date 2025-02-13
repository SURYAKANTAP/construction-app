import React, { useState } from 'react';
import { View, SafeAreaView, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
    const data = [
        {
            id: '1',
            image: require('../image/image19.jpg'),
            text: 'Get aesthetic designs for the exterior of your building',
            description: '3D Elevation',
        },
        {
            id: '2',
            image: require('../image/image20.jpg'),
            text: 'Use new materials and colors of your choice for your building',
            description: '3D Elevation',
        },
        {
            id: '3',
            image: require('../image/image21.jpg'),
            text: 'Visualize how your building will look from the outside before it is built',
            description: '3D Elevation',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    const navigation = useNavigation();

    const handleSwipe = () => {
        if (touchStartX - touchEndX > 50 && activeIndex < data.length - 1) {
            setActiveIndex(activeIndex + 1);
        } else if (touchEndX - touchStartX > 50 && activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleIndicatorPress = (index) => {
        setActiveIndex(index);
    };

    const renderIndicator = (index) => {
        const isActive = index === activeIndex;
        return (
            <TouchableOpacity key={index} onPress={() => handleIndicatorPress(index)}>
                <View
                    style={[
                        styles.indicator,
                        isActive ? styles.activeIndicator : null,
                    ]}
                />
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={styles.carouselContainer}
                onTouchStart={(event) => setTouchStartX(event.nativeEvent.pageX)}
                onTouchEnd={(event) => {
                    setTouchEndX(event.nativeEvent.pageX);
                    handleSwipe();
                }}
            >
                <Text style={styles.carouselDescription}>{data[activeIndex].description}</Text>
                <Image source={data[activeIndex].image} style={styles.carouselImage} />
                <Text style={styles.carouselText}>{data[activeIndex].text}</Text>
            </View>

            <View style={styles.indicatorContainer}>
                {[...Array(data.length).keys()].map((index) => renderIndicator(index))}
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('ThreeDElevation')}
                >
                    <Text style={styles.buttonText}>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        if (activeIndex < data.length - 1) {
                            setActiveIndex((prevIndex) => prevIndex + 1);
                        } else {
                            navigation.navigate('ThreeDElevation');
                        }
                    }}
                >
                    <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    carouselContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    carouselDescription: {
        fontSize: 25,
        color: '#666',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    carouselImage: {
        width: '80%',
        height: '65%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
    carouselText: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        padding: 25,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    button: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#2563EB',
        fontSize: 16,
        fontWeight: 'bold',
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: '#ccc',
    },
    activeIndicator: {
        backgroundColor: '#2563EB',
    },
});

export default App;
