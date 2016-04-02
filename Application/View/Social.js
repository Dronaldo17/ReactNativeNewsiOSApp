/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */
'use strict';

var React = require('react-native');

var NewAPI = require('../../NewAPI');
var LoadingView = require('./Loading');
var NewsDetail = require('./NewsDetail')

let  number =  50;
var page = 1;

var {
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Navigator
} = React;

var SocialNewsList = React.createClass({

    getInitialState : function() {
        return {
            dataSource : new ListView.DataSource({
                rowHasChanged : (row1, row2) => row1 !== row2
            }),
            loaded : false,
        }
    },
    componentDidMount : function() {
        this.fetchData();
    },
    requestFinish:function(networkData){

      var data = JSON.parse(networkData);
      var newslist = data['newslist']
      console.log(newslist);
      this.setState({
          dataSource : this.state.dataSource.cloneWithRows(newslist),
          loaded : true,
      });
    },
    fetchData : function() {
      NewAPI.social_News_Fetch(number,page,this.requestFinish);
    },
    render : function() {
        if (!this.state.loaded) {
            return (
            <LoadingView/>
            );
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderNews}
                style={styles.listView} />
        );
    },
    renderNews : function(news) {
        return (
          <TouchableOpacity onPress={() => this.onPressNews(news)}>
              <View style={styles.pageContainer}>
                  <View style={[styles.container, styles.newsItemContainer]}>
                      <Image
                      source={{uri : news.picUrl}}
                      style={styles.newsPic} />
                      <View style={styles.rightContainer}>
                          <Text style={styles.newsTitle}>{news.title}</Text>
                          <Text style={styles.newsSummary}>{news.summary}</Text>
                      </View>
                  </View>
              </View>
          </TouchableOpacity>
        );
    },
    onPressNews : function(news) {

        this.props.navigator.push({
            title: "社会新闻详情",
            component: NewsDetail,
            passProps: {news},
        });
    },
});

var styles = StyleSheet.create({
    pageContainer: {
        marginLeft : 10,
        marginRight : 10,
    },
    container: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    rightContainer: {
        flex: 1,
    },
    newsItemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb',
    },
    listView: {
        backgroundColor: '#ffffff',
        marginBottom : 50,
        marginTop:64,
    },
    newsPic : {
        width : 90,
        height : 60,
        margin: 10,
        marginLeft: 0,
    },
    newsTitle : {
        color : '#4f4f4f',
        fontSize : 16,
        textAlign : 'left',
    },
    newsSummary : {
        color : '#bababa',
        fontSize : 14,
        textAlign : 'left',
    },
});

module.exports = SocialNewsList;
