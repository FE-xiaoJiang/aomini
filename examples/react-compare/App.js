import React from 'react';
import Module1 from './Module1';
import ModuleX from './ModuleX';
import SubModule21 from './SubModule21';

/**
* 入口组件
*/
class App extends React.Component{
    constructor(){
        super();
        this.name = "App";
        this.state = {
            moduleQuantity:900
        }
        // store.bindContext(this);
    }
    render(){
        let {moduleQuantity} = this.state;
        console.log("moduleQuantity:",moduleQuantity)
        return (
            <div>
                <Module1 moduleQuantity={moduleQuantity} setModuleQuantity={this.setModuleQuantity.bind(this)} />
                <SubModule21 setModuleQuantity={this.setModuleQuantity.bind(this)} />
                <ModuleX moduleQuantity={moduleQuantity} />
            </div>
            )
    }
    setModuleQuantity(moduleQuantity){
        this.setState({
            moduleQuantity
        })
    }
}

export default App;