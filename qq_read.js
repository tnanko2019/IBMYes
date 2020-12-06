const jsname = '企鹅读书';
const $ = Env(jsname);

//CK运行
let isGetCookie = typeof $request !== 'undefined';
if (isGetCookie) {
    GetCookie()
}

function GetCookie() {
    if ($request && $request.url.indexOf("addReadTimeWithBid?") >= 0) {
        const bookUrl = $request.url;
        if (bookUrl) $.setdata(bookUrl, bookUrl);
        $.log(`[${jsname}] 获取阅读时长url: 成功,bookUrl: \n${bookUrl}\n`);

        const qqReadHeaders = JSON.stringify($request.headers);
        if (qqReadHeaders) $.setdata(qqReadHeaders, qqReadHeaders);
        $.log(`[${jsname}] 获取headers成功,qqReadHeaders: \n${qqReadHeaders}\n`);
        $.msg(qqreadtimeheaderKey, 获取阅读时长cookie: 成功🎉, ``)

    }
}
