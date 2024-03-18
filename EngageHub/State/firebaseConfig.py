import pyrebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import reflex as rx
from ..components.eventCard import EventState
config = {
 "apiKey": "AIzaSyDvGnYNlMBLq5cDR8w06abvj-PQ-MN7kbc",
  "authDomain": "engagehub-7a1ab.firebaseapp.com",
  "projectId": "engagehub-7a1ab",
  "storageBucket": "engagehub-7a1ab.appspot.com",
  "messagingSenderId": "983754062149",
  "appId": "1:983754062149:web:91b435866d838ae4b3e62c",
  "databaseURL": "https://engagehub-7a1ab-default-rtdb.asia-southeast1.firebasedatabase.app/",
  "serviceAccount": "engagehub-7a1ab-firebase-adminsdk-3hzsz-cd6e2eb4e3.json"
}
cred = credentials.Certificate(r"engagehub-7a1ab-firebase-adminsdk-3hzsz-cd6e2eb4e3.json")
firebase = pyrebase.initialize_app(config)
firebase_admin.initialize_app(cred)
firestoreDb = firestore.client()
data={
    'Event_id':1,
    'Event_Name': "Techno",
    'Details':"adsifknaksdfn"
}
# docRef = firestoreDb.collection("Events").document('Event1')
# docRef.set(data)
auth = firebase.auth()
db = firestore.client()
def add_user_to_firestore(user_data):
    try:
        email = user_data.get("email")
        # Add the user to the 'users' collection
        db.collection('users').document(email).set(user_data)
        print("User added to Firestore successfully!")
    except Exception as e:
        print("Error:", e)

def read_event_details():
    try:
        # Initialize an empty list to store event details
        events_list = []

        # Retrieve all documents from the 'Events' collection
        events_ref = db.collection('Event').stream()
        for event in events_ref:
            # Convert each event document to a dictionary
            event_dict = event.to_dict()

            # Append the event dictionary to the events list
            events_list.append(event_dict)

        # Return the list of event dictionaries
        return events_list if events_list else []  # Return an empty list if events_list is None

    except Exception as e:
        print("Error:", e)
        return []
    
def read_event_info(eventName):
    print("Event State in Firebase: ",eventName)
    # eventN = State.current_event
    eventN:str = eventName
    try:
        # Retrieve the document from the 'Events' collection
        event_list=[]
        # eventName = GlobalState.eventName
        event_ref = db.collection('Event').document(eventN).get()
        if event_ref.exists:
            # Convert the document to a dictionary
            event_dict = event_ref.to_dict()
            event_list.append(event_dict)
            return event_dict  # Return a list containing the event dictionary
        else:
            print(f"Event '{eventName}' does not exist")
            return None  # Return an empty list if the document does not exist

    except Exception as e:
        print("Error:", e)
        return None
def read_all_data():
    try:
    # Initialize an empty dictionary to store event details
        events_dict = {}

        # Retrieve all documents from the 'Events' collection
        events_ref = db.collection('Event').stream()
        for event_doc in events_ref:
            # Convert each event document to a dictionary
            event_dict = event_doc.to_dict()

            # Initialize an empty list to store documents of the 'Subcollection'
            subcollection_docs = []

            # Get the reference to the 'Subcollection' of the current event document
            subcollection_ref = event_doc.reference.collection('Subcollection')

            # Retrieve all documents from the 'Subcollection'
            docs_ref = subcollection_ref.stream()
            for doc in docs_ref:
                # Convert each document to a dictionary and append it to the list
                subcollection_docs.append(doc.to_dict())

            # Add the list of documents to the event dictionary
            event_dict['Subcollection'] = subcollection_docs

            # Add the event dictionary to the events dictionary
            events_dict[event_doc.id] = event_dict

        # Return the dictionary of event details
        return events_dict

    except Exception as e:
        print("Error:", e)
        return {}
    
def createEvent(header,date,description,location,venue,redirect,link,time,url):
    try:
        event_list=[]
        db.collection('Event').document(header).set({
            "header":header,
            "date": date,"description":description,"location":location,"venue":venue,"redirect":redirect,"link":link,"time":time,"url":url
        })
        print("Event added to Firestore successfully!")
    except Exception as ex:
        print("Error",ex)


