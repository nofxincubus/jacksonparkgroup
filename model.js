Companies = new Meteor.Collection("companies");

//Permission
Companies.allow({
  //Only Upsert (Update or Insert) and only through below function updateCompany
  insert: function () {
    return false; 
  },
  remove: function (company) {
    return true;
  }
});

Meteor.methods({
	updateCompany: function (options) {
    Companies.insert({
		CompanyTicker: options.CompanyTicker,
		Name: options.Name,
		Industry: options.Industry,
		Industry_Google: options.Industry_Google,
		EstFinancialMarginOfSafety: options.EstFinancialMarginOfSafety,
		EstFinancialMarginOfSafety5: options.EstFinancialMarginOfSafety5,
		EstFCFMarginOfSafety: options.EstFCFMarginOfSafety,
		PERatio: options.PERatio,
		ROIC: options.ROIC,
		NormOpMargins: options.NormOpMargins,
		NormNetMargins: options.NormNetMargins,
		Price: options.Price,
		MarketCap: options.MarketCap,
		IncomeAfterTax: options.IncomeAfterTax,
		TotalLongTermDebt: options.TotalLongTermDebt,
		CashAndEquivalents: options.CashAndEquivalents,
		TotalAssets: options.TotalAssets,
		ROICPercentile: options.ROICPercentile,
		CompanyROICThreshold: options.CompanyROICThreshold,
		LikelyIncomeGrowth: options.LikelyIncomeGrowth,
		AdjustedIncomeGrowth: options.AdjustedIncomeGrowth,
		EstGrowth: options.EstGrowth,
		SpecEstGrowth: options.SpecEstGrowth,
		WtdCompetitorGrowthTTM: options.WtdCompetitorGrowthTTM,
		BaselineGrowthRate: options.BaselineGrowthRate,
		TotalCommonSharesOutstanding: options.TotalCommonSharesOutstanding,
		IndustryExpEarnings: options.IndustryExpEarnings,
		TwoYrAvgFCF: options.TwoYrAvgFCF,
		MarketExpYears: options.MarketExpYears,
		PVEarnings: options.PVEarnings,
		DiscountFactor: options.DiscountFactor,
		Discount: options.Discount,
		NextYearsEarnings: options.NextYearsEarnings,
		BaselineNextYearsEarnings: options.BaselineNextYearsEarnings,
		BaselineNextYearsEarnings5: options.BaselineNextYearsEarnings5,
		BaselineFCFPV: options.BaselineFCFPV,
		BookValuePerShare: options.BookValuePerShare,
		BaselinePV: options.BaselinePV,
		BaselinePVPerShare: options.BaselinePVPerShare,
		BaselinePV5: options.BaselinePV5,
		BaselinePV5PerShare: options.BaselinePV5PerShare,
		avgDailyVolume: options.avgDailyVolume,
		MedianOrAvgCompetitorPE: options.MedianOrAvgCompetitorPE,
		CompetitorsROIC: options.CompetitorsROIC,
		CompetitorsOpMargins: options.CompetitorsOpMargins,
		CompetitorsNetMargins: options.CompetitorsNetMargins,
		UnusualOpIncome: options.UnusualOpIncome,
		UnusualNetIncome: options.UnusualNetIncome,
		MaxPaybackPeriod: options.MaxPaybackPeriod,
		StockPick: options.StockPick,
		MinRevenueGrowth1: options.MinRevenueGrowth1,
		AvgRevenueGrowth1: options.AvgRevenueGrowth1,
		MinEPSGrowth1: options.MinEPSGrowth1,
		AvgEPSGrowth1: options.AvgEPSGrowth1,
		MinRevenueGrowth2: options.MinRevenueGrowth2,
		AvgRevenueGrowth2: options.AvgRevenueGrowth2,
		MinEPSGrowth2: options.MinEPSGrowth2,
		AvgEPSGrowth2: options.AvgEPSGrowth2,
		MinRevenueGrowth3: options.MinRevenueGrowth3,
		AvgRevenueGrowth3: options.AvgRevenueGrowth3,
		MinEPSGrowth3: options.MinEPSGrowth3,
		AvgEPSGrowth3: options.AvgEPSGrowth3
    });
  }
});