import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import Screen from '../screens/screen';
// import { theme } from 'galio-framework';
import theme from "../../theme";
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const _handleMore = () => console.log('Shown more');

const Header = (props) => {
    
    return (
        <Appbar.Header style={{ backgroundColor: theme.COLORS.SECONDARY }}>
            <Appbar.Action icon='menu' onPress={props.drawer.navigation.openDrawer} />
           <Appbar.Content title={props.title || "   Skin Cancer Detection"} />
        </Appbar.Header>
    );
}

export default Header;