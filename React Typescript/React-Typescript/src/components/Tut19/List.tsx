type ListProps<T> = {
  list: T[];
  renderItem: (item: T) => React.ReactNode;
};

const List = <T extends {}>({ list, renderItem }: ListProps<T>) => {
  return (
    <div>
      {list.map((item, index) => (
        <div key={index}>{renderItem(item)}</div>
      ))}
    </div>
  );
};

export default List;