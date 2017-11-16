import {JetView} from "webix-jet";
import {getStatuses, getStatus, deleteStatuses, setStatuses} from "models/statuses";

export default class StatusesForm extends JetView{

		config(){

			var statusesForm = {
			view: "form",
			id: "statusesForm",
			elements:[
				{ view:"text", name:"statusesName", label:"Name:"},
				{ view:"text", name:"statusesIcon", label:"Icon:"},
				{ cols:[
					{view:"button", value:"Save", type:"form", click:() => save_form()
					},
					{view:"button", value:"Delete", type:"danger", click:() => delete_form()
					},
					{view:"button", value:"Clear form",click: function() {
						$$("statusesForm").clear();
						$$("statusesForm").clearValidation();
					}
				}
			]},{}
			],
			rules:{
				statusesName: function(value) {
					if(!value.match(/^\d+$/)&&value!=""){return value;}
				},
				statusesIcon: function(value) {
					if(!value.match(/^\d+$/)&&value!=""){return value;}
				}
			}
		};

			return statusesForm;
		}

		urlChange(view, url){
			if(url[0].params.id){
			    var id  = url[0].params.id;
			    this.getRoot().setValues( getStatuses(id) );
			}
		}		

}

function delete_form(){
			var form = $$("statusesForm");
			var data = form.getValues();
			deleteStatuses(data.id);
		}

function save_form(){
			var form = $$("statusesForm");
			var data = form.getValues();
			setStatuses(data.id, data);
		}