
export const HistoryItem = ({ title, content }: { title: string, content: string }) => {
    return (
        <li>
            <h3>{title}</h3>
            <div
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />
        </li>
    )
}
