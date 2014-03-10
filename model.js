Companies = new Meteor.Collection("companies");

//Permission
Companies.allow({
  //Only Upsert (Update or Insert) and only through below function updateCompany
  insert: function () {
    return false; 
  },
  remove: function (company) {
    return false;
  }
});
