import { createAction } from 'redux-actions';

export const update2Captcha = createAction('2CAPTCHA_KEY_UPDATE');
export const updateRuCaptcha = createAction('RU_CAPTCHA_KEY_UPDATE');
export const updateDbcUsername = createAction('DBC_USERNAME_UPDATE');
export const updateDbcPassword = createAction('DBC_PASSWORD_UPDATE');
export const apiServiceUpdate = createAction('API_SERVICE_UPDATE');
export const updateServer = createAction('SERVER_UPDATE');
export const updateEmail = createAction('EMAIL_UPDATE');
export const updateAmount = createAction('AMOUNT_UPDATE');
export const updateDateOfBirth = createAction('DATE_OF_BIRTH_UPDATE');
export const updateOutputResults = createAction('OUTPUT_RESULTS_UPDATE');
export const toggleGenerate = createAction('TOGGLE_GENERATE');
export const tickTimer = createAction('TIMER_TICK');
export const resetTimer = createAction('TIMER_RESET');
export const toggleEmailCheckBox = createAction('TOGGLE_EMAIL_CHECKBOX');
export const updatePasswordLength = createAction('PASSWORD_LENGTH_UPDATE');
export const generatePassword = createAction('PASSWORD_GENERATE');
export const updateUsernameMinLength = createAction('NAME_MIN_LENGTH_UPDATE');
export const updateUsernameMaxLength = createAction('NAME_MAX_LENGTH_UPDATE');
export const generateUsername = createAction('USERNAME_GENERATE');
export const updateProgressBar = createAction('PROGRESS_BAR_UPDATE');
export const toggleProxyUse = createAction('TOGGLE_PROXY_USE');
export const updateProxyList = createAction('UPDATE_PROXY_LIST');
export const updateProxyChecking = createAction('UPDATE_PROXY_CHECKING');
export const updateProxyGettingState = createAction('UPDATE_GETTING_PROXY_STATE');
export const toggleExistedEmails = createAction('TOGGLE_EXISTED_EMAILS');
