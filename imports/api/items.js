//This file runs on and imoirted to the server
import {Mongo} from 'meteor/mongo';
import './methods/methods.js';

const Items = new Mongo.Collection('items');
export default Items;

if(Meteor.isServer){
  Meteor.publish('allItems', function(){
    return Items.find({});
  });
}
