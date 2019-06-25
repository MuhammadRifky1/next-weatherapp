import React, { Component } from 'react'

class Forms extends Component {
    state = {
        isFilled: false
    }
    handleFilled = e => {
        const value = e.target.value
        if(value){
            this.setState({ isFilled: true})
        }else {
            this.setState({ isFilled: false})
        }
    }
    
    render(){
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" className={this.state.isFilled ? 'filled' : ''} onBlur={this.handleFilled} required /><br/>
                    <p className="text_muted">*) Example: Bogor</p>
                    <input type="text" name="country" className={this.state.isFilled ? 'filled' : ''} onBlur={this.handleFilled} required /><br/>
                    <p className="text_muted">*) Example: ID,UK,US etc</p><br/>
                    <button type="submit" className="btn">Check Weather</button>
                </form>
                <style jsx>{`
                    .text_muted {
                        font-size: 12px;
                        color: #ddd;
                    }
                    input {
                        background: none;
                        border: none;
                        border-bottom: 1px #000 solid;
                        width: 50%;
                        margin: 10px 0;
                        height: 50px;
                        font-size: 24px;
                        color: #fff;
                    }
                    input:focus {
                        outline: none;
                        border-bottom: 1px orange solid;
                        transition: border 500ms ease;
                    }
                    .btn {
                        background: orange;
                        border: none;
                        padding: 10px;
                        color: #fff;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                    .btn:hover {
                        background: rgba(255,165,0, .9);
                    }
                    .filled {
                        border-bottom: 1px orange solid;
                    }
                    `}
                    </style>
            </div>
        )
    }

}


export default Forms