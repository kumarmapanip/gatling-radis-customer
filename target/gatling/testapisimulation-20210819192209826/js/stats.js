var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "375",
        "ko": "625"
    },
    "minResponseTime": {
        "total": "4091",
        "ok": "17934",
        "ko": "4091"
    },
    "maxResponseTime": {
        "total": "25508",
        "ok": "25508",
        "ko": "4951"
    },
    "meanResponseTime": {
        "total": "10820",
        "ok": "21323",
        "ko": "4519"
    },
    "standardDeviation": {
        "total": "8297",
        "ok": "2651",
        "ko": "143"
    },
    "percentiles1": {
        "total": "4638",
        "ok": "19940",
        "ko": "4538"
    },
    "percentiles2": {
        "total": "19312",
        "ok": "24075",
        "ko": "4623"
    },
    "percentiles3": {
        "total": "24682",
        "ok": "25129",
        "ko": "4704"
    },
    "percentiles4": {
        "total": "25250",
        "ok": "25301",
        "ko": "4871"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 375,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "count": 625,
    "percentage": 63
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.037",
        "ok": "13.889",
        "ko": "23.148"
    }
},
contents: {
"req_get-all-custome-27e69": {
        type: "REQUEST",
        name: "get all customer details",
path: "get all customer details",
pathFormatted: "req_get-all-custome-27e69",
stats: {
    "name": "get all customer details",
    "numberOfRequests": {
        "total": "1000",
        "ok": "375",
        "ko": "625"
    },
    "minResponseTime": {
        "total": "4091",
        "ok": "17934",
        "ko": "4091"
    },
    "maxResponseTime": {
        "total": "25508",
        "ok": "25508",
        "ko": "4951"
    },
    "meanResponseTime": {
        "total": "10820",
        "ok": "21323",
        "ko": "4519"
    },
    "standardDeviation": {
        "total": "8297",
        "ok": "2651",
        "ko": "143"
    },
    "percentiles1": {
        "total": "4638",
        "ok": "19940",
        "ko": "4538"
    },
    "percentiles2": {
        "total": "19312",
        "ok": "24075",
        "ko": "4623"
    },
    "percentiles3": {
        "total": "24682",
        "ok": "25129",
        "ko": "4704"
    },
    "percentiles4": {
        "total": "25250",
        "ok": "25301",
        "ko": "4871"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 375,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "count": 625,
    "percentage": 63
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.037",
        "ok": "13.889",
        "ko": "23.148"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
