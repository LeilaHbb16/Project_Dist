from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy 
from flask_marshmallow import Marshmallow 
import os

# Init app
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Init db
db = SQLAlchemy(app)
# Init ma
ma = Marshmallow(app)

# HousEstimation Class/Model
class HousEstimation(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  zn = db.Column(db.Float)
  indus = db.Column(db.Float)
  chas = db.Column(db.Boolean,default=False)
  nox = db.Column(db.Float)
  rm = db.Column(db.Float)
  age = db.Column(db.Float)
  dis = db.Column(db.Float)
  rad = db.Column(db.Float)
  tax=db.Column(db.Float)
  ptratio =db.Column(db.Float)
  b = db.Column(db.Float)
  lstat = db.Column(db.Float)
  target = db.Column(db.Float)

  def __init__(self, indus, zn, chas, nox, rm, age, dis, rad, tax, ptratio, b, lstat,target):
    self.zn = zn
    self.indus = indus
    self.chas = chas
    self.nox = nox
    self.rm = rm
    self.age = age
    self.dis = dis
    self.rad = rad
    self.tax = tax
    self.ptratio = ptratio
    self.b = b
    self.lstat = lstat
    self.target = target

# Product Schema
class HousEstimationSchema(ma.Schema):
  class Meta:
    fields = ('id', 'indus', 'zn', 'chas', 'nox', 'rm', 'age', 'dis', 'rad', 'tax', 'ptratio', 'b', 'lstat','target')

# Init schema
house_estimation_schema = HousEstimationSchema()
house_estimations_schema = HousEstimationSchema(many=True)

# Create a house_estimation
@app.route('/house_estimation', methods=['POST'])
def add_house_estimation():
  indus = request.json['indus']
  zn = request.json['zn']
  chas = request.json['chas']
  nox = request.json['nox']
  rm = request.json['rm']
  age = request.json['age']
  dis = request.json['dis']
  rad = request.json['rad']
  tax = request.json['tax']
  ptratio = request.json['ptratio']
  b = request.json['b']
  lstat = request.json['lstat']
  #add function to get the target
  target=0
  new_house_estimation = HousEstimation( indus, zn, chas, nox, rm, age, dis, rad, tax, ptratio, b, lstat, target)

  db.session.add(new_house_estimation)
  db.session.commit()

  return house_estimation_schema.jsonify(new_house_estimation)

# Get All House Estimation
@app.route('/house_estimation', methods=['GET'])
def get_house_estimations():
  all_house_estimation = HousEstimation.query.all()
  result = house_estimations_schema.dump(all_house_estimation)
  return jsonify(result.data)

@app.route('/', methods=['GET'])
def get_index():
  return "i m groot"

# Get Single House Estimation
@app.route('/house_estimation/<id>', methods=['GET'])
def get_house_estimation(id):
  house_estimation = HousEstimation.query.get(id)
  return house_estimation_schema.jsonify(house_estimation)

# Update a house_estimation
# @app.route('/house_estimation/<id>', methods=['PUT'])
# def update_house_estimation(id):
  # house_estimation = HousEstimation.query.get(id)

  # name = request.json['name']
  # description = request.json['description']
  # price = request.json['price']
  # qty = request.json['qty']

  # product.qty = qty
  # product.qty = qty
  # product.qty = qty
  # product.qty = qty
  # product.qty = qty
  # product.qty = qty
  # product.qty = qty
  # product.qty = qty

  # db.session.commit()

  # return house_estimation_schema.jsonify(product)

# Delete Product
# @app.route('/product/<id>', methods=['DELETE'])
# def delete_product(id):
  # product = Product.query.get(id)
  # db.session.delete(product)
  # db.session.commit()

  # return product_schema.jsonify(product)

# Run Server
if __name__ == '__main__':
  app.run(debug=True,port=5050,host="0.0.0.0")

#steps to create database
#python env   
# from app import app, db
# with app.app_context():
  # db.create_all()