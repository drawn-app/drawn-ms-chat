import { Timestamp } from "../proto/generatedTypes/google/protobuf/Timestamp";

export function dateToTimestamp(date: Date): Timestamp {
    return {
        seconds: Math.floor(date.getTime() / 1000),
        nanos: date.getMilliseconds() * 1000000
    }
}