import { createStackNavigator } from "@react-navigation/stack";
import ForgetPassword from "../screens/auth/forgetPassword";
import LoginEmailScreen from "../screens/auth/loginEmailScreen";
import AddNewCategories from "../screens/categories/addNewCategories";
import AddCreditNotesScreen from "../screens/creditNotes/addCreditNotes";
import CreditNotesScreen from "../screens/creditNotes/creditNotes";
import CreditNotesDetailsScreen from "../screens/creditNotes/creditNotesDetails";
import AddCustomersScreen from "../screens/customers/addCustomers";
import CustomerDetailsScreen from "../screens/customers/customerDetails";
import CustomersScreen from "../screens/customers/customers";
import DashboardScreen from "../screens/dashboard/dashboard";
import AddDeliverChallanScreen from "../screens/deliveryChallans/addDeliverChallan";
import DeliveryChallanDetailsScreen from "../screens/deliveryChallans/deliveryChallanDetails";
import DeliveryChallansScreen from "../screens/deliveryChallans/deliveryChallans";
import ExpensesScreen from "../screens/expenses/expensesScreen";
import InventoryAdded from "../screens/inventory/inventoryAdded";
import InventoryList from "../screens/inventory/inventoryList";
import InventoryRemoved from "../screens/inventory/inventoryRemoved";
import InvoiceTemplatesScreen from "../screens/invoiceTemplates/invoiceTemplatesScreen";
import AddInvoiceScreen from "../screens/invoices/addInvoice";
import AddInvoiceOption from "../screens/invoices/addInvoiceOption";
import InvoiceScreen from "../screens/invoices/invoice";
import InvoiceDetailsScreen from "../screens/invoices/invoiceDetails";
import ProductScreen from "../screens/invoices/products";
import SendPaymentLink from "../screens/invoices/sendPaymentLink";
import SuccessSendPaymentLink from "../screens/invoices/successSendPaymentLink";
import NotificationScreen from "../screens/notification/notificationScreen";
import OnboardingScreen from "../screens/onboarding/onboarding";
import PaymentSummary from "../screens/paymentSummary/paymentSummary";
import PaymentsScreen from "../screens/payments/payments";
import AddNewProducts from "../screens/products/addNewProducts";
import Products from "../screens/products/products";
import AddPurchaseOrderScreen from "../screens/purchase/addPurchaseOrderScreen";
import PurchaseOrderDetails from "../screens/purchaseOrder/purchaseOrderDetails";
import PurchaseOrderScreen from "../screens/purchaseOrder/purchaseOrderScreen";
import AddPurchaseReturn from "../screens/purchaseReturn/addPurchaseReturn";
import PurchaseReturn from "../screens/purchaseReturn/purchaseReturn";
import PurchaseReturnDebitNotesDetails from "../screens/purchaseReturn/purchaseReturnDebitNotesDetails";
import AddPurchases from "../screens/purchases/addPurchases";
import Purchases from "../screens/purchases/purchases";
import PurchasesDetails from "../screens/purchases/purchasesDetails";
import AddQuotationScreen from "../screens/quotations/addQuotation";
import QuotationDetailsScreen from "../screens/quotations/quotationDetails";
import QuotationsScreen from "../screens/quotations/quotations";
import ExpenseReport from "../screens/reports/expenseReport";
import IncomeReport from "../screens/reports/incomeReport";
import LowStockReport from "../screens/reports/lowStockReport";
import PaymentReport from "../screens/reports/paymentReport";
import ProfitorLoss from "../screens/reports/profitorLoss";
import PurchaseReport from "../screens/reports/purchaseReport";
import PurchaseReturnReport from "../screens/reports/purchaseReturnReport";
import QuotationReport from "../screens/reports/quotationReport";
import ReportsScreen from "../screens/reports/reports";
import SalesReport from "../screens/reports/salesReport";
import SalesReturnReport from "../screens/reports/salesReturnReport";
import StockReport from "../screens/reports/stockReport";
import TaxReport from "../screens/reports/taxReport";
import AddSalesReturn from "../screens/salesReturn/addSalesReturn";
import SalesReturn from "../screens/salesReturn/salesReturn";
import SalesReturnDetails from "../screens/salesReturn/salesReturnDetails";
import AccountSettings from "../screens/settings/accountSettings";
import BankDetails from "../screens/settings/bankDetails";
import GeneralSettings from "../screens/settings/generalSettings";
import InvoiceSettings from "../screens/settings/invoiceSettings";
import InvoiceTemplates from "../screens/settings/invoiceTemplates";
import SettingsScreen from "../screens/settings/settings";
import TaxRate from "../screens/settings/taxRate";
import AddSignature from "../screens/signature/addSignature";
import Signatures from "../screens/signature/signatures";
import AddNewUnits from "../screens/units/addNewUnits";
import VendorsScreen from "../screens/vendors/vendorsScreen";
import { screenName } from "../utils/screenNames";

const Stack = createStackNavigator();
interface NavigationProps {
    initialRouteName: string;
}

const StackNavigation = (props: NavigationProps) => {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName={screenName.OnboardingScreen}>
            <Stack.Screen name={screenName.OnboardingScreen} component={OnboardingScreen} />
            <Stack.Screen name={screenName.DashboardScreen} component={DashboardScreen} />
            <Stack.Screen name={screenName.LoginEmailScreen} component={LoginEmailScreen} />
            <Stack.Screen name={screenName.Products} component={Products} />
            <Stack.Screen name={screenName.AddNewProducts} component={AddNewProducts} />
            <Stack.Screen name={screenName.AddNewCategories} component={AddNewCategories} />
            <Stack.Screen name={screenName.AddNewUnits} component={AddNewUnits} />
            <Stack.Screen name={screenName.InventoryList} component={InventoryList} />
            <Stack.Screen name={screenName.InventoryAdded} component={InventoryAdded} />
            <Stack.Screen name={screenName.InventoryRemoved} component={InventoryRemoved} /> 
            {/* <Stack.Screen name={screenName.ProfileScreen} component={ProfileScreen} /> */}
            <Stack.Screen name={screenName.InvoiceScreen} component={InvoiceScreen} />
            <Stack.Screen name={screenName.ReportsScreen} component={ReportsScreen} />
            <Stack.Screen name={screenName.SettingsScreen} component={SettingsScreen} />
            <Stack.Screen name={screenName.AddInvoiceScreen} component={AddInvoiceScreen} />
            <Stack.Screen name={screenName.AccountSettings} component={AccountSettings} />
            <Stack.Screen name={screenName.GeneralSettings} component={GeneralSettings} />
            <Stack.Screen name={screenName.InvoiceSettings} component={InvoiceSettings} />
            <Stack.Screen name={screenName.BankDetails} component={BankDetails} />
            <Stack.Screen name={screenName.TaxRate} component={TaxRate} />
            <Stack.Screen name={screenName.InvoiceTemplates} component={InvoiceTemplates} />
            <Stack.Screen name={screenName.ExpenseReport} component={ExpenseReport} />
            <Stack.Screen name={screenName.PurchaseReport} component={PurchaseReport} />
            <Stack.Screen name={screenName.PurchaseReturnReport} component={PurchaseReturnReport} />
            <Stack.Screen name={screenName.SalesReport} component={SalesReport} />
            <Stack.Screen name={screenName.SalesReturnReport} component={SalesReturnReport} />
            <Stack.Screen name={screenName.QuotationReport} component={QuotationReport} />
            <Stack.Screen name={screenName.PaymentReport} component={PaymentReport} />
            <Stack.Screen name={screenName.StockReport} component={StockReport} />
            <Stack.Screen name={screenName.LowStockReport} component={LowStockReport} />
            <Stack.Screen name={screenName.IncomeReport} component={IncomeReport} />
            <Stack.Screen name={screenName.TaxReport} component={TaxReport} />
            <Stack.Screen name={screenName.Signatures} component={Signatures} />
            <Stack.Screen name={screenName.AddSignatures} component={AddSignature} />
            <Stack.Screen name={screenName.InvoiceTemplatesScreen} component={InvoiceTemplatesScreen} />
            <Stack.Screen name={screenName.ProductScreen} component={ProductScreen} />
            <Stack.Screen name={screenName.CustomersScreen} component={CustomersScreen} />
            <Stack.Screen name={screenName.AddCustomersScreen} component={AddCustomersScreen} />
            <Stack.Screen name={screenName.CustomerDetails} component={CustomerDetailsScreen} />
            <Stack.Screen name={screenName.QuotationsScreen} component={QuotationsScreen} />
            <Stack.Screen name={screenName.AddQuotationScreen} component={AddQuotationScreen} />
            <Stack.Screen name={screenName.PaymentsScreen} component={PaymentsScreen} />
            <Stack.Screen name={screenName.QuotationDetails} component={QuotationDetailsScreen} />
            <Stack.Screen name={screenName.InvoiceDetailsScreen} component={InvoiceDetailsScreen} />
            <Stack.Screen name={screenName.DeliverChallanScreen} component={DeliveryChallansScreen} />
            <Stack.Screen name={screenName.DeliveryChallanDetails} component={DeliveryChallanDetailsScreen} />
            <Stack.Screen name={screenName.AddDeliveryScreen} component={AddDeliverChallanScreen} />
            <Stack.Screen name={screenName.AddCreditNotesScreen} component={AddCreditNotesScreen} />
            <Stack.Screen name={screenName.CreditNotesDetailsScreen} component={CreditNotesDetailsScreen} />
            <Stack.Screen name={screenName.CreditNotesScreen} component={CreditNotesScreen} />
            <Stack.Screen name={screenName.SendPaymentLink} component={SendPaymentLink} />
            <Stack.Screen name={screenName.SuccessSendPaymentLink} component={SuccessSendPaymentLink} />
            <Stack.Screen name={screenName.AddInvoiceOption} component={AddInvoiceOption} />
            <Stack.Screen name={screenName.VendorsScreen} component={VendorsScreen} />
            <Stack.Screen name={screenName.ExpensesScreen} component={ExpensesScreen} />
            <Stack.Screen name={screenName.PurchaseOrderDetails} component={PurchaseOrderDetails} />
            <Stack.Screen name={screenName.PurchaseReturn} component={PurchaseReturn} />
            <Stack.Screen name={screenName.AddPurchaseReturn} component={AddPurchaseReturn} />
            <Stack.Screen name={screenName.PurchaseReturnDebitNotesDetails} component={PurchaseReturnDebitNotesDetails} />
            <Stack.Screen name={screenName.Purchases} component={Purchases} />
            <Stack.Screen name={screenName.AddPurchases} component={AddPurchases} />
            <Stack.Screen name={screenName.PurchasesDetails} component={PurchasesDetails} />
            <Stack.Screen name={screenName.SalesReturn} component={SalesReturn} />
            <Stack.Screen name={screenName.AddSalesReturn} component={AddSalesReturn} />
            <Stack.Screen name={screenName.SalesReturnDetails} component={SalesReturnDetails} />
            <Stack.Screen name={screenName.NotificationScreen} component={NotificationScreen} />  
            <Stack.Screen name={screenName.ProfitorLoss} component={ProfitorLoss} />  
            <Stack.Screen name={screenName.PurchaseOrderScreen} component={PurchaseOrderScreen} />
            <Stack.Screen name={screenName.PaymentSummary} component={PaymentSummary} />
            <Stack.Screen name={screenName.ForgetPassword} component={ForgetPassword} />
            <Stack.Screen name={screenName.AddPurchaseOrderScreen} component={AddPurchaseOrderScreen} />

        </Stack.Navigator>
    );
};

export default StackNavigation;