import React, { useEffect, useState } from 'react'
import RenderPropsList from 'containers/Page/RenderPropsList'

/** App.tsx */
const App: React.FC = function () {
    const [data, setData] = useState([
        { id: 1, name: "flower", score: 91 },
        { id: 2, name: "geoji", score: 100 },
        { id: 3, name: "novell", score: 73 },
        { id: 4, name: "star", score: 84 },
    ]);

    return (
        <RenderPropsList
            dataSource={data}
            renderItem={({ name, score }) => {
                return (
                    <div>
                        <span>{`Name : ${name} , Score : ${score}`}</span>
                    </div>
                );
            }}
        />
    );
}

export default App