import {JetView} from "webix-jet";
import {getData} from "models/users";

export default class ContactList extends JetView{

		config(){

			var contact = {
			view:"activeList",
			id:"contactlist",
			activeContent:{
				deleteButton:{
					id:"contactDeleteButton",
					type:"icon", 
					icon:"close",
					view:"button",
					width:30,
					click: function() {	
					var id = $$("contactlist").getSelectedId();
					getData().remove(id);
					}
				}
			},
			/*template: function (obj, id) {
				return "<span style='float:left;'>#id#. <b>#name#</b> <br> Email:  #email# <br> Age: #age#, Country: #country#</span>"+((id)?"<span style='float:right;'><br>{common.deleteButton()}</span>":"")+"kek";
			},*/
			template: "<span style='float:left;'>#id#. <b>#name#</b> <br> Email:  #email# <br> Age: #age#, Country: #country#</span>"+
			"<span style='float:right;'><br>{common.deleteButton()}</span>",
			type:{
				height:92,
			},
			select:true,
			on:{
				"onItemClick":(id) => {
					this.show("./subviews_contacts.contacts_form?id="+id);

			 		//$$("contactlist").define("template", id);
					//$$("contactlist").refresh(id);
					}
				}
			};

			return {cols:[contact,{ $subview:true }]};
			
		}
		init(view){
			$$("contactlist").parse(getData());
			
		}

}