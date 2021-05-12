from flask import Flask, request, render_template
import numpy as np

# from flask import Flask
app = Flask(__name__)


# model=pickle.load(open('model.pk1', 'rb'))

@app.route('/')
def index():
    return render_template("index.html")

    #prediction that will connect to model and templates/index.html

    # @app.route('/',methods=['POST', 'GET'])
    # def predict():
    #     '''
    #     For rendering results on HTML GUI
    #     '''
    #     int_features = [int(x) for x in request.form.vaules()]
    #     final = [np.array(int_features)]
    #     prediction = model.predict_proba(final)
    #     output ='{0:.{1}f'.format(prediction[0][1], 2)


    #     if output>str(0):
    #         return render_template('index.html', pred=' Your review is negative')
    #     else:
    #         return render_template('templates/index.html', pred='Your review is negative')

if __name__== '__main__':
    app.run()


########### Default Code
# from flask import Flask, render_template

# # from flask import Flask
# app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template("index.html")

