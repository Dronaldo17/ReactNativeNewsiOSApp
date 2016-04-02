'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
  Image,
} from 'react-native';

var SportNewsList = require('./Application/View/Sports')
var SocialNewsList = require('./Application/View/Social')
var KejiNewsList = require('./Application/View/Keji')
var GuojiNewsList = require('./Application/View/Guoji')


class reactTest extends Component {
  constructor(props) {
    super(props)
    this.state={
      selectedTab: 'sports'
    }
  }
  render() {
    return (
      <TabBarIOS>
       <TabBarIOS.Item
         title="体育"
         selected={this.state.selectedTab === 'sports'}
          icon = {require('./image/iconNormal.png')}
         onPress={() => {
           this.setState({
             selectedTab: 'sports'
           })
         }}>
         <NavigatorIOS style={styles.nav} initialRoute={{ title: '体育', component: SportNewsList }} />

       </TabBarIOS.Item>

       <TabBarIOS.Item
         title="社会"
         selected={this.state.selectedTab === 'social'}
          icon = {require('./image/iconNormal.png')}
         onPress={() => {
           this.setState({
             selectedTab: 'social'
           })
         }}>
         <NavigatorIOS style={styles.nav} initialRoute={{ title: '社会', component: SocialNewsList }} />
       </TabBarIOS.Item>
       <TabBarIOS.Item
         title="科技"
         selected={this.state.selectedTab === 'keji'}
        icon = {require('./image/iconNormal.png')}
         onPress={() => {
           this.setState({
             selectedTab: 'keji'
           })
         }}>
           <NavigatorIOS style={styles.nav} initialRoute={{ title: '科技', component: KejiNewsList }} />
       </TabBarIOS.Item>
       <TabBarIOS.Item
         title="国际"
         selected={this.state.selectedTab === 'guoji'}
          icon = {require('./image/iconNormal.png')}
         onPress={() => {
           this.setState({
             selectedTab: 'guoji'
           })
         }}>
         <NavigatorIOS style={styles.nav} initialRoute={{ title: '国际', component: GuojiNewsList }} />
          </TabBarIOS.Item>
     </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  nav: {
    flex: 1
  },
});

AppRegistry.registerComponent('reactTest', () => reactTest);
