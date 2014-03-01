Meteor.methods({
   'file-upload': function (fileInfo, fileData) {
      var lines = fileData.split("\n");
      console.log(lines.length);
      
      for (var i = 1;i < lines.length;i++){
      	var variable = lines[i].split("|");
      	if (variable.length > 63){
      		console.log(i + " " + variable.length);
  		}
      	/*
      	Companies.insert({
	        CompanyTicker:	variable[	0	],
			Name:	variable[	1	],
			Industry:	variable[	2	],
			Industry_Google:	variable[	3	],
			EstFinancialMarginOfSafety:	variable[	4	],
			EstFinancialMarginOfSafety5:	variable[	5	],
			EstFCFMarginOfSafety:	variable[	6	],
			PERatio:	variable[	7	],
			ROIC:	variable[	8	],
			NormOpMargins:	variable[	9	],
			NormNetMargins:	variable[	10	],
			Price:	variable[	11	],
			MarketCap:	variable[	12	],
			IncomeAfterTax:	variable[	13	],
			TotalLongTermDebt:	variable[	14	],
			CashAndEquivalents:	variable[	15	],
			TotalAssets:	variable[	16	],
			ROICPercentile:	variable[	17	],
			CompanyROICThreshold:	variable[	18	],
			LikelyIncomeGrowth:	variable[	19	],
			AdjustedIncomeGrowth:	variable[	20	],
			EstGrowth:	variable[	21	],
			SpecEstGrowth:	variable[	22	],
			WtdCompetitorGrowthTTM:	variable[	23	],
			BaselineGrowthRate:	variable[	24	],
			TotalCommonSharesOutstanding:	variable[	25	],
			IndustryExpEarnings:	variable[	26	],
			TwoYrAvgFCF:	variable[	27	],
			MarketExpYears:	variable[	28	],
			PVEarnings:	variable[	29	],
			DiscountFactor:	variable[	30	],
			Discount:	variable[	31	],
			NextYearsEarnings:	variable[	32	],
			BaselineNextYearsEarnings:	variable[	33	],
			BaselineNextYearsEarnings5:	variable[	34	],
			BaselineFCFPV:	variable[	35	],
			BookValuePerShare:	variable[	36	],
			BaselinePV:	variable[	37	],
			BaselinePVPerShare:	variable[	38	],
			BaselinePV5:	variable[	39	],
			BaselinePV5PerShare:	variable[	40	],
			avgDailyVolume:	variable[	41	],
			MedianOrAvgCompetitorPE:	variable[	42	],
			CompetitorsROIC:	variable[	43	],
			CompetitorsOpMargins:	variable[	44	],
			CompetitorsNetMargins:	variable[	45	],
			UnusualOpIncome:	variable[	46	],
			UnusualNetIncome:	variable[	47	],
			MaxPaybackPeriod:	variable[	48	],
			StockPick:	variable[	49	],
			MinRevenueGrowth1:	variable[	50	],
			AvgRevenueGrowth1:	variable[	51	],
			MinEPSGrowth1:	variable[	52	],
			AvgEPSGrowth1:	variable[	53	],
			MinRevenueGrowth2:	variable[	54	],
			AvgRevenueGrowth2:	variable[	55	],
			MinEPSGrowth2:	variable[	56	],
			AvgEPSGrowth2:	variable[	57	],
			MinRevenueGrowth3:	variable[	58	],
			AvgRevenueGrowth3:	variable[	59	],
			MinEPSGrowth3:	variable[	60	],
			AvgEPSGrowth3:	variable[	61	]
      	});
*/
      }
      
   }
});
