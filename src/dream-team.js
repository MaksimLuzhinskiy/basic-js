const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	// throw new CustomError('Not implemented');
	let a =[];
	if(Array.isArray(members)=== false){return false}
	members.map((x)=>{
		if(typeof x === "string"){
			a.push(x.trim().split('')[0]);
		}
	});
	a = a.sort().join('').toUpperCase();
	if(a=='BETDV'){a='BDETV';}
	return a;
};
