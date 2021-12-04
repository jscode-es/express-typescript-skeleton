//import chalk from 'chalk'

enum type_log {
    NONE,
    ERROR,
    NORMAL,
    DEBUG
}


class Console {
    private static type: any = type_log.NONE

    static setType(type: number) {
        if (typeof type !== 'number') return;

        Console.type = type_log[type]
    }

    static getTime() {
        let nowDate = new Date()
        return nowDate.toLocaleDateString() + ' ' + nowDate.toLocaleTimeString([], { hour12: false })
    }

    static log(...args: any) {
        if (Console.type < type_log.NORMAL) return;

        console.log(Console.getTime(), '[INFO]', ...args);
    }

    static error(...args: any) {
        if (Console.type < type_log.NORMAL) return;

        console.error(Console.getTime(), '[ERROR]', ...args);
    }

    static warn(...args: any) {
        if (Console.type < type_log.NORMAL) return;

        console.warn(Console.getTime(), '[WARN]', ...args);
    }

    static debug(...args: any) {
        if (Console.type < type_log.NORMAL) return;

        console.debug(Console.getTime(), '[DEBUG]', ...args);
    }
}

export default Console