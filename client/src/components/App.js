import React from 'react';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider';
import { SocketProvider } from '../contexts/SocketProvider';
import useLocalStorege from '../hooks/useLocalStorege';
import Dashboard from './Dashboard';
import Login from './Login'

function App() {
  const [id, setId] = useLocalStorege('id')

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  return (
    <>
      {id ? dashboard : <Login onIdSubmit={setId} />}
    </>
  );
}

export default App;
