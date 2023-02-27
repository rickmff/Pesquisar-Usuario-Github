import dayjs from "dayjs"

export default function formatDate(ISO: string): string {
    const date = dayjs(ISO);
    const formateDate = date.format("MMM D, YYYY");

    return formateDate;
}