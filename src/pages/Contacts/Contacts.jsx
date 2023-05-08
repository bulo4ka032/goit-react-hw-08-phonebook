import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList, ContactsEditor } from 'components/index';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BallTriangle } from 'react-loader-spinner';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <ContactsEditor />
      <div>
        {isLoading && (
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="grey"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        )}
      </div>
      <ContactsList />
    </HelmetProvider>
  );
};

export default Contacts;
