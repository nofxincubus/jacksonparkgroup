Meteor.subscribe("CompanyTickerList",function(){
  if (Meteor.userId != undefined){
    var tickerList = Companies.find({}, {fields: {'CompanyTicker':1, 'Name':1}}).fetch();
    var tickerNameArray = [];
    if (tickerList.length > 10){
      for (var i = 0; i < tickerList.length;i++){
        tickerNameArray[i] = tickerList[i].CompanyTicker.substring(0,tickerList[i].CompanyTicker.indexOf("_")) + " " + tickerList[i].Name;
      }
      $("#ticker").autocomplete({
        source: tickerNameArray,
        messages: {
          noResults: '',
          results: function() {}
        },select:function(event, ui){
          var ticker = ui.item.value.substring(0,ui.item.value.indexOf(" "));
          submitme(ticker.toUpperCase());
        }
      });
      //submitme("INTC");
    } 
  }
});

Meteor.subscribe("users")

Meteor.Router.add({
  '/': 'home',
  '/valuation': 'lookupcompany',
  '/upload':'uploadfile',
  '/contactus':'contactus',
  '/aboutus':'aboutus',
  '*': '404',
  '/admin': { to: 'uploadfile', nav: 'uploadfile', before: [bounceNonUserAdmin] }
});

//Uploading CSV to update the DB
Template.uploadfile.events({
"change .file-upload-input": function(event, template){
  var func = this;
  var file = event.currentTarget.files[0];
  var reader = new FileReader();
  reader.onload = function(fileLoadEvent) {
    Meteor.call('file-upload', file, reader.result);
  };
  reader.readAsBinaryString(file);
}
});

Template.uploadfile.admin = function () {
  if (Meteor.user() == undefined || Meteor.user().roles == undefined){
    return false;
  }
  if (Meteor.user().roles[0].indexOf("admin") != -1 &&
      Meteor.user().roles[1].indexOf("user-admin") != -1)
    return true;
  else
    return false;
};


Template.menu.admin = function () {
  if (Meteor.user() == undefined || Meteor.user().roles == undefined){
    return false;
  }
  if (Meteor.user().roles[0].indexOf("admin") != -1 &&
      Meteor.user().roles[1].indexOf("user-admin") != -1)
    return true;
  else
    return false;
};

Template.lookupcompany.rendered = function (){
  $(document).ready(function(){
    
   // cache the window object
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                             
        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });    
      }); // end window scroll
   });  // end section function

   
}); // close out script

  var tickerList = Companies.find({}, {fields: {'CompanyTicker':1, 'Name':1}}).fetch();
    var tickerNameArray = [];
    if (tickerList.length > 10){
      for (var i = 0; i < tickerList.length;i++){
        tickerNameArray[i] = tickerList[i].CompanyTicker.substring(0,tickerList[i].CompanyTicker.indexOf("_")) + " " + tickerList[i].Name;
      }
      $("#ticker").autocomplete({
        source: tickerNameArray,
        messages: {
          noResults: '',
          results: function() {}
        },select:function(event, ui){
          var ticker = ui.item.value.substring(0,ui.item.value.indexOf(" "));
          submitme(ticker.toUpperCase());
        }
      });
      submitme("INTC");
    }

};


Template.lookupcompany.events({
  'click #search' : function () {
    var ticker = $('#ticker').val();
    submitme(ticker.toUpperCase());
}});

function submitme(tickerStr) {
  var tickerNasdaq = tickerStr + "_nasdaq";
  var tickerNyse = tickerStr + "_nyse";

  var nasdaq = Companies.findOne({CompanyTicker: tickerNasdaq});
  var nyse = Companies.findOne({CompanyTicker: tickerNyse});
  
  //TEST
  var chosenCompany;
  if (nasdaq != null){
    chosenCompany = nasdaq;
  } else {
    chosenCompany = nyse;
  }
  $( "#company-name" ).text(chosenCompany.Name);

  var CurrentPrice = parseFloat(chosenCompany.Price);
  var valuation1 = (parseFloat(chosenCompany.EstFCFMarginOfSafety) + 1) * CurrentPrice;
  var valuation2 = (parseFloat(chosenCompany.EstFinancialMarginOfSafety) + 1) * CurrentPrice;
  var valuation3 = (parseFloat(chosenCompany.EstFinancialMarginOfSafety5) + 1) * CurrentPrice;
  
  var BarWidth = 1;
  var BarSpace = BarWidth/10;
  
  
  var PriceStart = BarSpace;
  var PriceBar = [[ PriceStart, CurrentPrice ]];
  
  var Val1Start = PriceStart + BarWidth + BarSpace;
  var Val1Bar = [[Val1Start, valuation1]];

  var start2 = Val1Start + BarWidth + BarSpace;
  var bar2 = [[start2, valuation2]];

  var start3 = start2 + BarWidth + BarSpace;
  var bar3 = [[start3, valuation3]];

  var stack = 0,
    bars = true,
    lines = false,
    steps = false;

  var PlotData = [ 
          { data: PriceBar, color: 'purple', label: 'Recent Price'}, 
          { data: Val1Bar, color: 'green', label: '0% Growth Valuation' }, 
          { data: bar2, color: 'yellow', label: '5% Growth Valuation' },
          { data: bar3, color: 'red', label: '10% Growth Valuation' } 
      ];
    var PlotOptions = {
        series: {
          stack: stack,
          bars: {
            show: bars,
            fill: 0.5,
            barWidth: BarWidth,
            align: "center",
            lineColor: "black",
            numbers: {
              numberFormatter: function(v, bar) {
                return '<div class="pimp-my-number-class">'+ v +'</div>';               
              }
            }
          },
          label: {
              show: true,
              background: {
                opacity: 0.8
              }
            }
        },
        legend: {
          position: "ne",
          show: true
        },
        xaxis: { 
          show: false,
          ticklength: 0,
          max: 5*BarWidth + 4*BarSpace
        },
        yaxis: { 
          show: false,
          ticklength: 0 
        },
        label: {
          show: true
        }
      }
    var placeholder = $("#placeholder");
    $.plot(placeholder, PlotData, PlotOptions);
}