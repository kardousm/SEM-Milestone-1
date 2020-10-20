import os
import pyrebase
import urllib
import imutils
from PIL import Image
import pytesseract
import cv2
from skimage import io
import io
import json
import numpy as np
import requests
import ocrspace
import firebase_admin
from firebase_admin import credentials
import threading


# c261a1f71388957

# image_url = storage.child("images/test-image").get_url(None)
# img = io.imread(image_url)
# text = pytesseract.image_to_string(img, lang='eng')
# print(text)


# storage.child("images/test-image").download("img.jpg")
# im3 = Image.open('img.jpg')
# text = pytesseract.image_to_string(im3, lang='eng')
# print(text)


config = {
    'apiKey': "AIzaSyAlmL5SCGZDlu0pieccj_YsxSulPlHTVtg",
    'authDomain': "sem-assignment.firebaseapp.com",
    'databaseURL': "https://sem-assignment.firebaseio.com",
    'projectId': "sem-assignment",
    'storageBucket': "sem-assignment.appspot.com",
    'messagingSenderId': "223151166275",
    'appId': "1:223151166275:web:44879f05fab298831f95f6",
    'serviceAccount': "sem-assignment-firebase-adminsdk-s44fr-4719d5688a.json"
}

temp = 0
cred = credentials.Certificate('sem-assignment-firebase-adminsdk-s44fr-4719d5688a.json')
firebase_admin.initialize_app(cred)
firebase = pyrebase.initialize_app(config)
storage = firebase.storage()
callback_done = threading.Event()
db = firebase.database()
api = ocrspace.API('e680ab78ba88957')


#c261a1f71388957

# print(db.child("images").get().val())

def stream_handler(event):
    global temp
    if temp == 0:
        temp += 1
    else:
        #storage.child("images/test-image").download("test-image.jpg")
        #print(api.ocr_file('test-image.jpg'))
        print('entered')
        #image_url = storage.child("images/test-image").get_url(None)
        #print(api.ocr_url(image_url))

        storage.child("images/test-image").download("test-image.jpg")
        im = cv2.imread("test-image.jpg")
        h, w, c, = im.shape
        foo = Image.open("test-image.jpg")
        foo = foo.resize((w, h), Image.ANTIALIAS)
        foo.save("test-image-c.jpg", quality=80, optimize=True)
        print(api.ocr_file('test-image-c.jpg'))


my_stream = db.child("images").stream(stream_handler)


