import React from 'react'
import {Header} from './component/header/Header'
import {Content} from './component/content/Content'
import {Footer} from './component/footer/Footer'

export class App extends React.Component {

        render(){
            return(
            <div>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
            )
        }

}