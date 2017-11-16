import {JetView} from "webix-jet";
import ContactList from "./subviews_contacts/contacts_list";
import {statuses} from "models/statuses";
import {countries} from "models/countries";

export default class Contact extends JetView{
	
	config(){	

		var contactHeader = { 
			view:"toolbar",
			cols:[
				{view:"label", align:"center", label:"<b>Contacts</b>"}
			]
		};	


		var contacts = {
			cols:[
				{rows:[
					{cols:[contactHeader,{}]},
					ContactList
				]}
			]
		};

		return contacts;
	}


}

