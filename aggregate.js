/* return total number of record inside a table
* using a second groupBy FUNCTION  will to returned value by a field
*/
(function() {
	var count = new GlideAggregate('incident');
	count.addAggregate('COUNT');
	count.groupBy('state');
	count.query();

	while(count.next()) {
		var counter = count.getAggregate('COUNT');
		var state = count.state.getDisplayValue();
		gs.info('count: {0}, state: {1}', counter, state);
	}



}());