/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	let counterOfLovesTriangle = 0;
	preferences.forEach( (item, i, preferences) => {
		
		let firstLoversPosition = i;
		let secondLoversPosition = item - 1;
		let thirdLoversPosition = preferences[secondLoversPosition] - 1;
		
		if ( preferences[firstLoversPosition] != preferences[secondLoversPosition] && (preferences[thirdLoversPosition] == i + 1) ){
			counterOfLovesTriangle +=1;
			preferences[firstLoversPosition] = 0;
 			preferences[secondLoversPosition] = 0;
 			preferences[thirdLoversPosition] = 0;
		
		}
	})
	
	return counterOfLovesTriangle;
};
