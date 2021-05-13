from flask import Flask, render_template, redirect, url_for, request, flash
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Length
from form import textForm
import numpy as np

# from flask import Flask
app = Flask(__name__)
app.config.from_object(__name__)
# Flask-WTF requires an encryption key - the string can be anything
app.config['SECRET_KEY'] = 'FtasdgaeTWET$5rrYIyi0P'

# model=pickle.load(open('model.pk1', 'rb'))

@app.route('/',methods=['POST', 'GET'])
def index():
    form = textForm()
    if form.validate_on_submit():
        return redirect(url_for('predict'))
    return render_template("index.html", title='Predictor', form=form)

    #prediction that will connect to model and templates/index.html

@app.route('/predict',methods=['POST', 'GET'])
def predict():
        '''
        For rendering results on HTML GUI
        '''
        form = textForm()
       #int_features = [int(x) for x in request.form.vaules()]
        int_features = request.form['text']
        final = [np.array(int_features)]
        prediction = model.predict_proba(final)
        output ='{0:.{1}f'.format(prediction[0][1], 2)

        if output>str(0):
            flash(f"Your review is negative", 'danger')
        else:
            flash(f"Your review is negative", 'danger')

        return render_template("index.html", title='Predictor', form=form)

if __name__== '__main__':
    app.run()


########### Default Code
# from flask import Flask, render_template

# # from flask import Flask
# app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template("index.html")

