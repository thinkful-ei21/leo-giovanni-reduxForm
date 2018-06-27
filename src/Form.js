import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';



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
                <Field
                    name= 'trackingNumber'
                    type= 'text'
                    component= {Input}
                    label= 'trackingNumber'
                />
                <div className='form-input'>
                    <label for='issue'>issue</label>
                        <Field name="issue" component="select">
                            <option value="not-delivered">My delivery hasn't arrived</option>
                            <option value="wrong-item">The wrong item was delivered</option>
                            <option value="missing-part">Part of my order was missing</option>
                            <option value="damaged">Some of my order arrived damaged</option>
                            <option value="other">Other (give details below)</option>
                        </Field>
                </div>
                <Field
                    name='details'
                    element='textarea'
                    label='details'
                    component={Input}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )}


}

export default reduxForm({
    form: 'return'
})(TestForm);

