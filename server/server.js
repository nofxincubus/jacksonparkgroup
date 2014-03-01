if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Meteor.methods({
   'file-upload': function (fileInfo, fileData) {
      console.log("received file " + fileInfo.name + " data: " + fileData);
      fs.writeFile(fileInfo.name, fileData);
   }
});
