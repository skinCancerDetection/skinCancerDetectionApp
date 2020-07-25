import React from 'react';
import {
    Image,
    StatusBar,
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import Constants from 'expo-constants';

const { statusBarHeight } = Constants;

// galio components
import {
    Block, Card, Text, Icon, NavBar,
} from 'galio-framework';
import theme from '../../theme';

const { width, height } = Dimensions.get('screen');

const AboutUs = props => (
    <Block>
        <Text style={styles.text}>
            Skin Cancer Detiction Application Mission ?
             </Text>
    </Block>
    <Block>
        <Text style={styles.text}>
            Health Care is one of the most important aspects of the technological revolution,
            Skin Cancer Detiction Application uses the latest technologies to detect cancer.
            Our Mission is to save lives from cancer. we aim to raise awarness of the
            importance of the early detection of skin cancer by Allowing you to become aware of your own skin
          </Text>
    </Block>
);

const styles = StyleSheet.create({
    title: {
        fontSize: theme.SIZES.FONT * 1.25,
        lineHeight: theme.SIZES.FONT * 2.00,
    },
    text: {
        fontSize: theme.SIZES.FONT * 0.875,
        lineHeight: theme.SIZES.FONT * 1.25,
    },
});

export default AboutUs;