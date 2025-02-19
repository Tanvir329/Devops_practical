import Body from "./Body";
import {SharedFileProvider} from "./utils/useSharedFile";

const App = () => {
    return (
        <SharedFileProvider>
            <Body/>
        </SharedFileProvider>

    );
};

export default App;

