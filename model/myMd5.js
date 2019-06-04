const crypto = require('crypto');

exports.myMd5=function (pwd) {
    const a=crypto.createHash('md5').update(pwd).digest('base64');
    const b=a.slice(2,9)+'chen';
    return crypto.createHash('md5').update(b).digest('base64');
};
