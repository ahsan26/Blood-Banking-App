import React from 'react'
import { Container } from "native-base";
import { CustomHeader, DonorsList } from "./index";
const Dashboard = (props) => {
    return (
        <Container>
            <CustomHeader />
            <DonorsList />
        </Container>
    )
}
export default Dashboard;