// import { AjaxAppender } from './ajax.appender';
// import { ConsoleAppender } from './console.appender';
// import { Appender } from './log.appender';
// import { AppenderOptions } from './logging.models';


// export class AppenderFactory {
//       static getAppender(options: AppenderOptions): Appender {
//             let appender: Appender;
//             switch (options.name.trim().toUpperCase()) {
//                   case 'CONSOLE':
//                         appender = new ConsoleAppender(options);
//                         break;
//                   case 'AJAX':
//                         appender = new AjaxAppender(options);
//                         break;
//             }
//             return appender;
//       }
// }