  import React, { Component } from 'react';
  import Dropzone from 'react-dropzone'

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'stages': 'first', 
    };
  }
  onStageChange(stage){
    const refs = this.refs;


    refs[this.state.stages].className="hideUp";
   
    setTimeout(()=> {
      for(let key in refs) {
        refs[key].className = 'questionHidden';
      };
    }, 400)
    

    
    
    switch(stage){
      case 'first': {
        setTimeout(()=> {
          this.refs['first'].className="question";
        }, 400)
        break;
      }
      case 'second': {
        
        setTimeout(()=> {
          this.refs['second'].className="question";
        }, 400)
        break;
      }
      case 'third': {
        setTimeout(()=> {
          this.refs['third'].className="question";
        }, 400)
        break;
      }
      case 'forth': {
        setTimeout(()=> {
          this.refs['forth'].className="question";
        }, 400)
        break;
      }
      case 'fifth': {
        setTimeout(()=> {
          this.refs['fifth'].className="question";
        }, 400)
        
        break;
      }
      case 'sixth': {
        setTimeout(()=> {
          this.refs['sixth'].className="question";
        }, 400)
        
        break;
      }
    }
    this.setState({
      'stages': stage
    });
  }
  render() {
    return (
        <div>
          <form >
            <div ref="first"  >
              <h1>What is your name? </h1>
              <span>Fill the blank down here</span>
              <br/>
              <input type="text" ></input>
              <div className="action">
                <div onClick={()=> this.onStageChange('second')} className="action-button">Next</div>
              </div>
              
            </div>
            <div ref="second" className="questionHidden">
              <h1>When is your birth date? </h1>
              <span>Fill the blank down here</span>
              <br/>
              <input type="date" ></input>
              <div className="action">
                <div onClick={()=> this.onStageChange('first')} className="action-button">Back</div>
                <div onClick={()=> this.onStageChange('third')} className="action-button">Next</div>
              </div>
              
            </div>
            <div ref="third" className="questionHidden">
              <h1>Ok, and your birth place? </h1>
              <span>Fill the blank down here</span>
              <br/>
              <input type="text" ></input>
              <div className="action">
                <div onClick={()=> this.onStageChange('second')} className="action-button">Back</div>
                <div onClick={()=> this.onStageChange('forth')} className="action-button">Next</div>
              </div>
              
            </div>
            <div ref="forth" className="questionHidden">
              <h1>Great! Now tell me where you live? </h1>
              <span>Fill the blank down here</span>
              <br/>
              <textarea ></textarea>
              <div className="action">
                <div onClick={()=> this.onStageChange('third')} className="action-button">Back</div>
                <div onClick={()=> this.onStageChange('fifth')} className="action-button">Next</div>
              </div>
              
            </div>
            <div ref="fifth" className="questionHidden">
              <h1>Last one, now upload your profile photo! </h1>
              <span>You may drag and drop the image or click the box</span>
              <Dropzone className="dropzone"/>
              <div className="action">
                <div onClick={()=> this.onStageChange('forth')} className="action-button">Back</div>
                <div onClick={()=> this.onStageChange('sixth')} className="action-button">Next</div>
              </div>
            </div>
            <div ref="sixth" className="questionHidden">
              <h1>Thank you!</h1>
              <span>This might be a loading screen where we send out your files</span>
              <br />
              <div className="action">
                <div onClick={()=> this.onStageChange('fifth')} className="action-button">Back</div>
              </div>
              
              
            </div>
          </form>
        </div>
    );
  }
}

export default RegistrationForm;
