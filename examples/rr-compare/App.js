import React from 'react';
import Module1 from './Module1';
import ModuleX from './ModuleX';
import { connect } from 'react-redux';
import actions from './actions';
import { mapStateToPropsConnect,mapDispatchToPropsConnect } from './connectMaps';

/**
* 入口组件
*/
class App extends React.Component{
    constructor(){
        super();
        this.name = "App";
        // store.bindContext(this);
    }
    render(){
        return (
            <div>
                <Module1 />
                <ModuleX />
            </div>
            )
    }
}
let AppHoC = connect(mapStateToPropsConnect,mapDispatchToPropsConnect)(App);

export default AppHoC;