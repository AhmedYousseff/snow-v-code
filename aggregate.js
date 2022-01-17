/* return total number of record inside a table
* using a second paramete in the addAggregate FUNCTION  will add groupedBy to the returned value
*/
(function() {
	var count = new GlideAggregate('incident');
	count.addAggregate('COUNT', 'state');
	count.query();

	while(count.next()) {
		var counter = count.getAggregate('COUNT', 'state');
		var state = count.state.getDisplayValue();
		gs.info('count: {0}, state: {1}', counter, state);
	}

}());
