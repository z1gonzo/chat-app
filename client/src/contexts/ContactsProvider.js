import React, { useContext } from 'react'
import useLocalStorege from '../hooks/useLocalStorege'

const ContactsContext = React.createContext()

export function useContacts() {
 return useContext(ContactsContext)
}

export function ContactsProvider({ children }) {
 const [contacts, setContacts] = useLocalStorege('contacts', [])

 function createContact(id, name) {
  setContacts(prevContacts => {
   return [...prevContacts, { id, name }]
  })
 }

 return (
  <ContactsContext.Provider value={{ contacts, createContact }}>
   {children}
  </ContactsContext.Provider>
 )
}
