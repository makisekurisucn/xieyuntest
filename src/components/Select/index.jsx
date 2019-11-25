import React from 'react';
import './index.scss';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            isListShow: false
        };
    }

    handleBlur = () => {
        this.setState({
            isListShow: false
        })
    }

    toggleList = () => {
        let isShow = this.state.isListShow;
        this.setState({
            isListShow: !isShow
        })
    }

    handleSelect = (index) => (event) => {
        if (this.props.switchIndex) {
            this.props.switchIndex(index);
        }
        this.setState({
            selectedIndex: index,
            isListShow: false
        })
    }


    render() {
        const { list } = this.props;
        const { selectedIndex, isListShow } = this.state;
        return (
            <div className='select_root' tabIndex={0} onBlur={this.handleBlur}>
                <div className={isListShow ? 'select_display select_display_focus' : 'select_display'} onClick={this.toggleList}>
                    <div>{list[selectedIndex]}</div>
                    <div className={isListShow ? 'icon-arrow_down select_arrow select_arrow_rotate' : 'icon-arrow_down select_arrow'}></div>
                </div>
                <div className={isListShow ? 'select_list select_list_show' : 'select_list'}>
                    {
                        list.map((item, index) => {
                            return <div className='select_option' key={item} onClick={this.handleSelect(index)}>{item}</div>
                        })
                    }
                </div>
            </div>
        );

    }
}

export default Select;