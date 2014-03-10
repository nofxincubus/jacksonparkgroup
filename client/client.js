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

Template.lookupcompany.events({
  'click .search' : function () {
    submitme();
}});

function submitme() {
  var tickerNasdaq = $('.ticker').val() + "_nasdaq";
  var tickerNyse = $('.ticker').val() + "_nyse";

  var nasdaq = Companies.findOne({CompanyTicker: tickerNasdaq});
  var nyse = Companies.findOne({CompanyTicker: tickerNyse});
  
  //TEST
  var chosenCompany;
  if (nasdaq != null){
    chosenCompany = nasdaq;
  } else {
    chosenCompany = nyse;
  }

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