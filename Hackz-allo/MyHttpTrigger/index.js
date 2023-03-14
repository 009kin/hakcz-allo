module.exports = async function (context, req) {
    const fs = require('fs').promises;
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log(__dirname);
    let status;
    let body;
    const content_type = 'text/html';

    try {
        const text = await fs.readFile(__dirname + '/main.html', 'utf-8');
        status = 200;
        body = text;
    } catch (e) {
        status = 500;
        body = `Internal Server Error: ${e}`;
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: body,
        status: status,
        headers: { 'Content-Type': 'text/html' }
    };
}