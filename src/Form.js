import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';


export class TestForm extends React.Component {
    onSubmit(values){
        console.log(values)
    }


    render(){
        return(
        <div className='delivery-form'>
            <form
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
            >
                <div className='form-input'>
                    <label for='trackingNumber'>Tracking Number</label>
                    <input name='trackingNumber' value id='trackingNumber'></input>
                </div>
                <div className='form-input'>
                    <label for='issue'>issue</label>
                    <select name="issue" id="issue">
                        <option value="not-delivered">My delivery hasn't arrived</option>
                        <option value="wrong-item">The wrong item was delivered</option>
                        <option value="missing-part">Part of my order was missing</option>
                        <option value="damaged">Some of my order arrived damaged</option>
                        <option value="other">Other (give details below)</option>
                    </select>
                </div>
                <div className='form-input'>
                    <label for="details">Give more details (optional)</label>
                    <textarea name="details" id="details"></textarea>
                </div>   
                <button type="submit">Submit</button>
            </form>
        </div>
    )}


}

export default reduxForm({
    form: 'return'
})(TestForm);

