"use client";

interface Props {
  id: string;
  items: (string | number)[];
}

const List = (props: Props) => {
  return (
    <>
      <ul>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
