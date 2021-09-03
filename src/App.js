
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

require('dotenv').config();

const projectId = process.env.PROJECTID;
const username = process.env.USERNAME;
const usersceret = process.env.USER_SECRET;

const App = () =>{

    return (

        <ChatEngine
			height="100vh"
			userName="Infinium"
			userSecret="ThisIsNaruto"
			projectID="d5b60537-b785-4e16-bf7d-4d366a5ad8a5"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>

        // <ChatEngine 
        //     height="100vh"
        //     userName={username}
		// 	userSecret={usersceret}
		// 	projectID={projectId}
        // />
    );
};

export default App;