// @ts-check
const { test, expect } = require('@playwright/test');
import MyClassHomePage from '../Classes/HomePage';
import MyClassLoginPage from '../Classes/LoginPage';
import MyClasseAccountPage from '../Classes/AccountPage'
import MyData from '../DataTest/Data.json';




test.describe('Tests home page', () => {
  
  let LoginPage;
  let HomePage;
  let AccountPage

test.beforeEach(async ({ page, baseURL }) => {
  
  HomePage = new MyClassHomePage(page);
  LoginPage = new MyClassLoginPage(page);
  AccountPage = new MyClasseAccountPage(page);
  await LoginPage.GoTo(baseURL);

});


test('Test care page', async () => {

  await LoginPage.LoginFunction(MyData.loginPage.users[0].UserName, MyData.loginPage.users[0].Password);
  await HomePage.OpenHelpPage();
 
});

test('Test', async () => {

  await LoginPage.LoginFunction(MyData.loginPage.users[0].UserName, MyData.loginPage.users[0].Password);
  await HomePage.Open_Close_SideBar();
  await HomePage.OpenProductMenu();
 
});



test('Change language to English', async () => {

  await LoginPage.LoginFunction(MyData.loginPage.users[0].UserName, MyData.loginPage.users[0].Password);
  await HomePage.Open_Close_SideBar();
  await HomePage.Open_Close_UserSubMenu();

  await HomePage.MyAccount();

  await AccountPage.SelectLanguage('en');
  await AccountPage.ApplyButton();
  await expect(AccountPage.SelVrifLanguage()).toHaveText('My account')

});

test('Open Order menu ', async () => {

  await LoginPage.LoginFunction(MyData.loginPage.users[0].UserName, MyData.loginPage.users[0].Password);
  await HomePage.OpenProductMenu();
  await HomePage.OpenOrdersMenu();
  await HomePage.OpenSupplierManagementMenu();
  await HomePage.Open_Close_UserSubMenu();
  await HomePage.Disconnect();



});


});