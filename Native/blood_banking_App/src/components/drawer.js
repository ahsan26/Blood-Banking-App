import React from 'react'
import { Drawer } from "native-base";
import { CustomHeader, Sidebar } from "./index";

class CustomDrawer extends React.Component {
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };
    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Sidebar control={this.props} />}
                onClose={() => this.closeDrawer()} >
                <CustomHeader title={this.props.title}
                    openDrawer={this.openDrawer.bind(this)}
                />
                {this.props.children}
            </Drawer>
        );
    }
}
export default CustomDrawer;