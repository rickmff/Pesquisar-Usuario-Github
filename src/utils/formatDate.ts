import dayjs from "dayjs"

export default function formatDate(ISO: string): string {
    const date = dayjs(ISO);
    const formateDate = `Membro desde ${date.format("DD MM YYYY")}`

    return formateDate;
}