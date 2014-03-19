Meteor.methods({
   'file-upload': function (fileInfo, fileData) {
   		Companies.remove({})
		var lines = fileData.split("\n");
		for (var i = 1;i < lines.length;i++){
	      	var variable = lines[i].split("|");
	      	if (variable.length == 69){
		      	Companies.insert({
					CompanyTicker: variable[0],
					Name: variable[1],
					Industry: variable[2],
					Industry_Google: variable[3],
					EstFinancialMarginOfSafety: variable[4],
					EstFinancialMarginOfSafety5: variable[5],
					EstFCFMarginOfSafety: variable[6],
					PERatio: variable[7],
					ROIC: variable[8],
					ROE: variable[9],
					NormOpMargins: variable[10],
					NormNetMargins: variable[11],
					Price: variable[12],
					MarketCap: variable[13],
					IncomeAfterTax: variable[14],
					TotalLongTermDebt: variable[15],
					CashAndEquivalents: variable[16],
					TotalAssets: variable[17],
					TotalEquity: variable[18],
					ROIPercentile: variable[19],
					CompanyROICThreshold: variable[20],
					EstGrowth: variable[21],
					SpecEstGrowth: variable[22],
					WtdCompetitorGrowthTTM: variable[23],
					BaselineGrowthRate: variable[24],
					TotalCommonSharesOutstanding: variable[25],
					IndustryExpEarnings: variable[26],
					TwoYrAvgFCF: variable[27],
					MarketExpYears: variable[28],
					PVEarnings: variable[29],
					DiscountFactor: variable[30],
					Discount: variable[31],
					NextYearsEarnings: variable[32],
					BaselineNextYearsEarnings: variable[33],
					BaselineNextYearsEarnings5: variable[34],
					BaselineFCFPV: variable[35],
					BookValuePerShare: variable[36],
					BaselinePV: variable[37],
					BaselinePV5: variable[38],
					avgDailyVolume: variable[39],
					MedianOrAvgCompetitorPE: variable[40],
					MedianOrAvgCompetitorROE: variable[41],
					CompetitorsROIC: variable[42],
					CompetitorsOpMargins: variable[43],
					CompetitorsNetMargins: variable[44],
					UnusualOpIncome: variable[45],
					UnusualNetIncome: variable[46],
					MaxPaybackPeriod: variable[47],
					StockPick: variable[48],
					MinRevenueGrowth1: variable[49],
					AvgRevenueGrowth1: variable[50],
					MinEPSGrowth1: variable[51],
					AvgEPSGrowth1: variable[52],
					MinRevenueGrowth2: variable[53],
					AvgRevenueGrowth2: variable[54],
					MinEPSGrowth2: variable[55],
					AvgEPSGrowth2: variable[56],
					MinRevenueGrowth3: variable[57],
					AvgRevenueGrowth3: variable[58],
					MinEPSGrowth3: variable[59],
					AvgEPSGrowth3: variable[60],
					ValuationFlag: variable[61],
					DividendPayoutRatio: variable[62],
					Equity0: variable[63],
					Equity1: variable[64],
					Equity2: variable[65],
					ExcessReturns0: variable[66],
					ExcessReturns1: variable[67],
					ExcessReturns2: variable[68]
		      	});
			} else {
				console.log("not included : " + i);
			}
		}
   }
});

















