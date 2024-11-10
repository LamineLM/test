import { Console } from 'console';
import {  Locators } from '../Classes/Locators.js';

export default class LoginPage {

    constructor(page) {
      this.page = page; // Stocke l'objet page 
    }

    //Locators

    SelUserName            = () => this.page.locator(Locators.LoginPage.IdUserName); 
    SelPassword            = () => this.page.locator(Locators.LoginPage.IdPassword);
    SelButConnect          = () => this.page.locator(Locators.LoginPage.IdConnect);
    SelForgotPassword      = () => this.page.getByRole(Locators.LoginPage.ForgotPassword.role, { name: Locators.LoginPage.IdForgotPassword.name });
    SelRememberUsername    = () => this.page.locator(Locators.LoginPage.IdRememberUsername);
    SelCheckMessageWelcome = () => this.page.getByRole(Locators.LoginPage.CheckMessageWelcome.role, { name: Locators.LoginPage.CheckMessageWelcome.name });
    SelCheckErrorLogin     = () => this.page.getByText(Locators.LoginPage.CheckErrorLogin);


    //Actions

    
    // Méthode pour naviguer vers une url 
    async GoTo(Url) {
        await this.page.goto(Url);
    }

    // Méthode pour remplir le champ username
    async FillUsername(ValueUserName) {
        await this.SelUserName().fill(ValueUserName);
    }
  
    // Méthode pour remplir le champ password
    async FillPassword(ValuePassword) {
        await this.SelPassword().fill(ValuePassword);
    }
  
    // Méthode "Se souvenir de moi" 
    async RememberUserName() {
        await this.SelRememberUsername().click({ force: true });;
    }

    // Méthode pour cliquer sur le bouton "Se connecter"
    async LoginButton() {
        await this.SelButConnect().click();
    }
  
    // Méthode pour cliquer sur le lien "Mot de passe oublié ?"
    async ForgotPassword() {
        await this.SelForgotPassword().click();
    }

    async GetUrl() {
        await this.page.url();
        console.log(this.page.url());
    }


    //Méthode pour vérifier la présence du message bienvenu aprés connexion/Erreur de connexion
    async CheckMessage (expect, Mes, i ) {
        let Message = null;
            if(i===0) 
                Message = this.SelCheckMessageWelcome();
            else 
                Message = this.SelCheckErrorLogin();
        
        await expect(Message).toHaveText(Mes); 
    }


    // Fonction  
    async  LoginFunction(Username, Password) {

        await this.FillUsername(Username);
        await this.FillPassword(Password);
        await this.RememberUserName();
        await this.LoginButton();

    }

  }