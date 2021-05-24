from flask_wtf import FlaskForm
from wtforms import SubmitField
from wtforms.fields.simple import TextAreaField
from wtforms.validators import DataRequired, Length
from wtforms.widgets import TextArea

#This is the form that populates the webpage '/' and '/predict'
class textForm(FlaskForm):

    text = TextAreaField('Enter Text', validators=[DataRequired(), Length(min=1)], widget=TextArea())
    submit = SubmitField('Predict')
