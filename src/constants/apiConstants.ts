/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

export enum ApiConstants {
    TRANSACTION_NOT_PERMITTED = "Transaction Not Permitted",
    CVC_DECLINED = "CVC Declined",
    RESTRICTED_CARD = "Restricted Card",
    PAYMENT_DETAIL_NOT_FOUND = "803 PaymentDetail not found",
    REFUSED = "Refused",

    REFUSAL_REASON_RAW = "refusalReasonRaw",
    PAYMENT_METHOD = "paymentMethod",
    EXPIRY_DATE = "expiryDate",
    CARD_BIN = "cardBin",
    CARD_HOLDER_NAME = "cardHolderName",
    CARD_SUMMARY = "cardSummary",
    THREE_D_OFFERERED = "threeDOffered",
    THREE_D_AUTHENTICATED = "threeDAuthenticated",
    AVS_RESULT = "avsResult",
    PAYMENT_TOKEN = "payment.token",
    FRAUD_RESULT_TYPE = "fraudResultType",
    FRAUD_MANUAL_REVIEW = "fraudManualReview",
    AUTH_CODE = "authCode",

    BOLETO_BARCODE_REFERENCE = "boletobancario.barCodeReference",
    BOLETO_DATA = "boletobancario.data",
    BOLETO_DUE_DATE = "boletobancario.dueDate",
    BOLETO_URL = "boletobancario.url",
    BOLETO_EXPIRATION_DATE = "boletobancario.expirationDate",

    MULTIBANCO_ENTITY = "comprafacil.entity",
    MULTIBANCO_AMOUNT = "comprafacil.amount",
    MULTIBANCO_DEADLINE = "comprafacil.deadline",
    MULTIBANCO_REFERENCE = "comprafacil.reference",

    HMAC_SIGNATURE = "hmacSignature",

    JSON = "card.encrypted.json",

    BOLETO_SANTANDER = "boletobancario_santander",

    NUMBER = "number",
    EXPIRY_MONTH = "expiryMonth",
    EXPIRY_YEAR = "expiryYear",
    CVC = "cvc",
    ENCRYPTED_CARD_NUMBER = "encryptedCardNumber",
    ENCRYPTED_EXPIRY_MONTH = "encryptedExpiryMonth",
    ENCRYPTED_EXPIRY_YEAR = "encryptedExpiryYear",
    ENCRYPTED_SECURITY_CODE = "encryptedSecurityCode",
    METHOD_TYPE = "type",
    HOLDER_NAME = "holderName",
    RECURRING_DETAIL_REFERENCE = "recurringDetailReference",
    STORE_DETAILS = "storeDetails",

    MD = "MD",
    PAREQ = "PaReq",

    TYPE_SCHEME = "scheme",

    IDEMPOTENCY_KEY = "Idempotency-Key",
    ACCEPT_CHARSET = "Accept-Charset",
    USER_AGENT = "User-Agent",
    METHOD_POST = "POST",
    CONTENT_TYPE = "Content-Type",
    API_KEY = "X-API-Key",
    APPLICATION_JSON_TYPE = "application/json",
    ADYEN_LIBRARY_NAME = "adyen-library-name",
    ADYEN_LIBRARY_VERSION = "adyen-library-version",
}
