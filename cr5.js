import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
    Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');
export default class cr5 extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
          <Image source={require('../assets/ww.jpeg')}
            style={{width:width,
            height:150}}/>
          </View>

            <View style={{paddingLeft:13,
                  paddingRight:13,
              }}>
                  <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',

                  }}>
                      <Text style={{
                        fontSize: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(0,160,169,1)',
                        fontWeight: 'bold',
                        paddingTop:20,
                        paddingBottom:30,
                        paddingLeft: 7
                      }}>PITCH PERFECT</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                          In the first round, the participants are given roles of pioneers in the field of Energy and Sustainability. The plane is about to crash and participants have to "convince" the panel why they should be rescued, using a clear mention of facts and logic. In the second round, participants would be allotted technology in the field of Power and Energy, given time for preparation, they will have to pitch that technology and its use in the real world, just like the show 'Shark Tank' World.
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          }}>
                           Participation: Individual
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Registration Fee: 70/- per individual(IEEE Members);
                                       100/- per individual (non-IEEE Members)

                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize money:1st-1000/-INR ; 2nd-500/-INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date: 14/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 11.30AM to 2PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: EE6007 and EE6008 PG BLOCK 6th Floor
                        </Text>
                        </View>
                    </View>
                    <View style={{padding:7,
                          backgroundColor: 'rgba(0,0,0,0.4)',
                        borderRadius: 4,
                      }} >
                    <View>

                        <Text style={{
                          fontSize: 19,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          paddingBottom:10,
                          fontWeight: 'bold',
                          }}>Rules of the event:</Text>
                    </View>
                    <View>
                        <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
1.After technology/pioneer is allotted to the participant, preparation time would be given to make their pitch ready.
                         </Text>
                                                <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                      2.Taking help from other participants is not allowed.
                         </Text>
                                                <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                      3.The decision of the event coordinator is final.
                         </Text>
                    </View>
                    </View>
                    <View style={{padding:10,
                    backgroundColor: '#00000000'}} />
                    <View style={{padding:7,
                          backgroundColor: 'rgba(0,0,0,0.4)',
                        borderRadius: 4,
                        paddingTop:10
                      }}>
                        <Text style={{
                          fontSize: 19,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          paddingBottom:10,
                          fontWeight: 'bold',
                          }}>Event Coordinators:</Text>
                        <Text style={{fontSize: 15,
                          }}>
                              1.Hakshay- 7204205366
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2.Banashree- 9620086018
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}
