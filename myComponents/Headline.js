import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
  
} from 'react-native';
export default class Headline extends Component{
  
    render(){
        return (
            <View style={styles.headline}> 
            <TouchableOpacity>
                     <Image source={require('../images/search.png')}></Image>
            </TouchableOpacity>
              <Text style={styles.headlineText}>{this.props.text}</Text>  
               <TouchableOpacity>
               <Image source={require('../images/person.png')}></Image>
            </TouchableOpacity>
          </View>)
        
    }
}
const styles=StyleSheet.create({
    headline:{
      
        flexDirection:'row', 
        height:50,
      
        justifyContent:'space-between',    
        alignItems:'center',
        
    },
    headlineText:{
        fontSize:20,
        color:'blue',
    }
})