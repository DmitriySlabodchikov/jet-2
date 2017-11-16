import {JetView} from "webix-jet";
import {getUsers, setUsers} from "models/users";

export default class ContactForm extends JetView{

		config(){

			var contactForm = {
				view: "form",
				id:"contactForm",
				elements:[
					{ view:"text", name:"name", label:"Name:"},
					{ view:"text", name:"email", label:"Email:"},
					{ view:"select", label:"status", name:"statusesName", options:[] },
					{ view:"select", label:"country", name:"fullCountryName", options:[] },
					{ view:"button", value: "Save", click:() => save_form()},
					{}
				]
			};

			return contactForm;
		}
		urlChange(view, url){
	        if(url[0].params.id){
	        	var id  = url[0].params.id;
	           	this.getRoot().setValues( getUsers(id) );
	       	}
    	}		

}


function save_form(){
			var form = $$("contactForm");
			var data = form.getValues();
			setUsers(data.id, data);
		}