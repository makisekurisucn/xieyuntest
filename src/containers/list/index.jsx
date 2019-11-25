import React from 'react';
import './index.scss';
import { getList } from '../../actions/list';
import { connect } from 'react-redux';
import Select from '../../components/Select';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: ''
        };
    }

    componentDidMount() {
        const dispatch = this.props.dispatch;
        getList(dispatch);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps.props) {
            let keys = Object.keys(nextProps.list);
            this.setState({
                selectedKey: keys[0]
            })
        }
    }

    handleSwitch = (index) => {
        let keys = Object.keys(this.props.list);
        console.log(keys[index]);
        this.setState({
            selectedKey: keys[index]
        })
    }

    render() {
        const { list = [] } = this.props;
        const { month = [], week = [] } = list;
        console.log(list);
        console.log([this.state.selectedKey]);
        console.log(list[this.state.selectedKey]);

        return (
            <div className='list_root'>
                this is list page
                <div>

                    <Select switchIndex={this.handleSwitch} list={Object.keys(list)} />
                    <ul>
                        {
                            list[this.state.selectedKey] && list[this.state.selectedKey].map(item => {
                                return <li key={item}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        list: state.list
    };
}

export default connect(mapStateToProps)(List);