// return total number of record inside a table in this case table is incident
(function() {
	var count = new GlideAggregate('incident');
	count.addAggregate('COUNT');
	count.query();
	var counter = 0;
	while(count.next()) {
		counter = count.getAggregate('COUNT');
		gs.info('count: {0}',counter);
	}

}());
