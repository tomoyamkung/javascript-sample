$(function() {
	var pulldown = $('.prefecture');
	_.each(pref, function(element) {
		var template = _.template('<option value="<%= code %>"><%= name %></option>');
		var tag = template({name: element.name, code: element.pref_code});
		pulldown.append(tag);
	});
});
