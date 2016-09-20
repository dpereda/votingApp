import  {Template} from 'meteor/templating';

import Items from '../api/items.js';

import './body.html';

Template.body.helpers({
  items() {
      return Items.find({});
  }
});

Template.body.events({
  'submit .new-items'(event){
      event.preventDefault();
      Items.insert({
        itemOne: {
          text: event.target.item1.value,
          value: 0
        },
        itemTwo: {
          text: event.target.item2.value,
          value: 0
        }
      });
      event.target.item1.value = 0
      event.target.item2.value = 0
      console.log(event.target.item1.value);
  }
});
