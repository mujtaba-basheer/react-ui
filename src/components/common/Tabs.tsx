import { ThemeProvider } from "@emotion/react";
import { List, ListItem } from "@mui/material";
import { useState } from "react";
import { theme } from "../../theme";
import { DesktopTabText } from "./DesktopTabText";

interface Props {
  options: { title: string; id: string }[];
  onClick: (key: string) => unknown;
}
export const Tabs = (props: Props) => {
  const { options, onClick } = props;

  const [index, setIndex] = useState<number | null>(null);

  const onItemClick = (text: string, i: number) => {
    setIndex(i);
  };

  return (
    <ThemeProvider theme={theme}>
      <List
        sx={{
          display: "inline-flex",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        {options?.map((item, i) => (
          <ListItem
            key={i}
            sx={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
              cursor: "pointer",
            }}
          >
            <DesktopTabText
              active={i === index}
              text={item.title}
              onClick={() => {
                onClick?.(item.id);
                onItemClick(item.id, i);
              }}
            />
          </ListItem>
        ))}
      </List>
    </ThemeProvider>
  );
};
