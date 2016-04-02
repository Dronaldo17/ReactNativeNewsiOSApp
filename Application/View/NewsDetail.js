/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */
'use strict';

var React = require('react-native');

var LoadingView = require('./Loading');

var {
    Image,
    StyleSheet,
    Text,
    View,
    WebView,
} = React;

var NewsDetail = React.createClass({
    componentDidMount : function() {

    },
    render : function() {
        var news = this.props.news;
        console.log("news",news);
        return (
          <WebView
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={{uri: news.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={true}
        />
        );
    }
});

var styles = StyleSheet.create({
  webView: {
      marginBottom : 0,
      marginTop:64,
  },
});

module.exports = NewsDetail;
