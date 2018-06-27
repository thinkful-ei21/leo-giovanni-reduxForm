import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, lenFive, onlyNum} from './validators';


export class TestForm extends React.Component {
    onSubmit(values){
        console.log(values)
        return fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report', {
            method: 'POST',
            body: JSON.stringify(values),
        })
        .then(res=>{
            if(!res.ok){
                throw new SubmissionError({
                 _error: 'Error submitting message'
                })
        }
    })
    // .then(res => {console.log(res)})
}

    render(){
        let successMessage;
        if (this.props.submitSucceeded){
            successMessage = (
                <div className= "message">Success!</div>
            )
        }
        let errorMessage;
        if (this.props.error){
            errorMessage = (
                <div className= "message">{this.props.error}</div>
            )
        }
        return(
        <div className='delivery-form'>
            <form
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
            >
                {successMessage}
                {errorMessage}
                <Field
                    name= 'trackingNumber'
                    type= 'text'
                    component= {Input}
                    label= 'trackingNumber'
                    validate = {[required, nonEmpty, lenFive, onlyNum]}
                />
                <div className='form-input'>
                    <label for='issue'>issue</label>
                        <Field name="issue" component="select" validate= {required} >
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
    form: 'return',
    onSubmitFail: (errors, dispatch) =>
    dispatch(focus('return', Object.keys(errors)[0]))
})(TestForm);

