FlowRouter.route('/',{
	name:'Home',
	action(){
		BlazeLayout.render('MainLayout');
	}
});

FlowRouter.route('/Cursos',{
	name: 'cursos',
	action(){
		BlazeLayout.render('MainLayout',{main:'Cursos'});
	}
});
FlowRouter.route('/Pruebas',{
	name: 'Pruebas',
	action(){
		BlazeLayout.render('Pruebas');
	}
});
FlowRouter.route('/Test',{
	name: 'Test',
	action(){
		BlazeLayout.render('Test');
	}
});

