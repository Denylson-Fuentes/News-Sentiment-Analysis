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

news1 = pd.read_csv('./djia_news/djia_news copy.csv')
news2 = pd.read_csv("./nasdaq/nasdaq.csv")
combined_news = news1.append(news2)
combined_news = combined_news[combined_news.Label != 2]#removing contant label entries
news_train, news_test = train_test_split(combined_news,test_size = .20, random_state = 1)#Feel free to adjust test_size, random_state allows you to replicate

labels_train = news_train['Label'].tolist() # separating each column into a list
ticker_train = news_train['Ticker'].tolist()
headline_train = news_train['Headline'].tolist()
labels_test = news_train['Label'].tolist() # testing data
ticker_test = news_train['Ticker'].tolist()
headline_test = news_train['Headline'].tolist()

vocab_size = 15000 #adjust
dim_size= 16 #adjust
input_len = 69 #adjust
tokenizer = Tokenizer(num_words = vocab_size, oov_token = "<OOV>")
tokenizer.fit_on_texts(headline_train)
word_index = tokenizer.word_index

train_sequence = tokenizer.texts_to_sequences(headline_train)
train_padded = pad_sequences(train_sequence, padding = "post", truncating = 'post')

test_sequence = tokenizer.texts_to_sequences(headline_test)
test_padded = pad_sequences(test_sequence, padding = "post",truncating = 'post')

#Feel free to add layers, change activation function and/or number of number of nodes
#dropout layers can be added
model = tf.keras.Sequential([
    tf.keras.layers.Embedding(vocab_size, dim_size , input_length = input_len ),
    tf.keras.layers.GlobalAveragePooling1D(), #Pooling
    tf.keras.layers.Dense(24,activation= 'relu'),
    tf.keras.layers.Dense(1,activation = 'sigmoid')
])
model.compile(loss = 'binary_crossentropy',optimizer = 'adam',metrics = ['accuracy'])

train_padded = np.array(train_padded)
labels_train = np.array(labels_train)
test_padded = np.array(test_padded)
labels_test = np.array(labels_test)

num_epochs = 30 #adjust
history = model.fit(train_padded, labels_train, epochs=num_epochs, validation_data=(test_padded, labels_test), verbose=2)

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

model.save('model.pb')
with open('tokenizer.pickle', 'wb') as handle:
    pickle.dump(tokenizer, handle, protocol=pickle.HIGHEST_PROTOCOL)
