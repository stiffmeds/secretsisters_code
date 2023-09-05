import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const express = require('express');
const https = require('https');
const sio = require('socket.io');
const { createLogger, format, transports } = require('winston');
var bodyParser = require('body-parser');
const mysql = require('mysql');
require('dotenv').config();
var medsSQL_connection = mysql.createConnection({
    host: 'localhost',
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_SITE_USERNAME,
    password: process.env.MYSQL_SITE_PASSWORD,
    database: process.env.MYSQL_SITE_DATABASE
});

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ssgServerOptions = {
    key: fs.readFileSync(process.env.KEY_CLOUDFLARE),
    cert: fs.readFileSync(process.env.CERT_SSG),
    requestCert: false,
    rejectUnauthorized: false
};

// JSON read/write
function JSONread(path) {
    try {
        return JSON.parse(fs.readFileSync(__dirname + '/' + path, { encoding: 'utf8', flag: 'r' }));
    } catch (err) {
        logger_code.error("ERROR: " + err);
        return false;
    };
};

function JSONwrite(path, towrite) {
    try {
        fs.writeFileSync(path, JSON.stringify(towrite));
    } catch (err) {
        logger_code.error("ERROR: " + err);
        return false;
    };
};

// setup logger
const logger_code = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true }),
        format.splat(),
        format.simple(),
        format.printf(({ level, message, label, timestamp }) => {
            return `${timestamp} ${level}: ${message}`;
        })
    ),
    defaultMeta: { service: 'code' },
    transports: [
        new transports.File({ filename: process.env.LOG_CODE_ERROR, level: 'error' }),
        new transports.File({ filename: process.env.LOG_CODE_ALL }),
        new transports.Console({})
    ]
});

// request handling
const port_code = process.env.SITE_CODE_PORT;
const site_code = express();

site_code.use(express.static(__dirname + '/public'));
site_code.use(bodyParser.urlencoded({ extended: false }));

site_code.get('/AtO', (req, res) => {
    res.sendFile(__dirname + '/public/AtO.html')
});
site_code.get('/AtO_Custom', (req, res) => {
    res.sendFile(__dirname + '/public/AtO_Custom.html')
});

site_code.get('/AtOCustom', (req, res) => {
    res.sendFile(__dirname + '/public/AtO_Custom.html')
});

site_code.get('/AtO_Seeds', (req, res) => {
    res.sendFile(__dirname + '/public/AtO_Seeds.html')
});

site_code.get('/AtOSeeds', (req, res) => {
    res.sendFile(__dirname + '/public/AtO_Seeds.html')
});

site_code.get('/AtO_Seeds_beta', (req, res) => {
    res.sendFile(__dirname + '/public/AtO_Seeds_beta.html')
});

site_code.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

site_code.get('/index', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const httpsServer_code = https.createServer(ssgServerOptions, site_code);
const io_code = new sio.Server(httpsServer_code, {});

try {
    medsSQL_connection.connect(function (err) {
        if (err) throw err;
        // update_yarrlist();
    });
} catch (err) {
    logger_code.error('requests connect error!', err);
    socket.emit('nearest exit', "Oopsie, database error! Please try again, and let me know if you see this often.");
};

io_code.on('connection', (socket) => {
    logger_code.info(socket.request.headers['cf-connecting-ip'] + ' has loaded meds!code!');
    /*socket.on('server status', async (game) => {
        game = game.toLowerCase();
        if (data_code_serverz.hasOwnProperty(game)) {
            var servstat = await serverStatus(game);
            if (servstat) {
                logger_code.info(socket.request.headers['cf-connecting-ip'] + ' checked ' + game + ' server: ONLINE');
                socket.emit('server status', game, data_code_serverz[game].playerCount);
            } else {
                logger_code.info(socket.request.headers['cf-connecting-ip'] + ' checked ' + game + ' server: OFFLINE');
                socket.emit('server status', game, 7777);
            };
        };
    });
    socket.on('request catalogue', async () => {
        if (yarrlist_lastupdate < ((new Date().getTime()) - 30000)) { await update_yarrlist() };
        socket.emit('request catalogue', yarrlist);
    }); */
});


httpsServer_code.listen(port_code, () => {
    logger_code.info(`meds!code running on port ${port_code}`);
});