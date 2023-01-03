import ReactMarkdown from "react-markdown";

type HeaderProps = {
    text: string,
}

export const HeaderText = ({text}: HeaderProps) => {
    return <ReactMarkdown>
        {text}
    </ReactMarkdown>
}