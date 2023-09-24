import { FieldValue, Timestamp } from 'firebase/firestore';

export function formatDateSmall(timestamp: Timestamp | FieldValue | undefined) {
	if (timestamp instanceof Timestamp) {
		const now = new Date();
		const postDate = timestamp.toDate();
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

export function formatDateLarge(timestamp: Timestamp | FieldValue | undefined) {
	if (timestamp instanceof Timestamp) {
		const date = timestamp.toDate();

		return new Intl.DateTimeFormat(navigator.language, {
			month: 'short',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			hour12: true
		}).format(date);
	}
	return '';
}
