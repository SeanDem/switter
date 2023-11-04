import { FieldValue, Timestamp } from 'firebase/firestore';

export function formatDateSmall(timestamp: Timestamp | FieldValue | Date) {
	if (timestamp instanceof Timestamp) {
		timestamp = timestamp.toDate();
	} 
	if (timestamp instanceof Date) {
		const now = new Date();
		const postDate = timestamp
		const diffInMs = now.getTime() - postDate.getTime();
		const diffInSec = diffInMs / 1000;
		const diffInMin = diffInSec / 60;
		const diffInHrs = diffInMin / 60;

		if (diffInMin < 60) {
			return Math.round(diffInMin) + 'm';
		} else if (diffInHrs < 24) {
			return Math.round(diffInHrs) + 'h';
		} else {
			return new Intl.DateTimeFormat(navigator.language, { month: 'short', day: '2-digit' }).format(
				postDate
			);
		}
	}
	return '';
}

export function formatDateLarge(timestamp: Timestamp | FieldValue | Date) {
	if (timestamp instanceof Timestamp) {
		timestamp = timestamp.toDate();
	} 
	if (timestamp instanceof Date) {
		console.log("formatting");
		return new Intl.DateTimeFormat(navigator.language, {
			month: 'short',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			hour12: true
		}).format(timestamp);
	}
	console.log("npt formatting");
	return '';
}

function serializeTimestamp(timestamp : Timestamp) {
    return {
        seconds: timestamp.seconds,
        nanoseconds: timestamp.nanoseconds
    };
}
export function mapToSerializableTimestamp<T>(list: T[], getter: (item: T) => { property: keyof T, value: Timestamp }): T[] {
    return list.map(item => {
        const { property, value: timestamp } = getter(item);
        if (timestamp instanceof Timestamp) {
            const serializedTimestamp = serializeTimestamp(timestamp);
            return { ...item, [property]: serializedTimestamp } as T;
        }
        return item;
    });
}