import * as dotenv from 'dotenv';
dotenv.config();

export default {
  app: {
    host: process.env.APP_HOST,
    port: +process.env.APP_PORT,
  },
  admin_validation_api: process.env.ADMIN_VALIDATION_API,
  database: {
    host: process.env.MYSQL_HOST,
    port: +process.env.MYSQL_PORT,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
  dk: {
    customer_details_url: process.env.DK_CUSTOMER_DETAILS_URL,
    customer_details_from_id: process.env.CUSTOMER_DETAILS_FROM_ID,
    customer_service_api_key: process.env.CUSTOMER_SERVICE_X_API_KEY,
    graphql_base_url: process.env.DK_GRAPHQL_BASE_URL,
    admin_token: process.env.DK_ADMIN_TOKEN,
    customer_groups_url: process.env.DK_CUSTOMER_GROUPS_URL,
    x_api_key: process.env.DK_X_API_KEY,
    appsync_url: process.env.DK_APPSYNC_URL,
    methods_graphql_url: process.env.DK_METHODS_GRAPHQL_URL,
    methods_x_api_key: process.env.DK_METHODS_X_API_KEY,
    tax_x_api_key: process.env.DK_TAX_X_API_KEY,
    tax_details_url: process.env.DK_TAX_DETAILS_URL,
    salesrules_details_url: process.env.SALESRULES_DETAILS_URL,
    customer_rules_usage_details_url:
      process.env.CUSTOMER_RULES_USAGE_DETAILS_URL,
    coupons_search_url: process.env.DK_COUPONS_SEARCH_URL,
    coupons_sales_url: process.env.DK_COUPONS_SALES_URL,
    rewards_admin_token: process.env.DK_REWARDS_ADMIN_TOKEN,
    customer_rewards_details_url: process.env.DK_CUSTOMER_REWARDS_DETAILS_URL,
    rewards_global_config_url: process.env.DK_REWARDS_GLOBAL_CONFIG_URL,
    rewards_admin_token_url: process.env.DK_REWARDS_ADMIN_TOKEN_URL,
    product_for_service_gql_url: process.env.DK_PROD_FOR_SERVICE_URL,
    get_payment_methods_url: process.env.DK_PAYMENT_METHODS_URL,
    membership_listing_url: process.env.DK_MEMBERSHIP_LISTING_URL,
    customer_membership_lsting_url: process.env.DK_CUSTOMER_MEMBERSHIP_URL,
    customer_coupon_url: process.env.DK_CUSTOMER_COUPON_URL,
    db_webhook_secret: process.env.DK_DB_WEBHOOK_SECRET,
    inactive_cart_token: process.env.INACTIVE_CART_TOKEN,
    magento_inactive_cart_url: process.env.MAGENTO_iNACTIVE_CART_URL,
    new_customer_details_url: process.env.DK_NEW_CUSTOMER_DETAILS_URL,
  },
  pincode_cod_validation: {
    url: process.env.CHECK_COD_URL,
    token: process.env.CHECK_COD_TOKEN,
  },
};