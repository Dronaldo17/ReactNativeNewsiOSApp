/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */
'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    ActivityIndicatorIOS,
} = React;

var Loading = React.createClass({

    render : function() {
        return (
            <View style={styles.loading}>
            <ActivityIndicatorIOS
            style={[styles.centering, {height: 100}]}
             size="large"
          />
                <Text>
                    Loading...
                </Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#ffffff',
    }
});

module.exports = Loading;
