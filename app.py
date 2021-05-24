from flask import Flask, render_template, redirect, url_for, request, flash, jsonify
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Length
from form import textForm
import numpy as np
import pickle
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import pickle5
from flask_cors import CORS

#tf model & Tokenizer
model = keras.models.load_model('model.pb')
with open('tokenizer.pickle', 'rb') as handle:
    tokenizer = pickle5.load(handle)

# from flask import Flask
app = Flask(__name__)
CORS(app)
app.config.from_object(__name__)
# Flask-WTF requires an encryption key - the string can be anything
app.config['SECRET_KEY'] = 'FtasdgaeTWET$5rrYIyi0P'

# model=pickle.load(open('model.pk1', 'rb'))
def shutdown_server():
    func = request.environ.get('werkzeug.server.shutdown')
    if func is None:
        raise RuntimeError('Not running with the Werkzeug Server')
    func()

@app.route('/shutdown', methods=['GET'])
def shutdown():
    shutdown_server()
    return 'Server shutting down...'

# @app.route('/',methods=['POST', 'GET'])
# def index():
#     form = textForm()
#     if form.validate_on_submit():
#         return redirect(url_for('predict'))
#     return render_template("index.html", title='Predictor', form=form)

    #prediction that will connect to model and templates/index.html

@app.route('/predict',methods=['POST'])
def predict():
        '''
        Returns the results from the text sent from the user
        '''
        #form = textForm()
       #int_features = [int(x) for x in request.form.vaules()]
        print(request)
        print(request.is_json)
        text = request.get_json()['text']
        int_features = text
        int_features = [str(int_features)]
        sequences = tokenizer.texts_to_sequences(int_features)
        final = pad_sequences(sequences, maxlen=69,padding = 'post',truncating='post')
        prediction = model.predict(final)
        output =prediction[0]
        outputData= None

        if output> 0.5:
            outputData = "Your review is positive"
        else:
            outputData = "Your review is negative"

        print(output)
        return jsonify(output=outputData)

        '''if output> 0.5:
            flash(f"Your review is positive", 'success')
        else:
            flash(f"Your review is negative", 'danger')

        return render_template("index.html", title='Predictor', form=form)'''

if __name__== '__main__':
    app.run(debug = True)
