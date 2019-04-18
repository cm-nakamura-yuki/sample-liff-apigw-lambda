
exports.handler = async(event:any) => {
    console.log(JSON.stringify(event, null, 2));
    let html = await makeMenuHtml();

    return {
        statusCode: 200,
        isBase64Encoded: false,
        headers: {
            'Content-Type': 'text/html'
        },
        body: html
    }
}

const makeMenuHtml = () => {
    return '<!DOCTYPE html>' + 
        '<html><head><meta charset="utf-8"><title>Hello, World.</title></head>' + 
        '<body><h1>Hello, World.</h1><script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script>'+
        '<script>liff.init(' + 
        'data => { ' +
        'const userId = data.context.userId;' + 
        'alert(userId)' + 
        '}, ' +
        ' err => { ' + 
        'alert(err)' + 
        '}' +
        ');' + 
        '</script>' +  
        '</body></html>';
};