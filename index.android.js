/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
 
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Headline from './myComponents/Headline';
import Home from './myComponents/Home';
import Read from './myComponents/Read';
import Music from './myComponents/Music';
import Movies from './myComponents/Movies';
export default class One extends Component {
  constructor(props){
    super();
    this.state={
      selectedTab:'home'
    }
  }
  render() {
    return (
        <View style={{flex:1}}>

           <TabNavigator>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title="首页"
                   renderIcon={() => <Image style={styles.icon} source={require("./images/home.png")} />}
               renderSelectedIcon={() => <Image style={styles.icon} source={require("./images/home_selected.png")}></Image>}
                onPress={() => this.setState({ selectedTab: 'home' })}>
            
                <View style={styles.container} navigator={this.props.navigator}>
                      <Headline text={this.state.selectedTab}></Headline>
                     <Home></Home>
                </View>
                
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'read'}
                title="阅读"
                renderIcon={() => <Image style={styles.icon} source={require("./images/read.png")} />}
               renderSelectedIcon={() => <Image style={styles.icon} source={require("./images/read_selected.png")}></Image>}
                onPress={() => this.setState({ selectedTab: 'read' })}>
             <View style={styles.container} navigator={this.props.navigator}>
                <Headline text={this.state.selectedTab}></Headline>
                  <Read></Read>
             </View>
           
            </TabNavigator.Item>
             <TabNavigator.Item
                selected={this.state.selectedTab === 'music'}
                title="音乐"
                   renderIcon={() => <Image style={styles.icon} source={require("./images/music.png")} />}
               renderSelectedIcon={() => <Image style={styles.icon} source={require("./images/music_selected.png")}></Image>}
                onPress={() => this.setState({ selectedTab: 'music' })}>
                <View style={styles.container} navigator={this.props.navigator}>
                   <Headline text={this.state.selectedTab}></Headline>
                   <Music></Music>
                </View>
                
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'movies'}
                title="电影"
                   renderIcon={() => <Image style={styles.icon} source={require("./images/movie.png")} />}
               renderSelectedIcon={() => <Image style={styles.icon} source={require("./images/movie_selected.png")}></Image>}
                onPress={() => this.setState({ selectedTab: 'movies' })}>
                <View style={styles.container} navigator={this.props.navigator}>
                    <Headline text={this.state.selectedTab}></Headline>
                   <Movies></Movies>
                </View>
                   
            </TabNavigator.Item>
         </TabNavigator>
        </View>
              
     
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
   
  }
})
AppRegistry.registerComponent('One', () => One);
              
              
      
              
             
        

                
              

              



