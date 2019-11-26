import React , { Component } from 'react';

export default class  extends Component {
    constructor ( props ) {
        super ( props );
        this.load(props); //调用下面load
        this.state={
            Com:null
        };
    };

    componentWillMount() {
        this.load(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    }

    load(props){ //this.props.load()就是调用indexrou.jsx传过来的函数
        props.load().then((Com)=>{
           console.log(Com.default);//得到的就是传过来的函数
            this.setState({
                Com:Com.default?Com.default:null
            });
        });
    };

    render () {
        if(!this.state.Com){
            return null;
        }else{
            return this.props.children(this.state.Com);
        }
    };
};