import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
 
 

  
} from 'react-native';
let Dimensions=require('Dimensions');
var totalWidth=Dimensions.get('window').width;
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            imgUrl:'hh'
        }
    }
    componentDidMount(){
        fetch(`http://news-at.zhihu.com/api/4/start-image/1080*1776`).then((res)=>res.json()).then((resjson)=>{
        
            this.setState({
                imgUrl:resjson.img
            })
        }).catch((error)=>{console.error(error)});
    }
    render(){
        return (
            <View style={styles.headline}> 

                <View style={styles.imgBox}>
                    <Image source={{uri:this.state.imgUrl}}
                        style={styles.imgStyle} resizeMode="cover"/>
                </View>  
                <View style={styles.textBox}>
    <Text style={{fontSize:16,elevation:50}}>青春千般好，也好不过金色阳光下，带着青草香气的无知，风吹雨打要抗过，江河湖海要闯过，既不害怕未知的将来，也不憎恨某一部分的自己。</Text>
                </View>
            
          
          </View>)
        
    }
}
const styles=StyleSheet.create({
    headline:{
        flex:1,
         flexDirection: 'column',
     
        alignItems:'center',
    },
    imgStyle:{
        width:totalWidth*0.9,
        height:350
    },
    imgBox:{
      marginTop:20
    },
    textBox:{
        marginTop:10,
        width:totalWidth*0.9,
    
     
        
    }

        
      
        
    
})