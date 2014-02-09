$(function() {
	var parentPulldown = $('.parent');
	resetOptions(parentPulldown, parent);
	var childPulldown = $('.child');
	resetOptions(childPulldown, children);

	parentPulldown.change(function() {
		parentPulldown.find("option:selected").each(function () {
			var code = Number($(this).val());

			if(0 < code) {
				var x = _.where(children, {"parent_code": code});
				resetOptions(childPulldown, x);
			} else {
				resetOptions(childPulldown, children);
			}
		});
	})
});

function resetOptions(select, elements) {
	select.children('option').remove();

	_.each(elements, function(element) {
		var template = _.template('<option value="<%= code %>"><%= name %></option>');
		var tag = template({name: element.name, code: element.code});
		select.append(tag);
	});

}

