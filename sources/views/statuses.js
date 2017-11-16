import {JetView} from "webix-jet";
import {getStatus} from "models/statuses";

export default class StatusTable extends JetView{

		config(){

			var statusesTable = {
			view:"datatable",
			id: "statusesTable",
			select:true,
			editable:true,
			columns:[
				{ id:"statusesName", editor:"text",	header:["Statuses name", {content:"textFilter"}], sort:"string", width:230},
				{ id:"statusesIcon", editor:"text",	header:["Statuses icon", {content:"textFilter"}] , sort:"string", width:230 }
			],
				on:{
				"onItemClick":(id) => {
					this.show("./subviews_statuses.statuses_form?id="+id);
					}
				}
			};

			return {cols:[statusesTable,{ $subview:true }]};
			
		}
		init(view){
			$$("statusesTable").parse(getStatus());
			
		}

}