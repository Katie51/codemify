import helperMethods from "./helper.user.methods.js";
import response from './api.user.response.js';

console.log(helperMethods.getUsersByStatus(response, 'Deactivated')); // [ Frank ]
console.log(helperMethods.getUsersByRole(response, 'Admin', 1)); // [ Alice, David ]
console.log(helperMethods.getUsersByEmailDomain(response, 'codemify')); // [ Alice, Karen ]
console.log(helperMethods.getUserBalanceByCurrency(response, 'USD')); // [ 1000, 1200, 900 ]