import  {  Locators } from '../Classes/Locators.js';

export default class HomePage {

    constructor(page) {
      this.page = page; // Stocke l'objet page 
    }



    async Home() {
      await this.page.locator(Locators.HomePage.Home).click();
    }

    // 
    async Open_Close_SideBar() {
      await this.page.locator(Locators.HomePage.IdOpenCloseSideBar).click();
    }

    //
    async Open_Close_UserSubMenu() {
      await this.page.locator(Locators.HomePage.IdOpenCloseUserSubMenu).click();
    }

    //  
    async MyAccount() {
      await this.page.locator(Locators.HomePage.IdMyAccount).click();
    }

    async Disconnect() {
      this.Open_Close_UserSubMenu();
      await this.page.locator(Locators.HomePage.IdDisconnect).click();
    } 
    
    async OpenProductMenu() {
      this.OpenOrdersMenu();
      await this.page.locator(Locators.HomePage.IdProduct).click();
    } 
    
    async OpenOrdersMenu() {
      await this.page.locator(Locators.HomePage.IdOrders).click();
    } 

    async OpenSalesOrdersExecution() {
      this.OpenOrdersMenu();
      await this.page.locator(Locators.HomePage.IdSalesOrderExe).click();

      /*
      await this.page.locator(Locators.SofiPage.IdSelectFirstOrder).click();
      await this.page.locator(Locators.SofiPage.IdSelectAllOrders).click();

      await this.page.locator(Locators.SofiPage.IdOredrsManage).click({ force: true });
      await this.page.locator(Locators.SofiPage.IdSearchInput).fill('Lamine');
      await this.page.locator(Locators.SofiPage.ActionOrders).nth(0).click();
      await this.page.getByRole(Locators.SofiPage.Cancel.role, { name: Locators.SofiPage.Cancel.name }).click();
      await this.page.getByRole(Locators.SofiPage.Validate.role, { name: Locators.SofiPage.Validate.name }).click();
      */


      /*
      await this.page.locator(Locators.SofiPage.IdSelectFirstOrder).click();
      await this.page.locator(Locators.SofiPage.ActionOrders).nth(0).click();
      await this.page.locator('[id^="deliveryLocation_11310453"]').fill("lamine");
      await this.page.getByRole(Locators.SofiPage.Cancel.role, { name: Locators.SofiPage.Cancel.name }).click();



      
      await this.page.locator(Locators.SofiPage.IdArrowRightIcon).click();
      await this.page.locator(Locators.SofiPage.IdArrowLefttIcon).click();
      await this.page.locator(Locators.SofiPage.IdSettings).click();
      await this.page.locator(Locators.SofiPage.TableHeaderSettings.ExecutionStatus).click();
      await this.page.locator(Locators.SofiPage.TableHeaderSettings.ClientOrderNum).click();
      await this.page.locator(Locators.SofiPage.TableHeaderSettings.Client).click();
      await this.page.locator(Locators.SofiPage.TableHeaderSettings.DeliveryLocation).click();
      await this.page.locator(Locators.SofiPage.TableHeaderSettings.DeliveryDate).click();
      await this.page.locator(Locators.SofiPage.TableHeaderSettings.ShipmentPriority).click();
      await this.page.locator(Locators.SofiPage.TableHeaderSettings.ClientResponsible).click();
      await this.page.locator(Locators.SofiPage.TableHeaderSettings.ExecutionType).click();
      await this.page.locator(Locators.SofiPage.TableHeaderSettings.ExecutionID).click();
      await this.page.locator(Locators.SofiPage.TableHeaderSettings.Supplier).click();
      await this.page.locator(Locators.SofiPage.TableHeaderSettings.LastDDPI).click();
      await this.page.locator(Locators.SofiPage.TableHeaderSettings.OrderConfirmationDate).click();
      await this.page.getByRole(Locators.SofiPage.Reset.role, { name: Locators.SofiPage.Reset.name }).click();
      await this.page.getByRole(Locators.SofiPage.Apply.role, { name: Locators.SofiPage.Apply.name }).click();



      await this.page.locator(Locators.SofiPage.IdFilters).click();
      await this.page.getByPlaceholder(Locators.SofiPage.FilterConfiguration.Client, { exact: true }).click(); //Ouvrir la liste
      await this.page.locator('li:has-text("LEROY MERLIN FRANCE")').click();//sélectionner l'element qui contient le texte "LEROY MERLIN FRANCE"
      await this.page.getByRole('heading', {name: 'Filter configuration'}).click();
      await this.page.getByPlaceholder(Locators.SofiPage.FilterConfiguration.DeliveryLocation, { exact: true }).click(); //Ouvrir la liste
      await this.page.locator('li:has-text("ENT. LM GRECE THESSALONIKI")').click();//sélectionner l'element qui contient le texte "ENT. LM GRECE THESSALONIKI"

      
      
      await this.page.getByRole(Locators.SofiPage.Apply.role, { name: Locators.SofiPage.Close.name }).click();
      await this.page.locator(Locators.SofiPage.IdFilters).click();
      await this.page.getByRole(Locators.SofiPage.Apply.role, { name: Locators.SofiPage.Apply.name }).click();
      await this.page.locator(Locators.SofiPage.IdFilters).click();
      await this.page.getByRole(Locators.SofiPage.Close.role, { name: Locators.SofiPage.Close.name }).click();
      */

      /*
      await this.page.locator('#tag').getByRole('button').click();
      await this.page.locator(Locators.SofiPage.IdSearchInput).fill('cgo_1010465');
      await this.page.locator('#checkbox_13621844').click();
      await this.page.locator(Locators.SofiPage.ActionOrders).nth(0).click();
      await this.page.getByRole(Locators.SofiPage.Cancel.role, { name: Locators.SofiPage.Cancel.name }).click();
      */
      



      //await this.page.locator(Locators.SofiPage.ActionOrders).nth(0).click();

    } 



    async OpenSupplierManagementMenu() {
      await this.page.locator(Locators.HomePage.IdSupplierManagement).click();
    } 


    async OpenHelpPage () {
      await this.page.locator(Locators.HomePage.Care).click();
      /*
      await this.page.locator('label').filter({ hasText: 'Sales order execution' }).click();
      await this.page.locator('#cancel').click();
      */
    }

  
}