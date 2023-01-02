import styles from "../../../App.module.css";
import Chip from "@mui/material/Chip";

type ChipListProps = {
    items: string[]
}
export const ChipList = ({items}: ChipListProps) => {
    return <div className={styles.chipsListItem}>
        {items.map((data) => {
            return (
                <Chip
                    label={data}
                />
            );
        })}
    </div>
}