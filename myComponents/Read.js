import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  Image
} from 'react-native';

export default class Read extends Component{
    constructor(props){
        super(props);
        this.state={
         data:[],
          dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
          htmlBox:''
        }
    }
    componentDidMount(){
        fetch('http://news-at.zhihu.com/api/4/news/latest',{method: 'GET',
                 headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
         }}).then((res)=>res.json()).then((resjson)=>{
             
             this.setState({data:resjson.stories,dataSource:this.state.dataSource.cloneWithRows(resjson.stories)})
         }).catch((error)=>{console.error(error)});
    }
    _renderRow(row){
        return (
        
             <View style={styles.rowStyle}>
        
                 <TouchableOpacity  onPress={()=>{
                            fetch('http://news-at.zhihu.com/api/4/news/'+row.id,{method: 'GET',
                                headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                       }}).then((res)=>res.json()).then((resjson)=>{
                           this.setState({htmlBox:resjson.body});
    
           
                           }).catch((error)=>{console.error(error)});

                 }}>
                    <Image  source={{uri:row.images[0]}} style={styles.imgBox} resizeMode='cover'></Image>
                 </TouchableOpacity>
               <View style={styles.titleBox}>
                 <Text>{row.title}</Text>
               </View> 
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
      
    },
    rowStyle:{
   
    flexDirection:'row',
    borderWidth:1,
   marginTop:10,
   marginLeft:5,
   marginRight:5,
   paddingLeft:5,
   paddingRight:5,
    borderColor:'#eee',
    borderRadius:8,
    
    },
    imgBox:{
        width:150,
        height:150,

    },
    titleBox:{
        flex:1,
        justifyContent:'center',
        marginLeft:20
    }
   
})