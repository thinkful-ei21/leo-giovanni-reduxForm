import React from 'react';


export default class TestForm extends React.Component {



    render(){
        return(
        <div className='delivery-form'>
            <form>
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


