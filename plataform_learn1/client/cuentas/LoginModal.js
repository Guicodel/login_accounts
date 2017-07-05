Template.LoginModal.events({
	'click .close-login': ()=> {
		Session.set('nav-toggle', '');
	}
});
Meteor.subscribe('allUsers');
console.log("sssss");