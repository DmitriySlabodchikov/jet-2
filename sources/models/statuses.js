const statuses = new webix.DataCollection({ data:[
	{ id:1, statusesName:"Ready", statusesIcon:"cogs"},
	{ id:2, statusesName:"Busy", statusesIcon:"users"}
]});

export function getStatus(){ return statuses };

export function getStatuses(id){ return statuses.getItem(id) };

export function setStatuses(id, data){ statuses.updateItem(id, data) };

export function deleteStatuses(id){ statuses.remove(id) };