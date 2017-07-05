var funcDeslogueo=function(){
	 FlowRouter.go('/');
};
var subirForm = function(error, state){
  if (!error) {
    if (state === "signIn") {
      // Successfully logged in
      // ...
      var id=Meteor.userId();
      Meteor.subscribe('allUsers');
      if(id==="Pm9Qryd9RQTjKiGKM")
      {
      		Roles.setUserRoles(id, 'admin');
      		console.log(id);	
      }
      else
      {
      		console.log("rol: estudiante", id);
      		Roles.setUserRoles(id, 'estudiante');
      }
    }
    if (state === "signUp") {
      // Successfully registered
      // ...
    }
  }
};
AccountsTemplates.configure({
	onSubmitHook: subirForm,
	onLogoutHook: funcDeslogueo,
	texts: {
		signUpLink_link: "REGISTRATE",
		navSignIn: "Iniciar Sesión",
        navSignOut: "Cerrar Sesión",
        signInLink_link: "Iniciar Sesión",
        signUpLink_pre: "No tienes una cuenta aun?",
        signInLink_pre: "Si ya tienes cuenta:",
      	button: {
          changePwd: "Password Text",
          enrollAccount: "Enroll Text",
          forgotPwd: "Forgot Pwd Text",
          resetPwd: "Reset Pwd Text",
          signIn: "INICIAR",
          signUp: "CREAR CUENTA",
        },
      title: {
        changePwd: "Password Title",
        enrollAccount: "Enroll Title",
        forgotPwd: "Forgot Pwd Title",
        resetPwd: "Reset Pwd Title",
        signIn: "Iniciar Sesión",
        signUp: "Creacion de Cuenta",
        verifyEmail: "Verify Email Title",
      }
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