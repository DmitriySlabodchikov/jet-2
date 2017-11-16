const countries = new webix.DataCollection({ data:[
	{ id:1, shortCountryName:"BY", fullCountryName:"Alan@gmail.com"},
	{ id:2, shortCountryName:"AUT", fullCountryName:"Austria"},
	{ id:3, shortCountryName:"ALB", fullCountryName:"Albania"}
]});

export function getCountry(){ return countries };

export function getCountries(id){ return countries.getItem(id) };

export function setCountries(id, data){ countries.updateItem(id, data) };

export function deleteCountries(id){ countries.remove(id) };