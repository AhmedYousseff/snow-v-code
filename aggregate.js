// this function should return total number of incidents grouped by state
(function() {

	var taskCountRecords = new GlideAggregate('incident');

	taskCountRecords.groupBy('state');
	taskCountRecords.groupBy('opened_at');
	// taskCountRecords.addTrend ('opened_at','month');
	taskCountRecords.addAggregate('count', 'state');
	taskCountRecords.orderBy('state');
	taskCountRecords.orderBy('opened_at');

	//taskCountRecords.setGroup(false);
	taskCountRecords.query();

	var closed = 0;
	var	newIncident = 0;
	var	inProgress = 0;
	var	onHold = 0;


	var countPerProduct = {};

	while (taskCountRecords.next()) {
		var count = taskCountRecords.getAggregate('count', 'state');
		var openat = taskCountRecords.getValue('opened_at');
		var name = taskCountRecords.state.getDisplayValue();
		countPerProduct[taskCountRecords.state.getDisplayValue()] = count;



	}

	for (var state in countPerProduct) {

		if (countPerProduct.hasOwnProperty(state)) {
			state == 'New' ? newIncident = countPerProduct[state] : '';
			state == 'In Progress' ? inProgress = countPerProduct[state]: '';
			state == 'Closed' ? closed = countPerProduct[state]: '';
			state == 'On Hold' ? onHold = countPerProduct[state]: '';

		}

	}

	var testGr = new GlideRecord('u_test');

		testGr.newRecord();
		testGr.u_closed = closed;
		testGr.u_on_hold = onHold;
		testGr.u_in_progress = inProgress;
		testGr.u_new = newIncident;
		//testGr.u_month = month;
		testGr.insert();


}());

// returned: state: Closed, count: 28