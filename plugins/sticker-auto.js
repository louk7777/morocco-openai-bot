(function(_0x3fa32e,_0x5be09d){const _0x43f58f=_0x5777,_0x26052c=_0x3fa32e();while(!![]){try{const _0x38eb9c=-parseInt(_0x43f58f(0x140))/0x1*(-parseInt(_0x43f58f(0x155))/0x2)+-parseInt(_0x43f58f(0x15e))/0x3*(-parseInt(_0x43f58f(0x130))/0x4)+-parseInt(_0x43f58f(0x15a))/0x5+-parseInt(_0x43f58f(0x152))/0x6+-parseInt(_0x43f58f(0x158))/0x7*(parseInt(_0x43f58f(0x153))/0x8)+-parseInt(_0x43f58f(0x15b))/0x9*(parseInt(_0x43f58f(0x14d))/0xa)+-parseInt(_0x43f58f(0x136))/0xb*(-parseInt(_0x43f58f(0x154))/0xc);if(_0x38eb9c===_0x5be09d)break;else _0x26052c['push'](_0x26052c['shift']());}catch(_0x20df4b){_0x26052c['push'](_0x26052c['shift']());}}}(_0x21d4,0x22fb3));import _0x5e3482 from'node-fetch';import{Sticker}from'wa-sticker-formatter';export async function before(_0x389965,{match:_0x5edb02}){const _0x24beb0=_0x5777;let _0x46bb2d=(_0x5edb02[0x0]||'')[0x0],_0x4bb702=/net/[_0x24beb0(0x13b)](_0x389965[_0x24beb0(0x159)]);if(!_0x46bb2d&&/image/[_0x24beb0(0x13b)](_0x389965[_0x24beb0(0x13a)])&&_0x4bb702){let _0xf84a54=await createSticker(await _0x389965[_0x24beb0(0x157)]());this[_0x24beb0(0x15d)](_0x389965[_0x24beb0(0x159)],{'sticker':_0xf84a54},{'quoted':_0x389965});}else{if(!_0x46bb2d&&/video/['test'](_0x389965['mtype'])&&_0x4bb702){await _0x389965[_0x24beb0(0x133)](_0x24beb0(0x137));let _0x5ddd80=await mp4ToWebp(await _0x389965[_0x24beb0(0x157)]());this[_0x24beb0(0x15d)](_0x389965[_0x24beb0(0x159)],{'sticker':_0x5ddd80},{'quoted':_0x389965});}}}function _0x5777(_0x9a043a,_0x4ce9a0){const _0x21d431=_0x21d4();return _0x5777=function(_0x577702,_0x39f874){_0x577702=_0x577702-0x12f;let _0x56cc20=_0x21d431[_0x577702];return _0x56cc20;},_0x5777(_0x9a043a,_0x4ce9a0);}async function createSticker(_0x5e07fb){const _0x4f34f6=_0x5777;let _0x544517=await(await _0x5e3482(_0x4f34f6(0x151)))[_0x4f34f6(0x146)]();return new Sticker(_0x5e07fb,{'type':_0x4f34f6(0x147),'pack':_0x544517[_0x4f34f6(0x15c)],'author':_0x544517['aauthor']})[_0x4f34f6(0x132)]();}async function mp4ToWebp(_0x59ce07){const _0x1ddbe8=_0x5777;let _0x35ccba=await(await _0x5e3482(_0x1ddbe8(0x151)))['json'](),_0x1ee355=_0x59ce07[_0x1ddbe8(0x161)](_0x1ddbe8(0x12f));const _0x33b00a={'file':_0x1ddbe8(0x145)+_0x1ee355,'processOptions':{'crop':![],'startTime':_0x1ddbe8(0x149),'endTime':_0x1ddbe8(0x13d),'loop':0x0},'stickerMetadata':{'pack':_0x35ccba[_0x1ddbe8(0x15c)],'author':_0x35ccba[_0x1ddbe8(0x142)]},'sessionInfo':{'WA_VERSION':_0x1ddbe8(0x139),'PAGE_UA':_0x1ddbe8(0x14f),'WA_AUTOMATE_VERSION':'3.6.10\x20UPDATE\x20AVAILABLE:\x203.6.11','BROWSER_VERSION':_0x1ddbe8(0x156),'OS':_0x1ddbe8(0x14b),'START_TS':0x177dc64c025,'NUM':_0x1ddbe8(0x160),'LAUNCH_TIME_MS':0x1efe,'PHONE_VERSION':_0x1ddbe8(0x148)},'config':{'sessionId':_0x1ddbe8(0x138),'headless':!![],'qrTimeout':0x14,'authTimeout':0x0,'cacheEnabled':![],'useChrome':!![],'killProcessOnBrowserClose':!![],'throwErrorOnTosBlock':![],'chromiumArgs':[_0x1ddbe8(0x131),_0x1ddbe8(0x134),_0x1ddbe8(0x14a),_0x1ddbe8(0x141),'--disable-application-cache','--disable-offline-load-stale-cache',_0x1ddbe8(0x15f)],'executablePath':_0x1ddbe8(0x13e),'skipBrokenMethodsCheck':!![],'stickerServerEndpoint':!![]}};let _0x5c65df=await _0x5e3482('https://sticker-api.openwa.dev/convertMp4BufferToWebpDataUrl',{'method':_0x1ddbe8(0x144),'headers':{'Accept':_0x1ddbe8(0x143),'Content-Type':_0x1ddbe8(0x13c)},'body':JSON[_0x1ddbe8(0x13f)](_0x33b00a)});return Buffer[_0x1ddbe8(0x135)]((await _0x5c65df[_0x1ddbe8(0x150)]())[_0x1ddbe8(0x14c)](_0x1ddbe8(0x14e))[0x1],'base64');}function _0x21d4(){const _0x262e1c=['Windows\x20Server\x202016','split','825790ANNVpW',';base64,','WhatsApp/2.2037.6\x20Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_15_6)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/85.0.4183.83\x20Safari/537.36','text','https://raw.githubusercontent.com/OS-OFC/TERMOS-WABOT/main/2/4/2/728/223/1333/12.js','1470918IQMlyw','34120YXByIZ','2250816ZuONdL','478DeKSCP','HeadlessChrome/88.0.4324.190','download','63nOPVjM','chat','49405zCDKki','9WqJWLD','apackname','sendMessage','346641PySzKR','--disk-cache-size=0','6247','toString','base64','8TgidiB','--no-sandbox','toBuffer','reply','--disable-setuid-sandbox','from','11weMMem','اذا\x20كان\x20الفيديو\x20كبير\x20الحجم\x20او\x20فوق\x2020\x20ثانية\x20لن\x20يتحول\x20لملصق','session','2.2106.5','mtype','test','application/json;charset=utf-8','00:00:06.0','C:\x5c\x5cProgram\x20Files\x20(x86)\x5c\x5cGoogle\x5c\x5cChrome\x5c\x5cApplication\x5c\x5cchrome.exe','stringify','421baFlEC','--disable-cache','aauthor','application/json,\x20text/plain,\x20/','post','data:video/mp4;base64,','json','full','2.20.205.16','00:00:00.0','--aggressive-cache-discard'];_0x21d4=function(){return _0x262e1c;};return _0x21d4();}