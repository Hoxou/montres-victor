import * as React from 'react';
import Link from '../components/atoms/link';
import colors from "../components/colors";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import NavBar from '../components/molecules/navbar'

const Test = () => {
    return (

            <div>
                <NavBar/>
                <h1>Hello World</h1>
                <Link color={colors.purple3} to="/" text="Go back home"/>
                <ul style={{background:colors.navbg}}>
                    <li>Home</li>
                    <li>Posts</li>
                    <li>Photos</li>
                    <li>Watch vocabulary</li>
                    <li>About</li>
                </ul>
            </div>
            
    )
}

export default Test;