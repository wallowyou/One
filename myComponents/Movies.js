import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,Image,
  Dimensions
 
} from 'react-native';
let totalWidth=Dimensions.get("window").width;

export default class Movies extends Component{
    constructor(props){
        super(props);
         this.state={
         data:[],
          dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        }
    }
    componentDidMount(){
        fetch('http://1.justoneapp.applinzi.com/img.php',{method: 'GET',
                 headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
         }}).then((res)=>res.json()).then((resjson)=>{
             
             this.setState({data:resjson,dataSource:this.state.dataSource.cloneWithRows(resjson)})
         }).catch((error)=>{console.error(error)});
    }
    _renderRow(row){
        return (
            <View style={styles.rowStyle}>
                    <Image  source={{uri:row}} style={styles.imgBox} resizeMode='cover'></Image>
            </View>
        )
    }
    
    render(){
        return (
        <View style={styles.headline}> 
            <ListView
            showsVerticalScrollIndicator={false}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}>
            
            </ListView>
          </View>)
        
    }
}
const styles=StyleSheet.create({
    headline:{
        flex:1,
      
        flex:1,
        
    },
    rowStyle:{
        flex:1,
        marginTop:10,
    },
    imgBox:{
         width:totalWidth,
         height:150,
       
    }
    
   
})