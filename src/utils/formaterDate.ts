import dayjs from "dayjs"

export default function formaterDate(isoDate: string): string {
    const date = dayjs(isoDate);
    const formateDate = date.format("MMM D, YYYY");

    return formateDate;
}