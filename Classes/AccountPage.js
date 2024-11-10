import  {  Locators } from '../Classes/Locators.js';

export default class AccountPage {

    constructor(page) {
      this.page = page; // Stocke l'objet page 
    }


    SelVrifLanguage        = () => this.page.getByRole('heading', { name: 'My account' });
    SelLanguage            = () => this.page.locator(Locators.AccountPage.IdLanguage); 
    SelApplyLanguageButon  = () => this.page.locator(Locators.AccountPage.IdApply);
    SelModifPassword       = () => this.page.getByRole(Locators.AccountPage.ModifPassword.role,Locators.AccountPage.ModifPassword.name);
    




    // Méthode pour selectionner la langue
    async SelectLanguage(Language) {
        await this.SelLanguage().selectOption(Language); 

    }
  
    // Méthode pour appliquer la langue selectionner
    async ApplyButton() {
        await this.SelApplyLanguageButon().click();
    }

    // Méthode pour modifier le mot de passe
    async ModifPassword() {
      await this.SelModifPassword().click();
    }

  }