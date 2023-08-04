const { I } = inject();

module.exports = {

  fields: { 
    email: { android: '//android.widget.EditText[@content-desc="email"]'},
    password: '~senha',
  },

  buttons: {
    enter: '~entrar',
  },

  doLogin(email, password){
 //   I.retry(4).fillField(this.fields.email, email) ele repete a ação mais de uma vez

    I.runOnAndroid(() => {
    I.fillField(this.fields.email, email)
    I.fillField(this.fields.password, password)
    I.tap(this.buttons.enter)
    })
   
  }


}
