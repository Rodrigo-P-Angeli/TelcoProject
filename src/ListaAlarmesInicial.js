import * as dateFns from 'date-fns'

export const alarmes = [
    {
        idAlarm: 0,
        idObject: 0,
        start: dateFns.addHours(new Date(), Math.random() * 10000 - 5000).getTime()/1000,
        end: dateFns.addHours(new Date(), Math.random() * 10000 - 5000).getTime()/1000,
        idPriority: 0,
        alarmName: 'Alarme1',
        objectName: 'Objeto1',
        type: 'Dispositivo',
    },
    {
        idAlarm: 1,
        idObject: 1,
        start: dateFns.addHours(new Date(), Math.random() * 10000 - 5000).getTime()/1000,
        end: dateFns.addHours(new Date(), Math.random() * 10000 - 5000).getTime()/1000,
        idPriority: 1,
        alarmName: 'Alarme2',
        objectName: 'Objeto1',
        type: 'Dispositivo',
    },
    {
        idAlarm: 2,
        idObject: 2,
        start: dateFns.addHours(new Date(), Math.random() * 10000 - 5000).getTime()/1000,
        end: dateFns.addHours(new Date(), Math.random() * 10000 - 5000).getTime()/1000,
        idPriority: 2,
        alarmName: 'Alarme3',
        objectName: 'Objeto1',
        type: 'Dispositivo',
    },
    {
        idAlarm: 3,
        idObject: 3,
        start: dateFns.addHours(new Date(), Math.random() * 10000 - 5000).getTime()/1000,
        end: dateFns.addHours(new Date(), Math.random() * 10000 - 5000).getTime()/1000,
        idPriority: 3,
        alarmName: 'Alarme4',
        objectName: 'Objeto1',
        type: 'Dispositivo',
    },
]