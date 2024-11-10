import  {  Locators } from './Locators.js';

export default class SalesOrderExePage {

    constructor(page) {
      this.page = page; // Stocke l'objet page 
    }



    async ModifyOrders    () {
        await this.page.locator(Locators.SofiPage.ActionOrders).nth(0).click();
    }

    async CancelModifModification () {
        await this.page.getByRole(Locators.SofiPage.Cancel.role, {name: Locators.SofiPage.Cancel.name}).nth(2).click();
    }

    async ValidateModifModification   () {
        await this.page.getByRole(Locators.SofiPage.Validate.role, {name: Locators.SofiPage.Validate.name}).nth(2).click();
    }

    async DownloadOrders  () {
        await this.page.locator(Locators.SofiPage.ActionOrders).nth(1).click();
    }

    async RequestModification () {
        await this.page.locator(Locators.SofiPage.ActionOrders).nth(2).click();
    }

    async OredrsToManage() {
        await this.page.locator(Locators.SofiPage.IdOredrsToManage).click({force: true});
    }

    async FillSearchInput(Search) {
        await this.page.locator(Locators.SofiPage.IdSearchInput).fill(Search);
    }
    async RemoveFilter(index) {
        await this.page.locator(Locators.SofiPage.IdRemoveSearchInputFilter).getByRole('button').nth(index).click();
    }

    async OpenTableHeaderSettings () {
        await this.page.locator(Locators.SofiPage.IdSettings).click();
    }
  
    async OpenFilterConfig() {
        await this.page.locator(Locators.SofiPage.IdFilters).click();
        await this.page.getByRole('heading', { name: 'Filter configuration' }).waitFor({ state: 'visible', timeout: 5000 })
    }

    async Open_Select_FilterConfigList(selector,Value) {
        await this.page.getByPlaceholder(selector, { exact: true }).click();
        await this.page.locator(`li:has-text("${Value}")`).click();
    }

    async CloseList () {
        await this.page.getByRole('heading', {name: 'Filter configuration'}).click();
    }

    async SwitchToNextPage () {
        await this.page.locator(Locators.SofiPage.IdArrowRightIcon).click();
    }

    async SwitchToPreviousPage () {
        await this.page.locator(Locators.SofiPage.IdArrowLefttIcon).click();
    }

    async ApplyFilterConfig () {
        await this.page.getByRole(Locators.SofiPage.Apply.role, {name: Locators.SofiPage.Apply.name}).click();
    }


    async ApplySettings () {
        await this.page.getByRole(Locators.SofiPage.Apply.role, {name: Locators.SofiPage.Apply.name}).click();
    }

    async ResetSettings () {
        await this.page.getByRole(Locators.SofiPage.Reset.role, {name: Locators.SofiPage.Reset.name}).click();
    }

    async RowsPerPage (Value) {
        await this.page.locator(Locators.SofiPage.IditemPerPage).selectOption(Value);
    }

    async SelectPage (Value) {
        await this.page.locator(Locators.SofiPage.SelectPage).selectOption(Value);
    }

    async VerifButtonFilter () {
        await this.page.locator(Locators.SofiPage.IdFilters2).waitFor({ state: 'visible', timeout: 5000 });
    }

    async GetOrdersNumber () {
         
        await this.page.waitForTimeout(5000);
        let    ActualFirstClientOrderN = await this.getText(Locators.SofiPage.DataTable.ItemsPerPage);
        const   NumberOfOrder = parseInt(ActualFirstClientOrderN.match(/\d+(?=\sof)/), 10);
        return NumberOfOrder;
    }



    async getText(selector, index) {
        if(index !== undefined)
        return await this.page.locator(selector).nth(index).innerText(); 
        else
        return await this.page.locator(selector).innerText(); 
    }
    
    async getValue(selector) {
        const Value = await this.page.locator(selector).inputValue();
        return Value;
    }
  }