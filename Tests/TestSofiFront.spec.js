// @ts-check
const { test, expect } = require('@playwright/test');
import MyClassHomePage from '../Classes/HomePage';
import MyClassLoginPage from '../Classes/LoginPage';
import MyClassAccountPage from '../Classes/AccountPage'
import MyClassSofiPage  from '../Classes/SofiPage'
import MyData from '../DataTest/Data.json';
import { Locators } from '../Classes/Locators';




test.describe('Tests Sales Order Execution', () => {
  
  let LoginPage;
  let HomePage;
  let AccountPage;
  let SofiPage;

test.beforeEach(async ({ page, baseURL }) => {
  
  LoginPage = new MyClassLoginPage(page);
  HomePage = new MyClassHomePage(page);
  AccountPage = new MyClassAccountPage(page);
  SofiPage = new MyClassSofiPage(page);

  await LoginPage.GoTo(baseURL);
  await LoginPage.LoginFunction(MyData.Pages.LoginPage.users[0].UserName, MyData.Pages.LoginPage.users[0].Password);

});

  test('[LSO] Filter with the search box (Order client n° and ExecutionID)', async () => {

    await HomePage.OpenSalesOrdersExecution();
    await SofiPage.RemoveFilter(0);
    await SofiPage.FillSearchInput(MyData.Pages.SofiPage.OrderClientNumber[0]);

    let NumberOfOrder = await SofiPage.GetOrdersNumber(); 
      for (let i = 0; i < NumberOfOrder; i++) {
        await SofiPage.getText(Locators.SofiPage.DataTable.ClientOrderNum,i);
        console.log(await SofiPage.getText(Locators.SofiPage.DataTable.ClientOrderNum,i));
        expect(await SofiPage.getText(Locators.SofiPage.DataTable.ClientOrderNum,i)).toContain('cgo_');
    }     
    await SofiPage.FillSearchInput(MyData.Pages.SofiPage.ExecutionID[0]);
    NumberOfOrder = await SofiPage.GetOrdersNumber();
    console.log(NumberOfOrder);
    for (let i = 0; i < NumberOfOrder; i++) {
      await SofiPage.getText(Locators.SofiPage.DataTable.ExecutionID,i);
      console.log(await SofiPage.getText(Locators.SofiPage.DataTable.ExecutionID,i));
      expect(await SofiPage.getText(Locators.SofiPage.DataTable.ExecutionID,i)).toContain('CO00000437');
  }

  await SofiPage.FillSearchInput(MyData.Pages.SofiPage.ExecutionID[1]);
    NumberOfOrder = await SofiPage.GetOrdersNumber();
    console.log(NumberOfOrder);
    for (let i = 0; i < NumberOfOrder; i++) {
      await SofiPage.getText(Locators.SofiPage.DataTable.ExecutionID,i);
      console.log(await SofiPage.getText(Locators.SofiPage.DataTable.ExecutionID,i));
      expect(await SofiPage.getText(Locators.SofiPage.DataTable.ExecutionID,i)).toContain('PO00000');
  }
    
    
    await HomePage.Disconnect();

  });

  test('[LSO] Filter with no result in the data', async () => {

    await HomePage.OpenSalesOrdersExecution();
    await SofiPage.RemoveFilter(0);
    await SofiPage.OpenFilterConfig();
    await SofiPage.Open_Select_FilterConfigList(Locators.SofiPage.FilterConfiguration.Client, 'ADEO SERVICES (PASQ)');
    await SofiPage.CloseList();
    await SofiPage.Open_Select_FilterConfigList(Locators.SofiPage.FilterConfiguration.DeliveryLocation,'ALMACEN TORIJA LM ESPANA');
    await SofiPage.ApplyFilterConfig();
    await SofiPage.VerifButtonFilter();
    expect(await SofiPage.getValue(Locators.SofiPage.IditemPerPage)).toEqual('20');


    
    
    await HomePage.Disconnect();

  });


  test('Modify paging parameters for sale order', async () => {

    await HomePage.OpenSalesOrdersExecution();
    await SofiPage.RemoveFilter(0);

    await SofiPage.RowsPerPage('20');
    expect(await SofiPage.getValue(Locators.SofiPage.IditemPerPage)).toEqual('20');
    console.log(await SofiPage.getValue(Locators.SofiPage.IditemPerPage));


    await SofiPage.RowsPerPage('50');
    expect(await SofiPage.getValue(Locators.SofiPage.IditemPerPage)).toEqual('50');
    console.log(await SofiPage.getValue(Locators.SofiPage.IditemPerPage));


    await SofiPage.RowsPerPage('100');
    expect(await SofiPage.getValue(Locators.SofiPage.IditemPerPage)).toEqual('100');
    console.log(await SofiPage.getValue(Locators.SofiPage.IditemPerPage));


    
    await HomePage.Disconnect();

  });


  

  


  


  


  

});