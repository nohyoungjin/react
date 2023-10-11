/** RenderPropsList.tsx */
interface IRenderPropsList<T> {
    renderItem?: (data: T) => ReactNode; // rendering 함수
    dataSource: Array<T>;
  }
  
  const RenderPropsList = function <T>({ dataSource, renderItem }: IRenderPropsList<T>) {
    return (
      <div>
        <span>List Count : {}</span>
        <ul>
          {dataSource.map((data, index) => {
            if (renderItem) {
              return <li key={index}>{renderItem(data)}</li>;
            }
            return <li key={index}>{String(data)}</li>;
          })}
        </ul>
      </div>
    );
  };

  export default RenderPropsList 