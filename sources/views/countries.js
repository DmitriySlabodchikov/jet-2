import {JetView} from "webix-jet";
import {getCountry} from "models/countries";

export default class CountriesTable extends JetView{

		config(){

			var countriesTable = {
				view:"datatable",
				id: "countriesTable",
				select:true,
				editable:true,
				columns:[
					{ id:"shortCountryName", editor:"text",	header:["Short name", {content:"textFilter"}], sort:"string", width:230},
					{ id:"fullCountryName", editor:"text",	header:["Full name", {content:"textFilter"}] , sort:"string", width:230 }

				],
				on:{
				"onItemClick":(id) => {
					this.show("./subviews_countries.countries_form?id="+id);
					}
				}
			};

			return {cols:[countriesTable,{ $subview:true }]};
			
		}
		init(view){
			$$("countriesTable").parse(getCountry());
			
		}

}