import { Logger, ILogObj } from "tslog";

const log: Logger<ILogObj> = new Logger({
    name: "Main",
    prettyLogTemplate:
        "{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}\t{{logLevelName}}\t[{{filePathWithLine}}] {{name}}\t",
    prettyErrorTemplate:
        "\n{{errorName}} {{errorMessage}}\nerror stack:\n{{errorStack}}",
    prettyErrorStackTemplate:
        "  • {{fileName}}\t{{method}}\n\t{{filePathWithLine}}",
    prettyErrorParentNamesSeparator: ":",
    prettyErrorLoggerNameDelimiter: "\t",
    stylePrettyLogs: true,
    prettyLogTimeZone: "UTC",
    prettyLogStyles: {
        logLevelName: {
            "*": ["bold", "black", "bgWhiteBright", "dim"],
            SILLY: ["bold", "white"],
            TRACE: ["bold", "whiteBright"],
            DEBUG: ["bold", "green"],
            INFO: ["bold", "blue"],
            WARN: ["bold", "yellow"],
            ERROR: ["bold", "red"],
            FATAL: ["bold", "redBright"],
        },
        dateIsoStr: "white",
        filePathWithLine: "white",
        name: ["white", "bold"],
        nameWithDelimiterPrefix: ["white", "bold"],
        nameWithDelimiterSuffix: ["white", "bold"],
        errorName: ["bold", "bgRedBright", "whiteBright"],
        fileName: ["yellow"],
    },
});
const commandLog: Logger<ILogObj> = log.getSubLogger({
    name: "Commands",
});

const folderLog: Logger<ILogObj> = commandLog.getSubLogger({
    name: "Folder",
});

export { log, commandLog, folderLog };
