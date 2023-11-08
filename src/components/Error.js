import { useRouteError } from "react-router-dom";
import sjcl from 'sjcl';

function hashPassword(password) {
  try{
    return sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(password));
  }
  catch(error){
    console.error("Error hashing password:", error);
  }
}

function dox(){
  for (var i = 1;i<=1000;i++){
    console.log(hashPassword('ABCDEF')==hashPassword('abcdef'));
  }
}


export default function Error() {
  const error = useRouteError();
  console.error(error);
  const i = 0;
  dox();
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
