// @ts-check
const { test, expect } = require('@playwright/test');
import MyClassLoginPage from '../Classes/LoginPage';
import MyData from '../DataTest/Data.json';

let LoginPage;

test.describe('Tests login page', () => {
  
  


test.beforeEach(async ({ page, baseURL }) => {
        LoginPage = new MyClassLoginPage(page);
  await LoginPage.GoTo(baseURL); // navigue vers la page de connexion avant chaque test
 
});


test('Login with Visitor account', async () => {

  await LoginPage.LoginFunction(MyData.loginPage.users[0].UserName, MyData.loginPage.users[0].Password);
  await LoginPage.CheckMessage(expect, 'Bienvenue Lamine', 0);

});


test('Login unvalid account', async () => {

  await LoginPage.LoginFunction(MyData.loginPage.users[2].UserName, MyData.loginPage.users[2].Password);
  await LoginPage.CheckMessage(expect, 'Bad login or password.',1);

});


/*
test('Verify link forgot my password', async ({  }) => {
 
  await LoginPage.clickForgotPassword();

});
*/

});



