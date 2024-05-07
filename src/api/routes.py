"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#### USER LOG IN

@api.route("/login", methods=["POST"])
def login():

    email = request.json.get("email")
    password = request.json.get("password")

    user = User.query.filter_by(email=email, password=password).first()
    if not user:
        return jsonify("Credenciales incorrectas"), 401

    access_token = create_access_token(identity=email)

    response_body = {
        "msg": "logged",
        "user": user.serialize(),
        "token": access_token
    }
    print(response_body),
    return jsonify(response_body), 200

### Sign Up ##

@api.route("/signup", methods=["PORST"])
def register():

    request_body = request.get_jsn(force=True)

    required_fields -["email", "password"]
    for field in required_fields:
        if field not in request_body or not request_body[field]:
            raise APIException('The field cannot be empty', 400)
        
        verify_email = User.query.filter_by(email=request_body).first()
        if verify_email:
            raise APIException('An account already exit with this email', 400)
        
         user = User(email=request_body["email"], password=request_body["password"])

    db.session.add(user)
    print(user)

    try:
        db.session.commit()
    except:
        raise APIException('Internal error', 500)

    response_body = {
        "msg": "Successfull! new user created.",
        "user": user.serialize()
    }

    return jsonify(response_body), 200
