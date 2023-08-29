'use strict';
const psl = require("/opt/node_modules/psl");
// const dnsPromises = require('dns').promises;
const dns = require('dns');

exports.getDomain = (domain) => {
    return psl.parse(domain).domain;
};

exports.getSubDomain = (domain) => {
    return psl.parse(domain).subdomain;
};

async function lookupPromise(url){
    return new Promise((resolve, reject) => {
        dns.lookup(url, (err, address, family) => {
            if(err) reject(err);
            resolve(address);
        });
    });
}

exports.isValidDomain = async(hostname) => {
    // try {
    //     await dnsPromises.lookup(hostname);
    //     return true;
    // } catch (_) {
    //     return false;
    // }
    try {
        await lookupPromise(hostname);
        return true;
    }
    catch(_) {
        return false;
    }
};

exports.cleanDomain = (domain) => {
    // if (domain.indexOf(":") > -1) {
    //     domain = domain.split(':');
    //     domain = domain[0];
    // }
    // return exports.getDomain(domain.toLowerCase().trim());
    try {
        domain = new URL(domain).origin;
    }
    catch(e) { }
    domain = domain.replace(/(^\w+:|^)\/\/(www[0-9]?\.)?/, '');
    domain = domain.replace(/(www[0-9]?\.)?/,'');
    domain = domain.replace(/:\d+/, '');
    domain = domain.split('/')[0];
    return domain;
}

function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

// Warning: you can use this function to extract the "root" domain, but it will not be as accurate as using the psl package.
exports.extractRootDomain = (url) => {
    url = url.split(' ').join('');
    url = url.toLowerCase().trim();
    var domain = extractHostname(url),
        splitArr = domain.split('.'),
        arrLen = splitArr.length;

    //extracting the root domain here
    //if there is a subdomain
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
        //check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
        if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
            //this is using a ccTLD
            domain = splitArr[arrLen - 3] + '.' + domain;
        }
    }
    return domain;
}