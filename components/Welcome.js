import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import welcomeImage from '../assets/welcome.png';

class Welcome extends Component {

    style = {
        welcomeTitle: {
            flex: 1,
            minHeight: 200,
            justifyContent: "center",
        },
        titleStyles: {
            flex: 1,
            fontSize: 35,
            fontWeight: "700",
            color: 'black',
            textAlign: 'center',
            marginTop: 50
        },
        welcomeSubtitle: {
            
        },
        subtitleStyles: {
            fontSize: 25,
            fontWeight: "600",
            textAlign: 'center',
            marginTop: 15,
            marginBottom: 15
        },
        image: {
            minHeight: 200
        },
        descriptionNews:{
            textAlign: 'center'
        },
        newsImage: {
            width: 200,
            height: 200,
            borderRadius: 15
        },
        newsContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: "center",
            marginBottom: 25
        },
        button: {

        }
    }

    render() {
        return (
            <>
            <StatusBar></StatusBar>
            <ScrollView>
                <View style={this.style.welcomeTitle}>
                    <ImageBackground source={welcomeImage} resizeMode="cover" style={this.style.image} blurRadius={6}>
                        <Text style={this.style.titleStyles}>Welcome!</Text>
                    </ImageBackground>
                </View>
                
                <View style={this.style.welcomeSubtitle}>
                    <Text style={this.style.subtitleStyles}>Latests News</Text>
                </View>

                <View style={this.style.newsContainer}> 
                    <Image 
                        source={{uri: 'https://picsum.photos/150/150'}}
                        style={this.style.newsImage} />
                    <Text style={this.style.descriptionNews}>
                        Lorem ipsum dolor sit amet
                    </Text>
                    <Button
                        title="Read"
                        style={this.style.button}
                        onPress={()=>{
                            this.props.navigation.navigate('Post')
                        }}
                    />
                </View>

                <View style={this.style.newsContainer}> 
                    <Image 
                        source={{uri: 'https://picsum.photos/100/100'}}
                        style={this.style.newsImage} />
                    <Text style={this.style.descriptionNews}>
                        Lorem ipsum dolor sit amet
                    </Text>
                    <Button
                        title="Read"
                        style={this.style.button}
                        onPress={()=>{
                            this.props.navigation.navigate('Post')
                        }}
                    />
                </View>

                <View style={this.style.newsContainer}> 
                    <Image 
                        source={{uri: 'https://picsum.photos/250/250'}}
                        style={this.style.newsImage} />
                    <Text style={this.style.descriptionNews}>
                        Lorem ipsum dolor sit amet
                    </Text>
                    <Button
                        title="Read"
                        style={this.style.button}
                        onPress={()=>{
                            this.props.navigation.navigate('Post')
                        }}
                    />
                </View>

                <View style={this.style.newsContainer}> 
                    <Image 
                        source={{uri: 'https://picsum.photos/200/200'}}
                        style={this.style.newsImage} />
                    <Text style={this.style.descriptionNews}>
                        Lorem ipsum dolor sit amet
                    </Text>
                    <Button
                        title="Read"
                        style={this.style.button}
                        onPress={()=>{
                            this.props.navigation.navigate('Post')
                        }}
                    />
                </View>



            </ScrollView>
            </>
        );
    }
}

export default Welcome;