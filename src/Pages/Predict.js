
import {TextField, Container} from '@material-ui/core'
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
    }
});

function PredictPage(){
    const classes = useStyles();
    const [name, setName] = useState("");
    
    return(
        <div className="PredictPage">
            <Container maxWidth='sm'>
                <Form>
                    <TextField
                        multiline
                        rows={5}
                        rowsMax={10}
                        placeholder="Please enter some text for the sentiment Analysis model"
                        variant="outlined"
                        fullWidth
                    >
                    </TextField>
                </Form>
            </Container>

        </div>
    )
}

export default PredictPage;