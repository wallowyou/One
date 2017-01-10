import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  Image,
  Dimensions

} from 'react-native';
let totalWidth=Dimensions.get('window').width;

var HTML=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .gcbox{text-align:center;line-height:20px;}
        html,body{width:100%;}
       img{width:100%;}
        #container{width:100%;text=algin:center;}
        .box{width:80%;margin:0 auto;border:1px solid blue;text-algin:center}
        .audio_box{
            text-algin:center;
        }
    </style>
</head>
<body>
    <div id="container">
        <div class="box">
            <img src="http://1.justoneapp.applinzi.com/img/music_bg.jpg" alt=""/>
        
        </div>
        <div class="audio_box">
            <audio src="http://1.justoneapp.applinzi.com/res/byebye.mp3" controls></audio>
        </div>
          
    </div>
    <div class="gcbox">
    夜空中最亮的星 - 逃跑计划<br/>
        夜空中最亮的星 能否听清<br/>
        那仰望的人 心底的孤独和叹息<br/>
        夜空中最亮的星 能否记起<br/>
        曾与我同行 消失在风里的身影<br/>
        我祈祷拥有一颗透明的心灵<br/>
        和会流泪的眼睛<br/>
        给我再去相信的勇气<br
        每当我找不到存在的意义<br/>
        每当我迷失在黑夜里<br/>
        oh夜空中最亮的星<br/>
        请指引我靠近你<br/>
        夜空中最亮的星 是否知道<br/>
        曾与我同行的身影如今在哪里<br/>
        oh夜空中最亮的星 是否在意<br/>
        是等太阳升起 还是意外先来临<br/>
        我宁愿所有痛苦都留在心里<br/>
        也不愿忘记你的眼睛<br/>
        给我再去相信的勇气<br/>
        oh越过谎言去拥抱你<br/>
        每当我找不到存在的意义<br/>
        每当我迷失在黑夜里<br/>
        oh夜空中最亮的星 oh请照<br/>亮我前行
        我祈祷拥有一颗透明的心灵<br/>
        和会流泪的眼睛 给我再去相信的勇气<br/>
        oh越过谎言去拥抱你 每当我找不到存在的意义<br/>
        每当我迷失在黑夜里 oh夜空中最亮的星<br/>
        oh请照亮我前行<br/>
        夜空中最亮的星 能否听清<br/>
        那仰望的人 心底的孤独和叹息<br/>
    </div>
    
</body>
</html>

`;
export default class Music extends Component{
    render(){
        return (
            <View style={styles.headline}> 
                 <WebView style={styles.webview_style}
                
                source={{html:HTML}}
                //加载状态显示
                startInLoadingState={true}
                //存储 IOS是默认支持的
                domStorageEnabled={true}
                //是否支持javascript
                javaScriptEnabled={true}
            />
           
          
          </View>)
        
    }
}
const styles=StyleSheet.create({
    headline:{
      flex:1,
        height:50,
      
        alignItems:'center',
      
        
    },
    imgStyle:{
        width:300,
        height:300,
    },
    webview_style:{
        width:totalWidth,
  
    }
  
})
      