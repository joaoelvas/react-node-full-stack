import React, {PureComponent} from 'react'

class Life extends PureComponent {

    // 1 get default props

    // 2 set default state~
    state = {
        title: 'Life cycles'
    }

    // 3 before render
    componentWillMount() {
        console.log('before render')
    }

    componentWillUpdate() {
        console.log('before update')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.state.title)
        console.log(nextState.title)
        if(nextState.title === 'something else'){
            return false
        }


        // console.log('next state:' + nextState);
        return true;
    }
    
    componentWillReceiveProps() {
        console.log('BEFORE RECEIVE PROPS')
    }

    componentWillUnmount() {
        console.log('UNMOUNT')
    }

    // 4 render

    render() {
        console.log('RENDER')
        return (
            <div>
                <h3>{this.state.title}</h3>
                <div 
                    onClick={
                        () => this.setState({
                            title: 'something else'
                        })
                    }>
                    Click to change!
                </div>
            </div>
            
        )
    }

    // 5 after render
    componentDidMount() {
        console.log('after render')
    }

    componentDidUpdate() {
        console.log('after update')
    }

}

export default Life;