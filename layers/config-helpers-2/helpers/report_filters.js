'use strict';
const mongo = require('/opt/helpers/mongo');
const crud = require('/opt/helpers/crud');
//const mariadb = require('/opt/helpers/mariadb');
const ObjectId = require('/opt/node_modules/mongodb').ObjectId;
//const mariadb = require('/opt/node_modules/mariadb');
let pool;
let campaignIDs=[];
let crmAccountIDs=[];
let crmContactIDs=[]; 
let creativeIDs=[];

async function getCampaignIdFilter(event,reportFiltersObj){
    try{  
        var druid_campaingnids=[]
        if(reportFiltersObj.campaignFilterLength>0){
            if(reportFiltersObj.campaignFilters.id.length>0){
                //console.log('inside if 1 campaignFilterLength');
                for(var i=0;i<reportFiltersObj.campaignFilters.id.length;i++){                  
                // console.log('inside if campaignFilterLength 2',reportFiltersObj.campaignFilters.id[i],i);
                    druid_campaingnids.push(reportFiltersObj.campaignFilters.id[i]);
                }        
            }
            else{
            // console.log('inside else 1');       
                campaignIDs = await getCampaignIds(event,reportFiltersObj);
                console.log('getCampaignIdFilter>>',campaignIDs.length)
                if(campaignIDs.length>0)
                for(var i=0;i<campaignIDs.length;i++)
                {            
                    //console.log('inside else 2 campaignFilterLength',campaignIDs[i]._id); 
                    druid_campaingnids.push(campaignIDs[i]._id.toString());
                }
            }
        }
   return druid_campaingnids;
}
catch(e)
{
    console.log("Exception in getCampaignIdFilters",e)
}
   
    
};
exports.resolveCampaignIdFilter = async (event,reportFiltersObj = {}) => {
    try{
        var druidIds=await getCampaignIdFilter(event,reportFiltersObj)
        return new Promise((resolve, reject) => {
            try{
            // console.log("ddids----",druidIds)
                resolve({"campaignIds":druidIds})
            }catch{
                reject({"error":1})
            }
        });
    }
    catch(e)
    {
        console.log("Exception in resolveCampaignIdFilter",e)
    }
};

async function getAccountIdFilter (event,reportFiltersObj){
    try{  
        var druid_crmaccountids=[]
        if(reportFiltersObj.accountFilterLength>0){
            if(reportFiltersObj.accountFilters.id.length>0){
            // console.log('inside if 1 accountFilterLength');
                for(var i=0;i<reportFiltersObj.accountFilters.id.length;i++){     
                    //console.log('inside if 2',reportFiltersObj.accountFilters.id[i],i);   
                    druid_crmaccountids.push(reportFiltersObj.accountFilters.id[i]);
                }         
            }
            else{
            // console.log('inside else 2');
                crmAccountIDs = await getAccountIds(event,reportFiltersObj);
                console.log('getAccountIdFilter>>',crmAccountIDs.length)
                if(crmAccountIDs.length>0)
                    for(var i=0;i<crmAccountIDs.length;i++)
                    {                 
                        //console.log('inside else 2 accountFilterLength crmAccountIDs',crmAccountIDs[i]._id);   
                        druid_crmaccountids.push(crmAccountIDs[i]._id);
                    }
            }
        }
         return druid_crmaccountids;
}
    catch(e)
    {
        console.log("Exception in getAccountIdFilter",e)
    }
};

exports.resolveAccountIdFilter = async (event,reportFiltersObj = {}) => {
    try{
        var druidIds=await getAccountIdFilter(event,reportFiltersObj)
        return new Promise((resolve, reject) => {
            try{
            // console.log("ddids----",druidIds)
                resolve({"accountIds":druidIds})
            }catch{
                reject({"error":1})
            }
        });
    }
    catch(e)
    {
        console.log("Exception in resolveAccountIdFilter",e)
    }
};

async function getContactIdFilter(event,reportFiltersObj){
    try{ 

            var druid_crmcontactids=[]
            if(reportFiltersObj.contactFilterLength>0){
                if(reportFiltersObj.contactFilters.id.length>0){  
                    //console.log('inside if contactFilters 1');
                    for(var i=0;i<reportFiltersObj.contactFilters.id.length;i++){ 
                    // console.log('inside if 2',reportFiltersObj.contactFilters.id[i],i);         
                        druid_crmcontactids.push(reportFiltersObj.contactFilters.id[i]);
                    }          
                }
                else{
                // console.log('inside else 3');
                    crmContactIDs = await getContactIds(event,reportFiltersObj);
                    console.log('getContactIdFilter>>',crmContactIDs.length)
                    if(crmContactIDs.length>0)
                    for(var i=0;i<crmContactIDs.length;i++)
                    {
                    // console.log('inside else 2 contactFilterLength crmContactIDs',crmContactIDs[i]._id);   
                        druid_crmcontactids.push(crmContactIDs[i]._id);
                    }
                }
            }
            return druid_crmcontactids;
        }
        catch(e)
        {
            console.log("Exception in getContactIdFilter",e)
        }
};

exports.resolveContactIdFilter = async (event,reportFiltersObj = {}) => {
    try{ 
            var druidIds=await getContactIdFilter(event,reportFiltersObj)
            return new Promise((resolve, reject) => {
                try{
                // console.log("ddids----",druidIds)
                    resolve({"contactIds":druidIds})
                }catch{
                    reject({"error":1})
                }
            });
    }
    catch(e)
    {
        console.log("Exception in resolveContactIdFilter",e)
    } 
};
async function getCreativeIdFilter(event,reportFiltersObj){
    try{ 
            var druid_creativeids=[]
            if(reportFiltersObj.creativeFilterLength>0){
                if(reportFiltersObj.creativeFilters.creative_id.length>0){
                    //console.log('inside if 1 creativeFilterLength');
                    for(var i=0;i<reportFiltersObj.creativeFilters.creative_id.length;i++){   
                    // console.log('inside if 2 creativeFilterLength',reportFiltersObj.creativeFilters.id[i],i);     
                        druid_creativeids.push(reportFiltersObj.creativeFilters.creative_id[i]);
                    }                 
                }
                else{
                    //console.log('inside else 4');
                    creativeIDs = await getCreativeIds(event,reportFiltersObj);
                    console.log('getCreativeIdFilter>>',creativeIDs.length)
                    if(creativeIDs.length>0)
                    for(var i=0;i<creativeIDs.length;i++)
                    { 
                        //console.log('inside else 2 creativeFilterLength creativeIDs',creativeIDs[i]._id); 
                        druid_creativeids.push(creativeIDs[i]._id);
                    }
                }
            }  
            return druid_creativeids
    }    
    catch(e)
    {
        console.log("Exception in getCreativeIdFilter",e)
    } 
};
exports.resolveCreativeIdFilter = async (event,reportFiltersObj = {}) => {
    try{ 
            var druidIds=await getCreativeIdFilter(event,reportFiltersObj)
            return new Promise((resolve, reject) => {
                try{
                // console.log("ddids----",druidIds)
                    resolve({"creativeIds":druidIds})
                }catch{
                    reject({"error":1})
                }
            });
    }    
    catch(e)
    {
            console.log("Exception in resolveCreativeIdFilter",e)
    } 
};

async function getContactIds(event,reportObj) {
    var crmcontactcondition = [];
    try{ 
        crmcontactcondition.push({'projects.project_id': {"$in" : [new ObjectId(reportObj.projectId)]}});
        if(reportObj.contactFilters.title.length>0)
            crmcontactcondition.push({'employment.title': {$in: reportObj.contactFilters.title}});
        if(reportObj.contactFilters.department.length>0)
            crmcontactcondition.push({'employment.function': {$in: reportObj.contactFilters.department}});
        if(reportObj.contactFilters.seniority.length>0)
            crmcontactcondition.push({'employment.seniority': {$in: reportObj.contactFilters.seniority}});
        if(reportObj.contactFilters.country.length>0)
            crmcontactcondition.push({'geo.country': {$in: reportObj.contactFilters.country}});
        if((reportObj.contactFilters.engagement_score.min_engagement_score!=0) && (reportObj.contactFilters.engagement_score.max_engagement_score!=0))                
            crmcontactcondition.push({"projects.engagement_score": {$gte: reportObj.contactFilters.engagement_score.min_engagement_score,
                                                                        $lte:  reportObj.contactFilters.engagement_score.max_engagement_score}});
        console.log('getContactIds>> crmcontactcondition ',crmcontactcondition);
        var queryObject = {_id:1};
        var contacts = await crud.findDetailsWithAggregate(event.clientDb, 'crmcontacts', crmcontactcondition, queryObject);
        console.log('getContactIds>>',contacts)
        return contacts.result;
    }
    catch(e)
    {
        console.log("Exception in resolveCreativeIdFilter",e)
    }                 
}
async function getAccountIds(event,reportObj) {
    var crmaccountcondition = [];
    try{
        crmaccountcondition.push({'projects.project_id': {"$in" : [new ObjectId(reportObj.projectId)]}});
        if(reportObj.accountFilters.industry.length>0)
            crmaccountcondition.push({'category.industry': {$in: reportObj.accountFilters.industry}});
        if(reportObj.accountFilters.revenueRange.length>0)
            crmaccountcondition.push({'metrics.estimatedAnnualRevenue': {$in: reportObj.accountFilters.revenueRange}});
        if(reportObj.accountFilters.country.length>0)
            crmaccountcondition.push({'geo.country': {$in: reportObj.accountFilters.country}});
        console.log('inside  getCRMAccountIDsList method calling 2 reportObj.accountFilters.engagement_score.min_engagement_score', reportObj.accountFilters.engagmentScore.min_engagement_score,reportObj.accountFilters.engagmentScore.max_engagement_score);
        if((reportObj.accountFilters.engagmentScore.min_engagement_score!=0) && (reportObj.accountFilters.engagmentScore.max_engagement_score!=0))                
            crmaccountcondition.push({"projects.engagement_score": {$gte: reportObj.accountFilters.engagmentScore.min_engagement_score,
                                                                    $lte:  reportObj.accountFilters.engagmentScore.max_engagement_score}});
        console.log('getAccountIds>>',crmaccountcondition)
        var queryObject = {_id:1};
        var companies = await crud.findDetailsWithAggregate(event.clientDb, 'crmaccounts', crmaccountcondition, queryObject);
        console.log('getAccountIds>>',companies)
        return companies.result;
    }
    catch(e)
    {
            console.log("Exception in resolveCreativeIdFilter",e)
    } 
}
async function getCampaignIds(event,reportObj) {
    var campaigncondition = {};
    try{
        campaigncondition.project_id = {$in:   [reportObj.projectId.toString()]};
        if(reportObj.campaignFilters.audienceType.length>0)
        campaigncondition.audience_type = {$in: reportObj.campaignFilters.audienceType};           
        if(reportObj.campaignFilters.audienceSegments.length>0)
        campaigncondition.audience_segment =  {$in: reportObj.campaignFilters.audienceSegments};                
        if(reportObj.campaignFilters.campaignType.length>0)
        campaigncondition.campaign_type = {$in: reportObj.campaignFilters.campaignType}; 
        if(reportObj.campaignFilters.status.length>0)
        campaigncondition.status = {$in: reportObj.campaignFilters.status}; 
        var queryObject = {_id:1};
        console.log('In getCampaignIds campaigncondition',JSON.stringify(campaigncondition))
        var campaignIds = await crud.findDetails(event.clientDb, 'campaigns', campaigncondition, queryObject);
        console.log('getCampaignIds >>',campaignIds);
        return campaignIds.result;
    }
    catch(e)
    {
            console.log("Exception in resolveCreativeIdFilter",e)
    } 
}
async function getCreativeIds(event,reportObj) {
    try{  
        var condition = {};
        condition.project_id = {$in:   [reportObj.projectId.toString()]};  
        if(reportObj.creativeFilters.channel.length>0)
            condition.channel = {$in: reportObj.creativeFilters.channel}; 
        if(reportObj.creativeFilters.status.length>0)
            condition.status = {$in: reportObj.creativeFilters.status}; 
        if(reportObj.creativeFilters.creativeType.length>0)           
            condition.creativeType = {$or: [{'linkedin.format': {$in: reportObj.creativeFilters.creativeType}},
                                    {'facebook.format': {$in: reportObj.creativeFilters.creativeType}},
                                    {'twitter.format': {$in: reportObj.creativeFilters.creativeType}},
                                    {'programmatic.format': {$in: reportObj.creativeFilters.creativeType}}]};                           
        console.log('condition',condition)   
        var queryObject = {_id:1};
        var creativeIds = await crud.findDetails(event.clientDb, 'creatives', condition, queryObject);
        console.log('getCreativeIds>>',creativeIds)
        return creativeIds.result;
    }
    catch(e)
    {
            console.log("Exception in resolveCreativeIdFilter",e)
    } 
}