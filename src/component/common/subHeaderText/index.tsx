
import ReactMarkdown from "react-markdown";

type SubHeaderProps = {
    text: string[],
}

export const SubHeaderText = ({text}: SubHeaderProps) => {
    return <ul>
        {renderSubHeaderList({text})}
    </ul>
}

const renderSubHeaderList = ({text}: SubHeaderProps) => {
    return text.map((data) =>
        <ReactMarkdown>
            {data}
        </ReactMarkdown>
    );
}