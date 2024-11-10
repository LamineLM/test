import { Locator, Page } from '@playwright/test';

export class BasePage {

    constructor(public readonly page: Page, public name: string = "Base") {
        this.page = page;
    }

    protected async goto(url: string): Promise<void> {
        await this.page.goto(url); // Navigue vers l'URL spécifiée
    }

    protected async setField(locator: Locator, value: string): Promise<void> {
        if (await locator.isVisible()) {
            await locator.fill(value);
        } else {
            throw new Error('Le champ n\'est pas visible pour être rempli');
        }
    }

    protected async setFieldList(locator: Locator, value: string): Promise<void> {
        if (await locator.isVisible()) {
            await locator.fill(value);
        } else {
            throw new Error('Le champ n\'est pas visible pour être rempli');
        }
        await this.page.locator(`li:has-text("${value}")`).click();
    }

    async selectOptionlist(locator: Locator, optionText: string): Promise<void> {
        // Cliquer sur le bouton de tri pour ouvrir la liste d'options
        if (await locator.isVisible()) {
            await locator.click();
        } else {
            throw new Error('Le bouton n\'est pas visible pour ouvrir la list');
        }
        await this.page.locator(`li:has-text("${optionText}")`).click();
    }

    // Méthode pour vérifier la visibilité d'un élément
    async isElementVisible(element: Locator, elementName: string): Promise<boolean> {
        const isVisible = await element.isVisible();
        if (!isVisible) {
            throw new Error(`${elementName} l'element n'est pas visible dans la page.`);
        }
        //console.log('visibilité de l\'element '+isVisible);
        return isVisible;
    }

    // Méthode pour sélectionner une option dans un select
    protected async selectOption(locator: Locator, value: string): Promise<void> {
        if (await locator.isVisible()) {
            await locator.selectOption(value);
        } else {
            throw new Error("Le menu déroulant n'est pas visible pour sélectionner une option");
        }
    }

    // Méthode pour cliquer sur un élément
    protected async click(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible' });
        if (await locator.isVisible()) {
            await locator.click({ force: true });
        } else {
            throw new Error(`L'élément avec le locator ${locator.toString()} n'est pas visible pour le clique`);
        } 
    }

    protected async clickByIndex(locator: Locator, index: number): Promise<void> {
        if (await locator.nth(index).isVisible()) {
            await locator.nth(index).click({ force: true });
        } else {
            throw new Error(`L'élément à l'index ${index} n'est pas visible pour le clic.`);
        }
    }


    async getText(locator: Locator, index?: number): Promise<string> {
        if (index !== undefined) {
            // Vérifie si l'élément à l'index donné est visible
            if (await locator.nth(index).isVisible()) {
                return await locator.nth(index).innerText();
            } else {
                throw new Error(`L'élément à l'index ${index} n'est pas visible`);
            }
        } else {
            // Vérifie si le premier élément correspondant au locator est visible
            if (await locator.isVisible()) {
                return await locator.innerText();
            } else {
                throw new Error("L'élément n'est pas visible");
            }
        }
    }

}

