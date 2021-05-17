import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
import pickle

model = keras.models.load_model('model.pb')
with open('tokenizer.pickle', 'rb') as handle:
    tokenizer = pickle.load(handle)

    ## This part of the code is for demontration purposes
sentence = ["Ford Stocks Rise After Awesome Profits Earned","Intel Stock Is Sliding Because Its Problems Are Big Problems and the Solutions Aren’t Easy"]
sequences = tokenizer.texts_to_sequences(sentence)
padded = pad_sequences(sequences, maxlen=69, padding='post', truncating='post')
prediction = model.predict(padded)
result = []
j=0
for i in prediction:
    if i > 0.5:
        result.append('Positive Sentiment')
    else:
        result.append('Negative Sentiment')
    j=+1

j = 0
for i in sentence:
    print(i,":",result[j])
    j=+1
