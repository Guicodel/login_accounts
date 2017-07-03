var funcDeslogueo=function(){
	 
}
AccountsTemplates.configure({
	onLogoutHook: funcDeslogueo,
	texts: {
      button: {
          signUp: "Registrate ahora!!"
      },
    },
});
AccountsTemplates.addFields([
	{
		_id:'nick',
		type: 'text',
		displayName: 'Nick',
		required: true
	}
]);