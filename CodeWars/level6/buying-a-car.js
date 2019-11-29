/** @format */
function nbMonths(sPO, sPN, sPM, pLPM, m = 0) {
	return sPO + sPM * m > sPN
		? [m, Math.round(sPO + sPM * m - sPN)]
		: ((pLPM = m % 2 && m != 0 ? pLPM + 0.5 : pLPM),
		  (sPO = sPO - (sPO * pLPM) / 100),
		  (sPN = sPN - (sPN * pLPM) / 100),
		  nbMonths(sPO, sPN, sPM, pLPM, ++m));
}
