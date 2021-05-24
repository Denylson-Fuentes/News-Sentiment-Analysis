
import React, {useRef} from 'react';
import {TextField, Container, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    textContainer: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    welcomeContainer:{
        padding: '5% 0'
    },
    welcome:{
       fontSize: 100,
       color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' 
    },
    formContainerStyle:{
        padding: "10% 0",

    }
});


function PredictPage(){
    const classes = useStyles();
    const [text, setName] = React.useState(0);
    const [result, setResult] = React.useState(0);
    //const valueRef = useRef('')
    let myRef = React.createRef();
    let input = ""

    const handleSubmit = event =>{
        event.preventDefault();
        console.log(text)
        let data = {text: text}
        fetch('http://127.0.0.1:5000/predict',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        //Then with the data from the response in JSON...
        .then((data) => {
        console.log('Success:', data);
        setResult(data)
        })
        //Then with the error genereted...
        .catch((error) => {
        console.error('Error:', error);
        });
        
        //console.log(document.getElementById('field1').value)
        //console.log(this.refs.myField.input.value)
        //console.log(this.myRefs.username.value);
    }

    // const readTextFieldValue = () => {
    //     console.log(myRef.current.value)
    //   }
    
    return(
        <div className="PredictPage">
            <Container maxWidth='sm' className={classes.formContainerStyle}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        multiline
                        rows={5}
                        rowsMax={10}
                        placeholder="Please enter some text for the sentiment Analysis model"
                        variant="outlined"
                        fullWidth
                        value={text}
                        onChange={(e) => setName(e.target.value)}
                        //ref={myRef}
                        id="field1"
                        //inputRef={(c) => {this.myRefs.username = c}}
                        //inputRef={myRef}
                        //ref={(inputText) => input = inputText}
                    >
                    </TextField>
                    
                    <Button variant="contained" color="primary" type="submit">
                        button
                    </Button>
                </form>
            </Container>

        </div>
    )
}

export default PredictPage;