
import React, {useRef, useState} from 'react';
import {TextField, Container, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import Log from './Log'

const useStyles = makeStyles({
    textContainer: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,   
      paddingRight: '80px'
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

    },
    predict:{
        display : "flex",
        justifyContent : 'center',
        alignItems : 'center',
        
    }
});


function PredictPage(){
    const classes = useStyles();
    const [text, setName] = React.useState("");
    const [result, setResult] = React.useState("");
    const [show, setShow] = useState(true)
    //const valueRef = useRef('')
    let myRef = React.createRef();
    let input = ""

    const [NegReviews, setNegReviews] = useState(["The movie was very bad", "Production has reset, resulting in product being delayed by 2 weeks"])
    const [PosReviews, setPosReviews] = useState(["That show was amazing."])
    const [NeuReviews, setNeuReviews] = useState(["The movie wasn't too bad."])

    const toggleTable = () =>{
        show  = !show
    }

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
        if(data == "Your review is positive"){
            PosReviews.push(data)
        }else if (data == "Your review is negative" ){
            NegReviews.push(data)
        }
        else{
            NeuReviews.push(data)
        }

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

        <div>
            <div className = {classes.predict} >

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

                <h2>{result}</h2>
            </Container>

        </div>
            
            
            <Button onClick = {() => setShow(!show)} >
            Toggle Table
            </Button>

            { show == true ? <div style = {{display : "flex",
                justifyContent : 'center',
                alignItems : 'center',}}>

                <Container style = {{ width : "70%" }} >
                    <Table  className="table table-dark table-borderless" variant = 'dark'>
                        <thead>
                            <tr  class="text-primary">
                                <th scope = 'col'>#</th>
                                <th scope = "col"> Positive Reviews</th>
                            </tr>
                        </thead>
                        <tbody>
                            {PosReviews.map((item, index)=>{
                                if( index <= 4){
                                    return (
                                        <tr class="table-success" >
                                            <th scope="row">{index + 1}</th>
                                            <td>{item}</td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </Table>
                </Container>

                <Container>
                    <Table  className="table table-dark table-borderless"  variant = 'dark'>
                        <thead>
                            <tr  class="text-primary">
                                <th scope = 'col'>#</th>
                                <th scope = "col"> Negative Reviews</th>
                            </tr>
                        </thead>
                        <tbody>
                            {NeuReviews.map((item, index)=>{
                                if(index <= 4){
                                    return (
                                        <tr class="table-danger">
                                            <th scope="row">{index + 1}</th>
                                            <td>{item}</td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </Table>
                </Container>

                <Container>
                    <Table  className="table table-dark table-borderless"  variant = 'dark'>
                        <thead>
                            <tr  class="text-primary">
                                <th scope = 'col'>#</th>
                                <th scope = "col"> Negative Reviews</th>
                            </tr>
                        </thead>
                        <tbody>
                            {NegReviews.map((item, index)=>{
                                if(index <= 4){
                                    return (
                                        <tr class="table-danger">
                                            <th scope="row">{index + 1}</th>
                                            <td>{item}</td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </Table>
                </Container>

            </div> : 
                <div> Press Toggle Button </div>
            }
        
        </div>
    )
}

export default PredictPage;