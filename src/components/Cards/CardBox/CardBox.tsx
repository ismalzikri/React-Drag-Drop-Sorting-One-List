import CardBoxStyling from "./CardBox.module.scss";
/*
  - don't forget to write a test 
*/
type cardProps = {
  title: string;
  index: number;
  dragStart: (position: number) => void;
  dragEnter: (position: number) => void;
  drop: () => void;
};

export const CardBox = ({
  title,
  index,
  dragStart,
  dragEnter,
  drop,
}: cardProps) => {
  return (
    <div
      className={CardBoxStyling.draglement}
      draggable
      onDragStart={() => dragStart(index)}
      onDragEnter={() => dragEnter(index)}
      onDrop={() => drop}
      onDragOver={(e) => e.preventDefault()}
    >
      <p>{title}</p>
    </div>
  );
};
