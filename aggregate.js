// Update record in table v1

(function() {

	var incidentGr = new GlideRecord('incident');
	incidentGr.query();
	while(incidentGr.next()) {

		var updatedOn = incidentGr.getValue('sys_updated_on');
		var date = new GlideDateTime(updatedOn);
		gs.info("Befor: " + date.getValue());
		date.addSeconds(1);
		gs.info("After: " + date.getValue());
		incidentGr.sys_updated_on = date;
		incidentGr.update();

	}

}());
