import { disconnect } from "process";

export const Locators = {
    LoginPage: {
        IdUserName:             '#username',
        IdPassword:             '#password',
        IdConnect:              '#signOnButton',
        IdRememberUsername:     '#rememberUsername',
        ForgotPassword:         { role: 'link', name: 'Forgot your password?' },
        CheckMessageWelcome:    { role: 'heading', name: 'Bienvenue' },
        CheckErrorLogin:        'Bad login or password.'
    },

    HomePage: {
        IdOpenCloseSideBar: '#mc-sidebar__trigger',
        IdHome:             '#Home',

        //Menu Produit
        IdProduct:           '#PRODUCT',
        IdCompData:          '#PRODUCT_WEDEAL',
        IdSalesPriceChanges: '#SALES_PRICE_CHANGES',

        //Menu Orders
        IdOrders:                '#ORDERS',
        IdSalesOrderExe:         '#ORDERS_SOFI',
        IdManageShiompenRelease: '#PRESHIPMENT',

        //Menu Gestion fournisseur
        IdSupplierManagement: '#SUPPLIER_MANAGEMENT',
        IdScoreCardSuppliers: '#SUPPLIER_SCORECARD',

        IdOpenCloseUserSubMenu: '#user-trigger',
        IdMyAccount:            '#PortalAccountInformations',
        IdDisconnect:           '#PortalLogout',
        
        //Aide
        Care: '#Care'
    },

    AccountPage: {
        IdLanguage:     '#language',
        IdApply:        '#apply-language-button',
        ModifPassword:  {role: 'link', name: 'Modifier le mot de passe' }
    },

    SofiPage: {
        ActionOrders:       '.button-container .mc-button', //Indice 0: Button Modif, Indice 1: Button Download order, Indice 2: Button Modification request 
        IdOredrsToManage:   '#toggle-requested-desktop',
        IdSearchInput:      '#search-input',
        IdFilters:          '#filters',
        IdFilters2:         '#filters2',
        IdRemoveFilte:      '#tag',

        Close:      { role: 'button', name: 'Close' },
        Apply:      { role: 'button', name: 'Apply' },
        Reset:      { role: 'button', name: 'Reset' },
        Cancel:     { role: 'button', name: 'Cancel' },
        Validate:   { role: 'button', name: 'Validate' },

        IdSettings:         '[class$="filter"]',

        TableHeaderSettings : { ExecutionStatus: '#checkbox_0', ClientOrderNum: '#checkbox_1', Client: '#checkbox_2', 
                                DeliveryLocation: '#checkbox_3' , DeliveryDate: '#checkbox_4', ShipmentPriority: '#checkbox_5' ,
                                ClientResponsible: '#checkbox_6', ExecutionType: '#checkbox_7' , ExecutionID: '#checkbox_8', 
                                Supplier: '#checkbox_9', LastDDPI: '#checkbox_10', OrderConfirmationDate: '#checkbox_11' 
                            },
        FilterConfiguration : { Client: 'Client', DeliveryLocation: 'Delivery location', Status: 'Status', 
                                ClientOrderNum: '#CLIENT_ORDER_NUMBER' , SupplyChainPlanner: 'Supply chain planner', ShipmentPriority: 'Shipment priority' ,
                                AdeoKey: '#ADEO_KEY', GTIN: '#PRODUCT_BAR_CODE' , ExecutionID: '#EXECUTION_ID', 
                                DeliveryDate: 'Delivery date', Supplier: 'Supplier', SynchroFileDeadline: 'Synchro file deadline', 
                                ConfirmationDate: 'Confirmation date'
                            },
                            //DeliveryDate,SynchroFileDeadline et ConfirmationDate  : il existe un data-test mais c'est le meme pour les trois 'dp-input'


        DataTable: {
            ClientOrderNum: '.mc-datatable__table .mc-datatable__cell--clientOrderNumber',
            ItemsPerPage:   '.mc-datatable__footer .mc-datatable__count.mc-datatable__info',
            ExecutionID:   '.execution-id'
        },

        IdRemoveSearchInputFilter: '#tag',
        IdApplyFilterConfiguration: '#apply',

        IdSelectAllOrders:  '#select-all',
        IdSelectFirstOrder: '#checkbox_11310453', //Premiére case à caucher dans le tableau des commandes
        

        IditemPerPage: '#itemPerPage',
        IdSelectPagination:'[id^="selectpagination"]',
        IdArrowRightIcon: '[id^="MIcon-ArrowArrowRight"]',
        IdArrowLefttIcon: '[id^="MIcon-ArrowArrowLeft"]',
    }

    //Other classe
};