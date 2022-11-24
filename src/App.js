// import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import PostCollection from './ui-components/PostCollection';
import { Storage } from '@aws-amplify/storage';

import { MarketingFooter, NavBar, ReviewCollection, HeroLayout1, HeroLayout2, HeroLayout3, HeroLayout4, Features4x1, Features2x2 } from './ui-components'


Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <NavBar width='100%' />
      <HeroLayout2  width='100%' />
      <Features4x1  width='100%'  />
      <HeroLayout1 padding='3em'  width='100%' />
      <HeroLayout4  width='100%' />
      <Features2x2  width='100%'  />
      {/* <div className='container'>
        <button onClick={signOut}>Sign out</button>
      </div> */}
      <MarketingFooter width='100%'  />
    </>
  );
};

export default withAuthenticator(App);

async function onChange(e) {
  const file = e.target.files[0];
  try {
    await Storage.put(file.name, file, {
      contentType: "image/png", // contentType is optional
    });
  } catch (error) {
    console.log("Error uploading file: ", error);
  }
  const upload = Storage.put(file.name, file, {
    resumable: true,
    completeCallback: (event) => {
        console.log(`Successfully uploaded ${event.key}`);
    },
    progressCallback: (progress) => {
        console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
    },
    errorCallback: (err) => {
        console.error('Unexpected error while uploading', err);
    }
  });
  
  upload.pause();
  
  upload.resume();
  
  Storage.cancel(upload);
  
  // This duplicate uploads will resume the original upload.
  // eslint-disable-next-line
const duplicateUpload = Storage.put(file.name, file, {
  resumable: true,
});
}

<input type="file" onChange={onChange} />;