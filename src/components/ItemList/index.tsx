import Grid from "@material-ui/core/Grid";
import { Link } from "@reach/router";

interface IdObject {
  id: string | number;
}

interface ComponentProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  baseUrl: string;
}

const ItemList = <T extends IdObject>({
  items,
  renderItem,
  baseUrl,
}: ComponentProps<T>) => {
  return (
    <Grid container spacing={4}>
      {items.map((item) => {
        return (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <Link to={`${baseUrl}/${item.id}`}>{renderItem(item)}</Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ItemList;
