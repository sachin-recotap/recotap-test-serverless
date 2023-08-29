const axios = require('/opt/node_modules/axios');
const envVariable = process.env.dev;
const envArnVariable = process.env.dev_arn;
const config = require(`/opt/config/env/${envVariable}.js`);
const token = config.linkedInReportingToken;
var telegram = require('/opt/node_modules/telegram-bot-api');

var t_api = new telegram({token: config.telegram_cron.admin_token});

const linkedIn = axios.create({
    baseURL: 'https://api.linkedin.com/v2/',
    headers: {'Authorization': 'Bearer ' + token}
});

exports.getCampaignDataByDates=async (startDate,endDate,linkedinCampaignId)=>{
    let apiUrl = `/adAnalyticsV2?q=analytics&pivot=CAMPAIGN&dateRange.start.day=${startDate.getDate()}&dateRange.start.month=${startDate.getMonth()+1}&dateRange.start.year=${startDate.getFullYear()}&dateRange.end.day=${endDate.getDate()}&dateRange.end.month=${endDate.getMonth()+1}&dateRange.end.year=${endDate.getFullYear()}&timeGranularity=DAILY&campaigns[0]=urn:li:sponsoredCampaign:${linkedinCampaignId}&fields=impressions,clicks,dateRange,costInUsd,companyPageClicks`;
    let campaignData={};
    campaignData.impressions=0;
    campaignData.clicks=0;
    campaignData.cost=0;
    try {
        let linkedInData = await linkedIn.get(apiUrl);
        for (let i = 0; i < linkedInData.data.elements.length; i++) {  // get data for subcampaign
            // console.log(typeof linkedInData.data.elements[i]);
            campaignData.impressions += parseFloat(linkedInData.data.elements[i].impressions);
            campaignData.clicks += parseFloat(linkedInData.data.elements[i].clicks);
            campaignData.cost += parseFloat(linkedInData.data.elements[i].costInUsd);
        }
        console.log(campaignData);
    } catch (error) {
        console.log(error);

        // log error using logger
        // send telegram notification
        await t_api.sendMessage({
            chat_id: config.telegram_cron.chat_id,
            text: "LinkedIn Helper \nError while fetching data from LinkedIn: \n" + error
        });

        process.exit(-1);
    }
    return campaignData;
};
exports.getCampaignDataByDatesMemberCompanies=async (startDate,endDate,linkedinCampaignId)=>{
    let apiUrl = `/adAnalyticsV2?q=analytics&pivot=MEMBER_COMPANY&dateRange.start.day=${startDate.getDate()}&dateRange.start.month=${startDate.getMonth()+1}&dateRange.start.year=${startDate.getFullYear()}&dateRange.end.day=${endDate.getDate()}&dateRange.end.month=${endDate.getMonth()+1}&dateRange.end.year=${endDate.getFullYear()}&timeGranularity=DAILY&campaigns[0]=urn:li:sponsoredCampaign:${linkedinCampaignId}&fields=impressions,clicks,dateRange,costInUsd,companyPageClicks,pivot,pivotValue`;
    var companyList=[]
    try {
        let linkedInData = await linkedIn.get(apiUrl);
        console.log("linkedingData------")


        // console.log("linkedingData------",linkedInData.data)
        for (let i = 0; i < linkedInData.data.elements.length; i++) {  // get data for subcampaign
            // console.log(typeof linkedInData.data.elements[i]);
            var pivotValue=linkedInData.data.elements[i].pivotValue.split(":")[3]
            companyList.push(pivotValue)
        }
    } catch (error) {
        console.log(error);

        // log error using logger
        // send telegram notification
        await t_api.sendMessage({
            chat_id: config.telegram_cron.chat_id,
            text: "LinkedIn Helper \nError while fetching data from LinkedIn: \n" + error
        });

        process.exit(-1);
    }
    companyList = [...new Set(companyList)];

    return companyList;
};
