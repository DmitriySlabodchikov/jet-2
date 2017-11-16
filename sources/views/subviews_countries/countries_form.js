import {JetView} from "webix-jet";
import {getCountry, getCountries, deleteCountries, setCountries} from "models/countries";

export default class CountriesForm extends JetView{

		config(){

			var countriesForm = {
			view: "form",
			id: "countriesForm",
			elements:[
				{ view:"text", name:"shortCountryName", label:"Short:"},
				{ view:"text", name:"fullCountryName", label:"Full:"},
				{ cols:[
					{view:"button", value:"Save", type:"form", click:() => save_form()
					},
					{view:"button", value:"Delete", type:"danger", click:() => delete_form()
					},
					{view:"button", value:"Clear form",click: function() {
						$$("countriesForm").clear();
						$$("countriesForm").clearValidation();
					}
				}
			]},{}
			],
			rules:{
				shortCountryName: function(value) {
					if(!value.match(/^\d+$/)&&value!=""){return value;}
				},
				fullCountryName: function(value) {
					if(!value.match(/^\d+$/)&&value!=""){return value;}
				}
			}
		};

			return countriesForm;
		}

		urlChange(view, url){
			if(url[0].params.id){
			    var id  = url[0].params.id;
			    this.getRoot().setValues( getCountries(id) );
			}
		}		

}

function delete_form(){
			var form = $$("countriesForm");
			var data = form.getValues();
			deleteCountries(data.id);
		}

function save_form(){
			var form = $$("countriesForm");
			var data = form.getValues();
			setCountries(data.id, data);
		}		