import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import './style.css';

class Item extends Component {
    render() {
        const { data, type, addItem, removeItem } = this.props;

        return (
            <div className='item-container'>
                <div className='img-wrap'>
                    <img className='movie-img' src={data.img} alt='video-img' />
                    { type === 'mylist' ? (
                        <button onClick={() => removeItem(data)}>Remove</button>
                    ) : (
                        <button onClick={() => addItem(data)}>Add</button>
                    )
                    }
                </div>
                <h5>{data.title}</h5>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: data => {
            dispatch(actions.addItem(data));
        },
        removeItem: data => {
            dispatch(actions.removeItem(data));
        }
    };
};

export default connect(null, mapDispatchToProps)(Item);
