//This file runs on and imoirted to the server
import {Mongo} from 'meteor/mongo';
import './methods/methods.js';

const Items = new Mongo.Collection('items');
export default Items;
