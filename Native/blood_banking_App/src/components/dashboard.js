import React from 'react'
import { Container, Drawer, Header, Button, Left, Title, Body, Icon } from "native-base";
import { CustomHeader, DonorsList, Sidebar, CustomDrawer } from "./index";

class Dashboard extends React.Component {
    render() {
        return (
            <CustomDrawer {...this.props} title="Blood Banking"
                ref={(ref) => { this.drawer = ref; }}
                content={<Sidebar control={this.props} />}
                onClose={() => this.closeDrawer()} >
                <DonorsList donors={this.props.donors} />
            </CustomDrawer>
        );
    }
}
export default Dashboard;