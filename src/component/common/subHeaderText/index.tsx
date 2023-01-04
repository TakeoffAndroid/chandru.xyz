
import ReactMarkdown from "react-markdown";

type SubHeaderProps = {
    text: string[],
}

export const SubHeaderText = ({text}: SubHeaderProps) => {
    return <div>
        {renderSubHeaderList({text})}
    </div>
}

const renderSubHeaderList = ({text}: SubHeaderProps) => {
    return text.map((data) =>
        <ReactMarkdown linkTarget="_blank">
            {data}
        </ReactMarkdown>
    );
}