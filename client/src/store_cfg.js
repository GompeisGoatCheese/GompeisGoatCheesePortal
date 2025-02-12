import { configureStore } from '@reduxjs/toolkit';

import shippingAddressSlice from './store/address_slice';
import customerSlice from './store/customer_slice';
import invoiceSlice from './store/invoice_slice';
import orderSlice from './store/order_slice';
import orderlineSlice from './store/orderline_slice';
import productSlice from './store/product_slice';

// import statsSlice from './stats_slice';
import userSlice from './store/user_slice';

export const store = configureStore({
  reducer: {
    orders: orderSlice,
    shippingAddresses: shippingAddressSlice,
    customers: customerSlice,
    invoices: invoiceSlice,
    orderline: orderlineSlice,
    products: productSlice,
    // quickstats: statsSlice,
    users:userSlice,
  },
  devTools: true,
});
