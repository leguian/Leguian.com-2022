const axios = require('axios');
const fs = require("fs");

const googleSheetUrl = `https://opensheet.elk.sh/1bU3WIiX2fXJdwLPLLdrHgiLnmCXOX5G-7tmTLvUupfs/tab`;
//
// module.exports = () => {
//     return new Promise((resolve, reject) => {
//         axios.get(googleSheetUrl)
//             .then(res => {
//                 const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
//                 console.log('Status Code:', res.status);
//                 console.log('Date in Response header:', headerDate);
//
//                 const users = res.data;
//                 for(user of users) {
//                     console.log(`Got user with id: ${user.id}, name: ${user.name}`);
//                 }
//             })
//
//             // uh-oh. Handle any errors we might encounter
//             .catch(error => {
//                 console.log('Error :', error);
//                 reject(error);
//             });
//     })
// }
//
// module.exports = (data, path) => {
//     fs.writeFile(path, data, err => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(`Data saved for dev: ${path}`);
//         }
//     });
// }
