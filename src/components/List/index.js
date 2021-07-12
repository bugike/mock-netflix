import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../Item';
import './style.css';

class List extends Component {
    render() {
        const { type, mylist, recommendations } = this.props;
        const data = type === 'mylist' ? mylist : recommendations;

        return (
            <div className='list-container'>
                { type === 'mylist' ? (
                    <h1>My List</h1>
                ) : (
                    <h1>Recommendations</h1>
                )}
                <div className='items-container'>
                    {data.map((item, index) => (
                        <Item type={type} data={item} key={index}/>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        mylist: state.mylist,
        recommendations: state.recommendations
    };
};

export default connect(mapStateToProps)(List);