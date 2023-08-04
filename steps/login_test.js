Funcionalidade('login');

const { login_page } = inject()

BeforeSuite(() =>{ 
    console.log('Finotti Suiti')
});

Before(() =>{ 
    console.log('Finotti Cenario')
});

AfterSuite(() =>{ 
    console.log('After Suiti')
});

After(() =>{ 
    console.log('After Cenario')
});

Cenário('Login with success',  ({ I }) => {
    

    
    login_page.doLogin('teste@teste.com', '123456')
   // pause() ele te da opção de executar qualquer comando
    

})


//android.view.ViewGroup[@content-desc="salvar"]/android.view.ViewGroup/android.widget.TextView

// ~codigo
